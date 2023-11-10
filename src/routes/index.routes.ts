import { Router } from 'express'
import { authRoutes } from './auth-routes/auth-routes.routes'

const routes = Router()

routes.use(authRoutes)

export { routes }
