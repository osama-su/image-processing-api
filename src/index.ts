import express, { Application, Request, Response } from 'express'
import morgan from 'morgan'
import * as dotenv from 'dotenv'
import routes from './routes/index'

dotenv.config()

// Port from environment variable
const PORT = process.env.PORT || 3000
// express server instance
const app: Application = express()
// HTTP request logger middleware
app.use(morgan('dev'))
// routes
app.use('/', routes)
// start server
app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`)
})
// export app for testing
export default app
