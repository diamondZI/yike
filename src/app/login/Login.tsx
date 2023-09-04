'use client'
import {inter} from '@/style/font';
import {useForm as UseForm,SubmitHandler} from 'react-hook-form';
interface User{
  name?:String 
  email:String
  password:String
}
export default function moduleName(){
  const {register,handleSubmit,watch,formState:{errors}}=UseForm<User>({
  })
  const onSubmit: SubmitHandler<User>=async (data) => {
    const res=await fetch('api/loginUser',{method:'POST',body:JSON.stringify(data)}).then(response =>response.json())
  console.log(res);
  }

  return <form className='flex flex-col items-center w-full' onSubmit={handleSubmit(onSubmit)}>
  <input className='w-80 m-2 shadow-dodgerblue shadow-sm h-10'  type="text" {...register("email")} placeholder='输入你的邮箱' />
  <input className='w-80 m-2 shadow-dodgerblue shadow-sm h-10' type="password" {...register("password")} placeholder='输入你的密码' />
  <button  className={`bg-dodgerblue w-3/4 py-2 px-8 rounded-full text-xl ${inter.className}`}>登录</button>
      </form>
}
