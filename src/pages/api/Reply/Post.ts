import { NextApiRequest, NextApiResponse } from 'next';
import Token from '@/pages/api/token';
import prisma from '@/until/prisma'
export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  
  request.method='POST'
  const a=JSON.parse(request.body)
 console.log(a);
 
    try {
      const result = await prisma.reply.create({
        data:{
          noteId: a.NoteId,
          content:a.content,
          userId: a.UserId
        }
      })
      return response.status(200).json({ ok:'添加成功',data:result});
    } catch (error) {
     
      return response.status(500).json({ok:false, error });
    }
  
}
