import { NextApiRequest, NextApiResponse } from 'next';

import prisma from '@/until/prisma'
export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const a=request.body
  
  try {

    const result = await prisma.user.findMany();
    console.log(a);
    
    return response.status(200).json({ result });
  } catch (error) {
    return response.status(500).json({ error });
  }
}
