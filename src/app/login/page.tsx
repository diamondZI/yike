'use client'

import {MaterialSymbolsClose} from '@/until/icon'
import Divider from '@/components/divider';
import Image from 'next/image'
import {inter} from '@/hooks/font'
import Register from '../../components/Login/Register';
import Login from '../../components/Login/Login';
import {useRouter as UseRouter} from 'next/navigation'
export default function page(){
 const Router=UseRouter()
 
  return <div className='relative -translate-x-[50%] lg:top-[3.125rem] left-[50%] bg-textcolor shadow-sm md:rounded-md shadow-buttoncolor w-full h-[calc(100vh-40px)] md:w-96 md:h-[500px] border-yellow px-3 border border-solid '>
          <div className='flex cursor-pointer justify-center  h-12 w-full '>
<MaterialSymbolsClose onClick={()=>{Router.push('/')}} className='text-lg hover:-translate-y-1 transition absolute left-2 top-3 '/>
<Image width={30}  height={30} src="/favicon.ico"   alt="logo"  className='w-8 h-8 m-2'/>
         </div>
     <span><p  className={`${inter.className}  text-2xl`}>注册 一刻</p></span>    
         <Register/>
       <Divider position_mode='center'>或</Divider>
     <Login/>

     
      </div>

}
