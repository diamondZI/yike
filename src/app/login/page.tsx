'use client'
import {use, useId, useState} from 'react'
import {MaterialSymbolsClose} from '@/until/icon'
// import second from ''
import Image from 'next/image'
// import second from '@/app/favicon.ico'
interface User{
  name:String 
  email:String
  sex?:String
  password:String
  birthday_Date?: Date 
  state?:String
}

export default function page(){

    // const a=async () =>{
    //   let data=await fetch('hello',{
    //   method:'POST',
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body:JSON.stringify({
    //     usename:
    //   }),
      
    //   }).then(res=>res.json())  
    //   console.log(data);
      
    // }
 
  return <div className='relative w-full h-[calc(100vh-2.5rem)] md:w-96 md:h-96 border-yellow px-3 border border-solid '>
          <div className='flex justify-center  h-12 w-full '>
<MaterialSymbolsClose className='  absolute left-2 top-3 '/>
<Image width={30}  height={30} src="/favicon.ico"   alt="logo"  className='w-8 h-8 m-2'/>
         </div>
         <section>
          
         </section>
      </div>
}
