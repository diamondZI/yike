import Link from 'next/link'
import Image from 'next/image'
export default function Nav({route}:{route:string|null}){
   
  return <>
  <nav className='flex flex-1   justify-center w-full   bg-yellowbody h-10 items-center p-2'>

 <Link href={"/"} className='flex absolute left-2 items-center' > 

  <Image width={30}  height={30} src="/favicon.ico"   alt="logo"  className='w-8 h-8 m-2'/>
  <h1 className='text-xl font-bold hidden sm:flex'>一刻时光</h1> 
 </Link>
 <div  className=' flex sm:justify-center justify-end' >

 <span className={`m-1 py-1 px-3   ${route==='/messageview'?'bg-dodgerblue text-textcolor rounded-xl':''} `}>
  <Link  href='/messageview' >
   留言墙
  </Link>
 </span>
 <span className={`m-1 py-1 px-3 ${route==='/home'?' bg-dodgerblue text-textcolor rounded-xl':''} `}>
   <Link href='/home'>
   照片墙
   </Link> 
 </span>
 </div>

  </nav>
  </>
}
