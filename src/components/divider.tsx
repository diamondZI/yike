interface Divider{
  children:React.ReactNode
  position_mode:'start'|'end'|'center'
}
export default function Divider({children,position_mode}:Divider){

  return <div>
 
     <div className={`w-full h-[2px] flex  justify-${position_mode}  px-10 my-4 bg-darkorange  items-center`}>
    <div className=" w-10 flex justify-center bg-textcolor ">
      {children}
    </div>
  </div>
   
 
   
  </div>


}
