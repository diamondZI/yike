import { NextApiRequest, NextApiResponse } from 'next';

import prisma from '@/until/prisma'

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  
  const a=JSON.parse(request.body)
  try {
    const result = await prisma.reply.findMany({
      where:{
        noteId: a.NoteId,
      }
    })
    return response.status(200).json({ ok:'更新成功' ,data:result});
  } catch (error) {
    return response.status(500).json({ error });
  }
}
