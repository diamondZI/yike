'use client'
export default (
  {Classification,active,useactive}:{Classification:string[],active:string,useactive:Function}
  )=>{
  return <>
  <div className="flex flex-wrap w-3/4  p-1 mt-3  bg-yellow relative ml-[50%] -translate-x-[50%]">
   {Classification.map((el,index)=>
    <span key={index} onClick={()=>{useactive(el)}} className={`${el===active?'bg-dodgerblue text-textcolor':''} mx-1 transform-cpu border-buttoncolor px-3 border-solid border-2 rounded-xl cursor-pointer hover:bg-dodgerblue hover:text-textcolor`} >{el}</span>
   )}
  </div>
  </>
}
