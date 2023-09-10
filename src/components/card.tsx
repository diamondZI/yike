import Link from 'next/link'

import {MaterialSymbolsChatOutlineSharp} from '../until/icon';


export default function Nav({Message}:{Message:Message}){ 

 
  return <>
  <div className='flex m-3 flex-col justify-between rounded-md  shadow-darkorange shadow-sm w-[12rem] p-1 bg-darkorange h-40'>
    <div className='flex-3 flex justify-between text-xs '>
      <span>{Message.updatedAt.split('T')[0]}</span>
       <span>{Message.statusId}</span>
    </div>
    <section className='flex-1 p-2 text-sm'>
    {Message.content}
    </section>
    <div  className='flex-3 flex'>
      <div className='flex-2 flex items-center justify-around'>
        
      <span>
      <MaterialSymbolsChatOutlineSharp  className='cursor-pointer'/>
      </span>  
      <p>{Message.replies?Message.replies.length:0}</p>       
      </div>
      <div className='flex-1 flex justify-end  font-message text-sm'>
       {Message.title}
      </div>
    </div>
   
  </div>
  </>
}
