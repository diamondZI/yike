'use client'
import Title from '@/components/titleName'
import {useState} from 'react'
import {useEffect} from 'react'
import Link from 'next/link'
import fn from '@/hooks/api'
import {useAppDispatch} from '@/features/hooks'
import {lodeuserinfo} from '@/features/module/User'
import {useRouter} from 'next/navigation'
import {useAutoAnimate} from '@formkit/auto-animate/react'
export default function Home( 
  ) {
   const [loginkey,setkey]=useState(false)
   const [auto]=useAutoAnimate()
   const dispatch=useAppDispatch()
   const Router=useRouter()
   async function userinfo() {
    const {POST}=fn()
    const User=localStorage.getItem('User') 
    if (User) {
    const res=await POST('api/User/userinfo',JSON.parse(User))
    console.log(res);
    
     if (!res.ok) {
      localStorage.removeItem('User')
      localStorage.removeItem('token')
      console.log('清理完成');
     }else{ 
     
     dispatch(lodeuserinfo())
    }
    }
  }
  useEffect(()=>{
  console.log("!");
  
   userinfo()
  },[])
  return (
    <div  ref={auto}>
     <Title title='登录吧!' message='参与或观光,匿名或真性,open U head'></Title>
     { 
    <section className='flex justify-around w-full h-96 items-center px-1 '>
      <button className='w-52 m-1 h-16 rounded-lg  bg-yellow text-lg border  transition-colors duration-500 border-[black] hover:bg-[black] hover:text-textcolor border-solid' onClick={()=>{Router.push('/messageview')}}  >游客</button>
     <Link href='/login'>
     <button onClick={()=>{setkey(true)}}  className='w-52 m-1 h-16 rounded-lg  bg-greenyellow text-lg hover:bg-[black] duration-500 hover:text-textcolor' >登录</button>
     </Link>
    </section>
     }

     
   </div>
  )
}
