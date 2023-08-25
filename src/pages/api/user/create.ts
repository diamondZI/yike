import prisma from '@/until/prisma'
import { PrismaClient, Prisma } from '@prisma/client'
import { NextApiResponse,NextApiRequest} from 'next'

export default async function  handler(req:NextApiRequest,res:NextApiResponse){
    
    if (    req.method='POST' ) {
       
req.headers['Content-Type']='application/json'
    try {
    await prisma.user.create({
      data: {
                sex:'man',
                state:"ye2",
                name:"qin",
                birthday_Date:new Date,
                email:'alreadyexisting@mail.com',
                password:'password'
      }
    })
    } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      if (e.code === 'P2002') {
        console.log('There is a unique constraint violation, a new user cannot be created with this email')
      }
    }
    throw e
    }

    //   await prisma.user.create({
    //          data:{
    //             sex:'man',
    //             state:"ye2",
    //             name:"qin",
    //             birthday_Date:'2000-12-11',
    //             email:'2580456922@qq.com',
    //             password:'password'
    //           }
    //     })
       
        res.status(200).json({
            ok:"success",
        })    
     }
     
    
   
}
