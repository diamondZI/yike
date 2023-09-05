import { NextApiRequest, NextApiResponse } from 'next';

import prisma from '@/until/prisma'
import Token from './test';

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
  
) {
  Token(request,response)
  try {

    const result = await prisma.user.findMany()
    if (result) {
      return response.status(200).json({ ok:result,});
    }else{
      return response.status(404).json({ ok:"获取失败"})
    }  
  
  } catch (error) {
    return response.status(500).json({ error:error });
  }
  
}
