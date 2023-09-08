import { NextApiRequest, NextApiResponse } from 'next';

import prisma from '@/until/prisma'
export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const a=JSON.parse(request.body)


  try {
    const result = await prisma.note.delete({
      where:{
        id: a.id
      }
    })
    return response.status(200).json({ ok:'删除成功' ,data:result});
  } catch (error) {
    return response.status(500).json({ error });
  }
}
