import { NextApiRequest, NextApiResponse } from 'next';

import prisma from '@/until/prisma'
export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {

  // 合并查询
  const a=JSON.parse(request.body)
  try {
    const result = await prisma.user.findMany({
     where:{
      id: a.id,
      
     },
     select:{
      notes:true
     }
    })
    return response.status(200).json({ ok:'1' ,data:result});
  } catch (error) {
    return response.status(500).json({ error });
  }
}
