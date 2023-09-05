import { NextApiRequest, NextApiResponse } from 'next';
import Token from './test';
import prisma from '@/until/prisma'
export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {

Token(request, response)
  try {
  const msg= await prisma.status.createMany({data:[{
    name:'留言'
 },{name:'目标'},{name:'理想'}]})
    const result = await prisma.note.create({data:{
      content:"application",
      userId:1,
      title:'第一次创建',
      url:'https://th.bing.com/th/id/R.9406aa76e1ed1ae2ff4d2227f506a56f?rik=2JlKchhcargArg&riu=http%3a%2f%2fimg.mm4000.com%2ffile%2fd%2ffc%2f62506f2088.jpg&ehk=9prTp0pHRyuEl7yBuyF7MODqXlpgpPymspFdorrn67M%3d&risl=&pid=ImgRaw&r=0',
      statusId:1
    }})
   console.log(result);
   
  
   
    return response.status(200).json({ ok:'创建成功' });
  } catch (error) {
    return response.status(500).json({ error });
  }
}
