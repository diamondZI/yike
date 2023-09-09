import { NextApiRequest, NextApiResponse } from 'next';

import prisma from '@/until/prisma'
export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {

  try {
    const result = await prisma.note.deleteMany({
      where :{
        id:1
      }
    })
    // const deleteUser = prisma.reply.deleteMany({
    //   where:{
    //     noteId:1
    //   }
    // })
    // console.log(result,deleteUser);
    
    return response.status(200).json({ ok:'删除成功' ,data:result});
  } catch (error) {
    return response.status(500).json({ ok:"失败",error:error });
  }
}
