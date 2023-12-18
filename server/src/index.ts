import dotenv from 'dotenv'
import express from 'express'
import { createServer } from 'http'
import { Server } from 'socket.io'

dotenv.config()

const app = express()
const httpServer = createServer(app)
const io = new Server(httpServer, {
  cors: {
    origin: 'http://localhost:5173',
  },
})

io.on('connect', (socket) => {
  console.log('Hello World')
})

const PORT = process.env.PORT || 3000
httpServer.listen(PORT, () =>
  console.log(`Server is listening on port: ${PORT}`)
)
