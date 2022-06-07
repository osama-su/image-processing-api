import express, { Application, Request, Response } from 'express'
import morgan from 'morgan'
import * as dotenv from 'dotenv'

dotenv.config()

// Port from environment variable
const PORT = process.env.PORT || 3000
// express server instance
const app: Application = express()
// middleware
app.use(morgan('dev'))
// routes
app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Hello World' })
})
// start server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})
// export app for testing
export default app
