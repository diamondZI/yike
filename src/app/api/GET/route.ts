import {NextApiResponse,NextApiRequest} from 'next';
import prisma from '@/until/prisma'
export  async function GET(req:NextApiRequest,res:NextApiResponse){
    try {
      const meg=await prisma.user.findMany()
      console.log(meg);
      
       res.status(200).send({message:meg});
    }catch{
       res.status(500).send({message:"User not found"})
    }
    
}
