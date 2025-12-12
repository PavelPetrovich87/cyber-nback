import express from 'express'
import cors from 'cors'
import crypto from 'crypto'

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

app.post('/bootstrap', (req, res) => {
  const { clientId } = req.body

  if (!clientId || typeof clientId !== 'string' || clientId.trim() === '') {
    return res.status(400).json({ error: 'Invalid clientId' })
  }

  const userId = crypto.createHash('sha256').update(clientId).digest('hex').substring(0, 16)
  res.json({ userId })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

