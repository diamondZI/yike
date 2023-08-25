export default (
  {Classification,active}:{Classification:string[],active:string}
  )=>{
  return <>
  <div className=" w-3/4 p-2 mt-3 r bg-yellow relative ml-[50%] -translate-x-[50%]">
   {Classification.map(el=>
    <span className={`${el===active?'bg-dodgerblue text-textcolor':''} mx-3 border-buttoncolor px-3 border-solid border-2 rounded-xl cursor-pointer hover:bg-dodgerblue hover:text-textcolor`} >{el}</span>
   )}
  </div>
  </>
}
