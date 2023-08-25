import Link from 'next/link'
export default function Nav({route}:{route:boolean}){
   
  return <>
  <nav className='flex flex-1   justify-around w-full   bg-yellowbody h-10 items-center p-2'>

 <Link href={"home"} className='flex flex-1 items-center' > 

  <img src="../favicon.ico" alt="logo"  className='w-8 h-8 m-2'/>
  <h1 className='text-xl font-bold'>一刻时光</h1> 
 </Link>
 <div  className='flex-1  flex justify-center' >
 <span className={`m-3 py-1 px-3 ${route?' bg-dodgerblue text-textcolor rounded-xl':''} `}>
  <Link  href='/messageview' >
   留言墙
  </Link>
 
 </span>
 <span className={`m-3 py-1 px-3 ${!route?' bg-dodgerblue text-textcolor rounded-xl':''} `}>
   <Link href='/home'>
   照片墙
</Link> 
 </span>
 </div>
 <div className='flex-1'></div> 
  </nav>
  </>
}
