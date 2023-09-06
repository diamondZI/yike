import { NextApiRequest, NextApiResponse } from 'next';

import prisma from '@/until/prisma'
import token from '@/pages/api/token';
export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  await token(request, response)
  const a=JSON.parse(request.body)
 
  try {

    const result = await prisma.user.update({
     where:{
      email: a.email
     },
     data:{
      username: a.name,
      password: a.password,
      email: a.email
    }
    })  
    return response.status(200).json({ ok:'修改成功', data: result});
  } catch (error) {
    return response.status(500).json({ error });
  }
}
