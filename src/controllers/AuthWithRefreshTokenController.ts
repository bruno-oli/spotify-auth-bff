import { Request, Response } from 'express'
import axios from 'axios'

class AuthUserWithRefreshToken {
  async handle(req: Request, res: Response) {
    const { refresh_token: refreshToken } = req.body

    if (!refreshToken) {
      return res.status(400).json({
        message: 'Refresh token not provided',
      })
    }

    try {
      const body = new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: refreshToken as string,
        client_id: process.env.CLIENT_ID as string,
      })

      const data = await axios.post(
        'https://accounts.spotify.com/api/token',
        body,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: `Basic ${Buffer.from(
              `${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`,
            ).toString('base64')}`,
          },
        },
      )

      return res.status(200).json({ data: data.data })
    } catch (error) {
      return res.status(401).json({
        message: 'Invalid refresh token',
      })
    }
  }
}

export { AuthUserWithRefreshToken }
