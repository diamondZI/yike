'use client'

import {MaterialSymbolsClose} from '@/until/icon'
import Divider from '@/components/divider';
import Image from 'next/image'
import {inter} from '@/style/font'
import Register from './Register';
import Login from './Login';
import {useEffect} from 'react'
import fn from '@/hooks/api'
export default function page(){
 
  return <div className='relative bg-textcolor shadow-sm md:rounded-md shadow-buttoncolor w-full h-[calc(100vh-2.5rem)] md:w-96 md:h-[31.25rem] border-yellow px-3 border border-solid '>
          <div className='flex justify-center  h-12 w-full '>
<MaterialSymbolsClose onClick={()=>{}} className='text-lg hover:-translate-y-1 transition absolute left-2 top-3 '/>
<Image width={30}  height={30} src="/favicon.ico"   alt="logo"  className='w-8 h-8 m-2'/>
         </div>
     <span><p  className={`${inter.className}  text-2xl`}>注册 一刻</p></span>    
         <Register/>
       <Divider position_mode='center'>或</Divider>
     <Login/>

     
      </div>

}
