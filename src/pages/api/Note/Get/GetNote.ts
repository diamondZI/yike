import { data } from 'autoprefixer';
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/until/prisma'

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  try {
    const result = await prisma.note.findMany({
        include:{
          replies:true
        }
    })
    return response.status(200).json({ ok:'1' ,data:result});
  } catch (error) {
    return response.status(500).json({ error });
  }
}
