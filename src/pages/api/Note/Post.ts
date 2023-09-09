import { NextApiRequest, NextApiResponse } from 'next';
import {useRouter} from 'next/router';
import prisma from '@/until/prisma'
import Token from '@/pages/api/token';
export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const a=JSON.parse(request.body)
const token=request.headers['authorization']
  
const  {ok,msg,err}= Token(token)
  if (ok) {
    try {
      const result = await prisma.note.create({
        data:{
          userId:a.UserId,
          content:a.content,
          title:a.title,
          statusId:a.statusId,
          url:a.url
        }
      })
      console.log(result);
      
      return response.status(200).json({ ok:'添加成功' ,data:result});
    } catch (error) {
      return response.status(500).json({ error });
    }
  }else{
    return response.status(200).json({ ok:msg ,err});
  }
}
