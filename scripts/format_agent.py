import sys
import json

BLUE = "\033[94m"
GREEN = "\033[92m"
YELLOW = "\033[93m"
CYAN = "\033[96m"
RESET = "\033[0m"
DIM = "\033[90m"
MAGENTA = "\033[95m"


def clean_text(text_obj):
    if isinstance(text_obj, dict) and "content" in text_obj:
        items = text_obj["content"]
        if isinstance(items, list):
            return " ".join(
                [i.get("text", "") for i in items if i.get("type") == "text"]
            )
        return str(items)
    return str(text_obj) if text_obj is not None else ""


def extract_args(data):
    tc = data.get("tool_call", {})

    if isinstance(tc, dict):
        if "function" in tc:
            function = tc["function"] or {}
            return f"{function.get('name')} {function.get('arguments')}"

        args = tc.get("arguments") or tc.get("args") or ""
        name = tc.get("name") or ""

        if isinstance(args, str) and args.startswith("{"):
            try:
                parsed = json.loads(args)
                if "command" in parsed:
                    return parsed["command"]
                return str(parsed)
            except Exception:
                pass

        return f"{name} {args}".strip()

    return str(tc)


def main():
    print(f"{DIM}--- Agent Stream Started ---{RESET}")

    last_type = None

    for line in sys.stdin:
        try:
            if not line.strip():
                continue
            data = json.loads(line)

            event_type = data.get("type")

            if event_type == "assistant":
                msg = data.get("message", {})
                content = clean_text(msg)
                if content:
                    print(f"\n{GREEN}{content}{RESET}")
                last_type = "text"
                continue

            if event_type == "tool_call" or event_type == "command":
                args = extract_args(data)
                name = data.get("name", "tool")
                print(f"{CYAN}🛠  [TOOL]: {RESET}{MAGENTA}{args or name}{RESET}")
                last_type = "tool"
                continue

            if event_type == "thinking":
                print(f"{YELLOW}.{RESET}", end="", flush=True)
                last_type = "thinking"
                continue

            if event_type == "user":
                print(f"\n{BLUE}👤 [USER]:{RESET} Task Received")
                last_type = "user"
                continue

        except Exception:
            continue

    print(f"\n{DIM}--- Agent Finished ---{RESET}")


if __name__ == "__main__":
    main()


