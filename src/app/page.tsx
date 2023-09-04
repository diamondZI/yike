'use client'
import Title from '@/app/components/titleName'
import {useState} from 'react'
import Link from 'next/link'
import {useAutoAnimate} from '@formkit/auto-animate/react'
export default function Home( 
  ) {
   const [loginkey,setkey]=useState(false)
   const [auto]=useAutoAnimate()
  return (
    <div  ref={auto}>
     <Title title='登录吧!' message='参与或观光,匿名或真性,open U head'></Title>
     { 
    <section className='flex justify-around w-full h-96 items-center px-1 '>
      <button className='w-52 m-1 h-16 rounded-lg  bg-yellow text-lg border  transition-colors duration-500 border-[black] hover:bg-[black] hover:text-textcolor border-solid' >游客</button>
     <Link href='/login'>
     <button onClick={()=>{setkey(true)}}  className='w-52 m-1 h-16 rounded-lg  bg-greenyellow text-lg hover:bg-[black] duration-500 hover:text-textcolor' >登录</button>
     </Link>
    </section>
     }

     
   </div>
  )
}
