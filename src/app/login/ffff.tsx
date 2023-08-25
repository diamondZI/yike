'use client'
export default function moduleName({children}:{children:React.ReactNode}){
  const fun=async ()=>{
    const res=await fetch('api/user/create?1').then(res=>res.json()).then(res=>res
    )

    console.log(res);
    
  }
  return <div>
   <div className="w-[200px] h-[200px] bg-black text-white  ">

   <button onClick={()=>{fun()}}>登录</button>
   {children}
   </div>
  </div>
}
