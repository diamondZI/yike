import { NextApiRequest, NextApiResponse } from 'next';

import prisma from '@/until/prisma'
import Token from '@/pages/api/token';
export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
   await Token(request, response)
  const a=JSON.parse(request.body)
  try {
    const result = await prisma.reply.create({
      data:{
        noteId: a.NoteId,
        content:a.content,
        userId: a.UserId
      }
    })
   
    
    return response.status(200).json({ ok:'添加成功' ,data:result});
  } catch (error) {
    return response.status(500).json({ error });
  }
}
