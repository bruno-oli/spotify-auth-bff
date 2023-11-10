import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import { routes } from './routes/index.routes'

const app = express()

app.use(express.json())
app.use(
  cors({
    origin: '*',
  }),
)

app.use(routes)

export { app }
