import { NextApiRequest, NextApiResponse } from 'next';

import prisma from '@/until/prisma'
export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const a=request.body
  
  try {

    // const result = await prisma.user.create({
    //   data:{
    //     username: a.username,
    //     password: a.password,
    //     email: a.email
    //   }
    // })
    console.log(a);
    
    return response.status(200).json({ a });
  } catch (error) {
    return response.status(500).json({ error });
  }
}
