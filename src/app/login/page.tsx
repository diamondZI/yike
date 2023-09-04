'use client'

import {MaterialSymbolsClose} from '@/until/icon'
import {useForm,SubmitHandler} from 'react-hook-form'
import Image from 'next/image'
import {inter} from '@/style/font'
interface User{
  name:String 
  email:String
  password:String
}

export default function page(){
 const {register,handleSubmit,watch,formState:{errors}}=useForm<User>({
 })
 const onSubmit: SubmitHandler<User>=async (data) => {
    const res=await fetch('api/createUser',{method:'POST',body:JSON.stringify(data)}).then(response =>response.json())
  console.log(res);
  
  }

 
  return <div className='relative bg-textcolor shadow-sm md:rounded-md shadow-buttoncolor w-full h-[calc(100vh-2.5rem)] md:w-96 md:h-[31.25rem] border-yellow px-3 border border-solid '>
          <div className='flex justify-center  h-12 w-full '>
<MaterialSymbolsClose className='text-lg hover:-translate-y-1 transition absolute left-2 top-3 '/>
<Image width={30}  height={30} src="/favicon.ico"   alt="logo"  className='w-8 h-8 m-2'/>
         </div>
     <span><p  className={`${inter.className}  text-2xl`}>注册 一刻</p></span>    
         <form className='flex flex-col items-center w-full' onSubmit={handleSubmit(onSubmit)}>
    <input className='w-80 m-2 shadow-yellow shadow-sm h-10'  type="text" {...register("email")} placeholder='输入你的邮箱' />
    <input className='w-80 m-2 shadow-yellow shadow-sm h-10' type="text" {...register("name")} placeholder='输入你的名称' />
    <input className='w-80 m-2 shadow-yellow shadow-sm h-10' type="password" {...register("password")} placeholder='输入你的密码' />
    <button onClick={()=>{}} className={`bg-yellowbody w-3/4 py-2 px-8 rounded-full text-xl ${inter.className}`}>注册</button>
        </form>
       
     
      </div>
}
