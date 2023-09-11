import { NextApiRequest, NextApiResponse } from 'next';

import prisma from '@/until/prisma'
import Token from '@/pages/api/token';
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

      const result = await prisma.user.findFirst({
       where:{
        username: a.name,
        password: a.password,
        email: a.email
       }
      })  
      if (result) {
        return response.status(200).json({ ok:true,msg:'登录成功', data: result});
      }else{
        return response.status(500).json({ ok:false,msg:"用户不存在" });
      }
    } catch (error) {
      return response.status(500).json({ ok:false,msg:"用户不存在" });
    }
  }else{
    return response.status(401).json({ok,msg,err});
  }
}
