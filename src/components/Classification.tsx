
export default  function Classification(
  {Classification,active,useactive}:{Classification:string[],active:string,useactive:Function}
  ){
  return <>
  <div className="flex flex-wrap  p-1 mt-3 justify-center  ">
   {Classification.map((el,index)=>
    <span key={index} onClick={()=>{useactive(el)}} className={
      `${el===active?'border border-solid border-[black]':''} mx-1 transform-cpu  px-1 text-xs  rounded-xl cursor-pointer hover:bg-dodgerblue hover:text-textcolor`} >{el}</span>
   )}
  </div>
  </>
}
