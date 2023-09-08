import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  
  const a=JSON.parse(request.body)
  try {
   
   
    
    return response.status(200).json({ ok:'添加成功' ,data:'1'});
  } catch (error) {
    return response.status(500).json({ error });
  }
}
