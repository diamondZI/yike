
import { NextApiRequest, NextApiResponse } from 'next';
import JWT from 'jsonwebtoken';
import prisma from '@/until/prisma'
export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const data=JSON.parse(request.body)
  const token=await JWT.sign(data, 'Josiah',{expiresIn:60*60*24})
  try {
    const result = await prisma.user.findFirst({
      where:{
        password: data.password,
        email: data.email
      }
    })
    
   if (result) {
    return response.status(200).json({ ok:'登陆成功' ,token:token,data:result});
   }else{
    return response.status(404).json({ err:'你的账号不存在,请验证后登录', });
   }
  } catch (error) {
    return response.status(500).json({ error });
  }
}
