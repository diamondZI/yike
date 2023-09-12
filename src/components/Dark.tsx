
import IsDark from '@/hooks/spaghetti'

import {useEffect,useState} from 'react';


 


export default function Dark(){
  const [Mode,setMode]=useState(true)
  const [theme,settheme]=useState(()=>{
    return localStorage.theme
   })
   function cutover() {
    localStorage.theme === 'light'?localStorage.theme='dark':localStorage.theme='light';
   console.log(localStorage.theme);
    settheme(localStorage.theme)
  }
  function DARK() {
    cutover()
    setMode(!Mode)
  }
  useEffect(()=>{
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {     
      document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
  })

  return (
    <div onClick={()=>{cutover()}} className='w-14 rounded-lg m-2 bg-buttoncolor h-7 flex justify-between shadow-inner shadow-[black] dark:shadow-[red]'>
    <div className='flex-1'>

    </div>
    <div className='flex-1'></div>
    <div className={`absolute cursor-pointer transform transition-transform  h-7 w-7 bg-darkorange ${theme==='light'?'rounded-l-lg ':'rounded-r-lg  translate-x-full'}`}></div>

  </div>
  )
}
