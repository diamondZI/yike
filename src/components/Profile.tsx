import {useState} from 'react';
import Image from 'next/image';
import Register from '@/components/Login/Register'
import Login from '@/components/Login/Login'
import Divider from '@/components/divider'
export default function Dark(){
  const [Mode,setMode]=useState(true)
  return (
    <div className={`@container w-8 hover:w-52 duration-200 transition-[height,width] 
      h-8 hover:rounded-none 
    hover:absolute hover:top-0 hover:right-0
    hover:flex-shrink-0 hover:h-80 hover:z-10 
    rounded-full bg-textcolor flex justify-evenly flex-col items-center hover:p-2`}>
    <Image width={30}   height={30} src="/Attu.jpg"   alt="logo"  className='w-8 h-8 transition-all rounded-full'/>
   <div className='@[2rem]:hidden @[12rem]:flex flex-col items-center hidden hover:flex'>
    <h1>登录</h1>
   
     <Login/>
   </div>


    </div>
 
  )
}
