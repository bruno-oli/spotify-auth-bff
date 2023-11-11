import { generateRandomString } from '@/utils/generateRandomString'
import { Request, Response } from 'express'
import querystring from 'node:querystring'

class LoginUserController {
  async handle(_req: Request, res: Response) {
    const state = generateRandomString(16)

    const scope =
      'streaming user-read-email user-read-private user-library-read user-library-modify user-read-playback-state user-modify-playback-state user-top-read user-read-recently-played'

    const clientId = process.env.CLIENT_ID as string
    const redirectUri = process.env.REDIRECT_URI as string

    res.redirect(
      `https://accounts.spotify.com/authorize?${querystring.stringify({
        response_type: 'code',
        client_id: clientId,
        scope,
        redirect_uri: redirectUri,
        state,
      })}`,
    )
  }
}

export { LoginUserController }
