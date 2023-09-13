import Image from 'next/image';
import {useAppSelector} from '@/features/hooks';
import Login from '@/components/Login/Login'
import {useAutoAnimate} from '@formkit/auto-animate/react';
import {Source,inter} from '@/hooks/font';
export default function Dark(){
 const [UserAuto]=useAutoAnimate()
  const User=useAppSelector(state=>state.User)
  return (
    <div className={`@container w-8 hover:w-52 duration-200 transition-[height,width] 
      h-8 hover:rounded-none 
    hover:absolute hover:top-0 hover:right-0
    hover:flex-shrink-0 hover:h-80 hover:z-10 
    rounded-full bg-textcolor dark:bg-DarkBgColor flex justify-evenly flex-col items-center hover:p-2`}>
    <Image width={30}   height={30} src="/Attu.jpg"   alt="logo"  className='w-8 h-8 transition-all rounded-full'/>
   <div ref={UserAuto} className=' @[2rem]:hidden @[12rem]:flex flex-col items-center hidden hover:flex'>
  {
    !User.id?<div ref={UserAuto}>
       <h1>登录</h1>
     <Login/>
    </div>:<div ref={UserAuto} className={`flex justify-evenly items-center flex-col ${inter.className}`}>
    <h1>用户:{User.username}</h1>
    <h1>邮箱:{User.email}</h1>
    <h1>在这里记录你的心情吧</h1>
    </div>
  } 
   </div>


    </div>
 
  )
}
