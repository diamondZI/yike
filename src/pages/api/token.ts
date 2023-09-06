import { NextApiRequest, NextApiResponse } from 'next';
import  JWT  from 'jsonwebtoken';


export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const {authorization} =await request.headers
  const token = authorization
  if (token==='null'||!token) response.status(200).json({err:"not token"})    
 if (token) {
  JWT.verify(token, 'Josiah', (err, data) => {
    if (err && err.message === 'invalid token') return response.status(400).json({ message: '无效 token', code: 0 })

    if (err && err.message === 'jwt expired') return response.status(400).json({ message: 'token 失效', code: 0 })

    if (!err) {
       return 
    }
  })  
 }
}

