import { NextApiRequest, NextApiResponse } from 'next';
import JWT from 'jsonwebtoken';
import prisma from '@/until/prisma'

 function  token(data:object) {
 const token =  JWT.sign(data, 'Josiah',{expiresIn:60})
return token
 
} 
export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
  next:NextApiRequest
) {
  const a=JSON.parse(request.body)
  try {

    const result = await prisma.user.findFirst({
      where:{
        username: a.name,
        password:a.password,       
      }
    })
    if (result) {
      return response.status(200).json({ ok:'登录成功',token:token(a)});
    }else{
      return response.status(404).json({ ok:"账号或者密码不对"})
    }  
  
  } catch (error) {
    return response.status(500).json({ error:error });
  }
}
