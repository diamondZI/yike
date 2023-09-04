import { NextApiRequest, NextApiResponse } from 'next';

import prisma from '@/until/prisma'
export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const a=JSON.parse(request.body)
 
  try {

    const result = await prisma.user.findMany({
      where:{
        username: a.name,
        password:a.password,       
      }
    })
    console.log(a);
    return response.status(200).json({ ok:'登录成功' });
  } catch (error) {
    return response.status(500).json({ error:error });
  }
}
