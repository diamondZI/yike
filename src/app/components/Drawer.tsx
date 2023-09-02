interface Drawertype{
  show:boolean,
  setshow:(a:boolean,b?:any)=>void,
  children:React.ReactNode
  mode:'Read'|'Write'
}
import {MaterialSymbolsClose} from '@/until/icon'
export default function  Drawer({show,setshow,children,mode}:Drawertype){
    return <>
      {show ? <div onDoubleClick={()=>{setshow(false)
      }}  className='fixed ease-in-out opacity-1 transition-opacity w-[100%] h-[100%] bg-[rgb(0,0,0..8)] top-0 left-0 '>
      <div  onClick={(e)=>{e.stopPropagation()
      }}
        className="p-2 animate-wiggle   right-0  w-72 h-[100%] bg-textcolor absolute flex flex-col items-center">
         <div className='w-full mb-2  flex  items-center justify-between'>
          {
            mode==='Read' ? <span className="text-sm " >
            <a href="" className="text-buttoncolor m-1 ">联系墙主撕掉该标签</a>
            <a className="text-[red] m-1">举报</a>
          </span>: <span className="text-sm ">
           <a href="" className="text-[black] m-1 ">写留言</a>
          </span>
          }
           <span>
            <MaterialSymbolsClose onClick={()=>{setshow(false)}} className='text-lg'/>
           </span>
         </div>
         {children }
        
         
      </div>
      </div>:null}
    </>
    
   
  }


