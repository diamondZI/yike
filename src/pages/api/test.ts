import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/until/prisma'
import Token from '@/pages/api/token';
export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  
const token=request.headers['authorization']
  
const  {ok,msg,err}= Token(token)
console.log(ok,msg,err);

  if (ok) {
    try {
      return response.status(200).json({ ok:true,msg:"添加成功",data:'result'});
    } catch (error) {
      return response.status(500).json({ok:false, error });
    }
  }else{
    return response.status(401).json({ ok, err,msg});
  }
}
