'use client'
import Nav from '@/app/components/nav';
import {useRouter} from 'next/navigation'
import {useEffect} from 'react';
export default function Home( 
  ) {
    const router=useRouter();
 useEffect(()=>{
 
  router.push('/home')
 })
  
     
  return (
   <></>
  )
}
