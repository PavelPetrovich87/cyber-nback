import { test, expect } from '@playwright/test';

test.describe('Persistence Layer', () => {
  test('should persist shards balance after reload', async ({ page }) => {
    // Navigate to the app
    await page.goto('/');

    // Wait for the shards balance to be visible
    // The implementation currently has testID="shards-balance"
    // In Expo Web, this often translates to data-testid or just a text search if not mapped
    const shardsElement = page.getByTestId('shards-balance');
    await expect(shardsElement).toBeVisible();

    // Get initial shards value
    const initialText = await shardsElement.innerText();
    const initialShards = parseInt(initialText.replace(/[^0-9]/g, '')) || 0;

    // Note: Since US-01 (Earn Shards) is not yet implemented, 
    // we expect it to be 0 or populated from a previous session.
    // For now, we verify that it is at least present and survives a reload.
    
    await page.reload();

    const postReloadText = await shardsElement.innerText();
    const postReloadShards = parseInt(postReloadText.replace(/[^0-9]/g, '')) || 0;

    expect(postReloadShards).toBe(initialShards);
  });

  test('should maintain userId consistency', async ({ page, context }) => {
    await page.goto('/');
    
    // Check if client-id is stored in IndexedDB (Web implementation)
    // We can verify this via evaluating script or checking network calls to /bootstrap
    const bootstrapRequest = page.waitForResponse(response => 
      response.url().includes('/bootstrap') && response.status() === 200
    );
    
    await page.reload();
    const response = await bootstrapRequest;
    const body = await response.json();
    
    expect(body.userId).toBeDefined();
    const firstUserId = body.userId;

    // Second reload should use same clientId and get same userId
    const secondBootstrapRequest = page.waitForResponse(response => 
      response.url().includes('/bootstrap') && response.status() === 200
    );
    await page.reload();
    const secondResponse = await secondBootstrapRequest;
    const secondBody = await secondResponse.json();
    
    expect(secondBody.userId).toBe(firstUserId);
  });
});
