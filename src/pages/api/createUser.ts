import { NextApiRequest, NextApiResponse } from 'next';

import prisma from '@/until/prisma'
export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const a=JSON.parse(request.body)
 
  try {

    const result = await prisma.user.create({
      data:{
        username: a.name,
        password: a.password,
        email: a.email
      }
    })
    console.log(a);
  
    // const result = await prisma.user.findMany()
    return response.status(200).json({ ok:'1' });
  } catch (error) {
    return response.status(500).json({ error });
  }
}
