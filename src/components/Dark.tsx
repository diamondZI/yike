'use client'
import {useEffect,useState} from 'react';
import  {IcOutlineNightsStay,MaterialSymbolsLightModeOutlineSharp} from '@/until/icon'


export default function Dark(){
 
  const [theme,settheme]=useState('dark')
   function cutover() {
   localStorage.theme === 'light'?localStorage.theme='dark':localStorage.theme='light';
    settheme(localStorage.theme)
  }

  useEffect(()=>{
    
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {     
      document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
  })

  return (
    <div onClick={()=>{cutover()}} className='w-7 sm:w-14 rounded-lg m-2  sm:h-7 flex justify-between shadow-inner shadow-[black] dark:shadow-dodgerblue items-center'>
   
   <IcOutlineNightsStay className=' flex-1 text-buttoncolor text-lg'></IcOutlineNightsStay>   
      <MaterialSymbolsLightModeOutlineSharp className='flex-1 text-lg'/>
   
    <div className={`absolute  cursor-pointer transform transition-transform  sm:h-7 w-[0.875rem] sm:w-7 bg-darkorange ${theme==='light'?'rounded-l-lg ':'rounded-r-lg  translate-x-full'}`}></div>

  </div>
  )
}
