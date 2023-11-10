import axios from 'axios'
import { Request, Response } from 'express'
import querystring from 'node:querystring'

class AuthUserController {
  async handle(req: Request, res: Response) {
    const { code } = req.query

    if (!code) {
      return res.status(400).json({
        message: 'Code not provided',
      })
    }

    try {
      const data = await axios.post(
        'https://accounts.spotify.com/api/token',
        {
          grant_type: 'authorization_code',
          code,
          redirect_uri: process.env.REDIRECT_URI,
        },
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: `Basic ${Buffer.from(
              `${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`,
            ).toString('base64')}`,
          },
        },
      )

      return res.redirect(
        `${process.env.REDIRECT_FRONT_END}?${querystring.stringify({
          access_token: data.data.access_token,
          refresh_token: data.data.refresh_token,
        })}`,
      )
    } catch (error) {
      console.log('sexo2')
      return res.redirect(
        `${process.env.REDIRECT_FRONT_END}?${querystring.stringify({
          error: true,
        })}`,
      )
    }
  }
}

export { AuthUserController }
