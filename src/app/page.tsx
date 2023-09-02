'use client'
import Title from '@/app/components/titleName'
import {useState} from 'react'
import {useAutoAnimate} from '@formkit/auto-animate/react'
export default function Home( 
  ) {
   const [loginkey,setkey]=useState(false)
   const [auto]=useAutoAnimate()
  return (
    <div className='min-h-[calc(100vh-2.5rem)]' ref={auto}>
     <Title title='登录吧!' message='参与或观光,匿名或真性,open U head'></Title>
     {
      !loginkey?<section className='flex justify-around w-full h-96 items-center px-1 '>
      <button className='w-52 m-1 h-16 rounded-lg  bg-yellow text-lg border  transition-colors duration-500 border-[black] hover:bg-[black] hover:text-textcolor border-solid' >游客</button>
      <button onClick={()=>{setkey(true)}}  className='w-52 m-1 h-16 rounded-lg  bg-greenyellow text-lg hover:bg-[black] duration-500 hover:text-textcolor' >登录</button>
  </section>:<div className='flex justify-center w-full flex-col'>
   <form className='flex flex-col w-full items-center' >
      <label htmlFor="email" className='m-3 '>
       <span className='mx-2  text-yellowbody  font-serif font-bold text-xl'> email:</span>
        <input type="text" id='email' />
      </label>
      <label htmlFor="passage" className='m-3'>
       <span className='mx-2 text-yellowbody font-serif font-bold text-xl'> passage:</span>
        <input type="text" id='passage' />
      </label>
   </form>
    <button onClick={()=>{setkey(false)}}>返回</button>
       </div>
     }

     
   </div>
  )
}
