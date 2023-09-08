import { NextApiRequest, NextApiResponse } from 'next';
import Token from '@/pages/api/token';
import prisma from '@/until/prisma'
export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const key=request.headers['authorization']
  const {ok,msg,err}=Token(key)
  request.method='POST'
  const a=JSON.parse(request.body)
  if (ok) {
    try {
      const result = await prisma.reply.create({
        data:{
          noteId: a.NoteId,
          content:a.content,
          userId: a.UserId
        }
      })
     console.log({ ok:'添加成功' ,data:result});
     
      
      return response.status(200).json({ ok:'添加成功' ,data:result});
    } catch (error) {
      return response.status(500).json({ error });
    }
  }else{
    return response.status(401).json({ error:err });
  }
}
