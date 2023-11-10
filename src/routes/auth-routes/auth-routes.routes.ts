import { AuthUserController } from '@/controllers/AuthUserController'
import { AuthUserWithRefreshToken } from '@/controllers/AuthWithRefreshTokenController'
import { LoginUserController } from '@/controllers/LoginUserController'
import { Router } from 'express'

const authRoutes = Router()

const loginUserController = new LoginUserController()
const authUserController = new AuthUserController()
const authWithRefreshToken = new AuthUserWithRefreshToken()

authRoutes.get('/login', loginUserController.handle)
authRoutes.get('/auth', authUserController.handle)
authRoutes.post('/refresh-token', authWithRefreshToken.handle)

export { authRoutes }
