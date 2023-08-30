import {NextApiResponse,NextApiRequest} from 'next';
export default async function handler(req:NextApiRequest,res:NextApiResponse){
await res.status(200).send("ok");
}
import prisma from '@/until/prisma'
// import { PrismaClient, Prisma } from '@prisma/client'
// import { NextApiResponse,NextApiRequest} from 'next'

// export default async function  handler(req:NextApiRequest,res:NextApiResponse){
    
//     if (    req.method='POST' ) {
       
// req.headers['Content-Type']='application/json'
//     try {
//     await prisma.user.create({
//       data: {    
//                 name:"qin",
//                 created_time:new Date,
//                 email:'alreadyexisting@mail.com',
//                 cards:{
//                   create:{ 
//                     state: '目标',
//                     Likes: 1, 
//                     content:'你好啊 世界',
//                     time: new Date,
//                     // replies:{create:{content:"111"}]}
//                     // replies:{
//                     //   create:{
//                     //     // content:'做的非常好'
//                     //   }
//                     // }
//                     },
                
             
//                 }
//       }
//     })
//     } catch (e) {
//     if (e instanceof Prisma.PrismaClientKnownRequestError) {
//       if (e.code === 'P2002') {
//         console.log('There is a unique constraint violation, a new user cannot be created with this email')
//       }
//     }
//     throw e
//     }

//     //   await prisma.user.create({
//     //          data:{
//     //             sex:'man',
//     //             state:"ye2",
//     //             name:"qin",
//     //             birthday_Date:'2000-12-11',
//     //             email:'2580456922@qq.com',
//     //             password:'password'
//     //           }
//     //     })
       
//         res.status(200).json({
//             ok:"success",
//         })    
//      }
     
    
   
// }

