import { NextApiRequest, NextApiResponse } from 'next';

import prisma from '@/until/prisma'
import Token from '@/pages/api/token';
export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const a=JSON.parse(request.body)
// await Token()
  try {
    const result = await prisma.note.update({
      where:{
        id: a.id,
      },
      data:{
        content:a.content
      }
    })
    return response.status(200).json({ ok:'修改成功' ,data:result});
  } catch (error) {
    return response.status(500).json({ error });
  }
}
