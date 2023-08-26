import Link from 'next/link'
interface Message{
  // id: string,
  author:string
  time: string,
  state: string,
  Like:number,
  content:string,
  Reply:number,
}
import {MaterialSymbolsEcgHeartOutline,MaterialSymbolsChatOutlineSharp} from './icon';
import Classification from './Classification';
export default function Nav({Message}:{Message:Message}){
   
  return <>
  <div className='flex flex-col justify-between  shadow-darkorange shadow-sm w-64 p-2 bg-darkorange h-48'>
    <div className='flex-3 flex justify-between text-xs '>
      <span>{Message.time}</span>
       <span>{Message.state}</span>
    </div>
    <section className='flex-1 p-2'>
    {Message.content}
    </section>
    <div  className='flex-3 flex'>
      <div className='flex-2 flex items-center justify-around'>
      <span>
      <MaterialSymbolsEcgHeartOutline className='cursor-pointer'/>
      </span>  
      <p>{Message.Like}</p>       
      <span>
      <MaterialSymbolsChatOutlineSharp  className='cursor-pointer'/>
      </span>  
      <p>{Message.Reply}</p>       
      </div>
      <div className='flex-1 flex justify-end  font-message font-bold'>
        {Message.author}
      </div>
    </div>
  
  </div>
  </>
}
