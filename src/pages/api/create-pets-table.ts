import { NextApiRequest, NextApiResponse } from 'next';

import prisma from '@/until/prisma'
export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  try {
    const result = await prisma.user.create({
      data:{
        name:"user",
        email:"user@vercel",
        password:"password",
        created_time: new Date(),
      }
    })
    return response.status(200).json({ result });
  } catch (error) {
    return response.status(500).json({ error });
  }
}
