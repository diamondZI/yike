import {MaterialSymbolsClose} from '@/app/components/icon'
import Card from '@/app/components/card'
export const Read= ({message,display,usedisply}:{message:Message,display:boolean,usedisply:Function})=>{
  const arr: Reply[]=[{
    name:'匿名',
    time:'2017/12/12',
    Headphoto:'https://images.unsplash.com/photo-1524088484081-4ca7e08e3e19?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
    content:"非常好的内容,爱来自山西",

  },
  {
    name:'匿名',
    time:'2017/12/12',
    Headphoto:'https://images.unsplash.com/photo-1524088484081-4ca7e08e3e19?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
    content:"非常好的内容,爱来自山西",

  }
]
  return <>
    {display? <div className='fixed ease-in-out opacity-1 transition-opacity w-[100%] h-[100%] bg-[rgb(0,0,0..8)] top-0 left-0 '>
    
  
    <div className="p-2 animate-wiggle  right-0  w-72 h-[100%] bg-textcolor absolute flex flex-col items-center">
       <div className='w-full mb-2  flex  items-center justify-between'>
        <span className="text-sm ">
          <a href="" className="text-buttoncolor m-1 ">联系墙主撕掉该标签</a>
          <a className="text-[red] m-1">举报</a>
        </span>
         <span>
          <MaterialSymbolsClose onClick={()=>{usedisply(false)}} className='text-lg'/>
         </span>
       </div>
       <section>
        <Card Message={message}/>
       </section>
       <section className=''>
         <form>
         <textarea id="story" name="story" rows={2} placeholder='请输入自己的内容.....' className='w-full p-2 border-dodgerblue border-2 border-solid'></textarea>
         <div className='flex w-full justify-between'>
         <input className='border-dodgerblue border-2 border-solid flex-4' type="text"  placeholder='匿名'  name="" id="" />
         <button className='bg-[black] text-textcolor w-14 rounded-xl flex-1'>评论</button>
          </div>  
         </form>
       </section>
       <section className='w-full flex flex-col justify-start overflow-y-auto'>
        <span>评论 123</span>
        {
          arr.map((el,index)=>{
            return <div key={index}>
              <div className='flex bg-yellow p-1 mb-3 h-44 '>
                <section className='m-1 f-3'>
                  <img className='w-12 h-12 rounded-full' src={el.Headphoto} alt="" />
                </section>
                <section className='flex-1'>
                  <span className='text-sm font-serif'>{el.name} {el.time}</span>
                  <section className='text-sm overflow-y-auto h-2/3'>
                    {el.content}
                    {el.content}
                    {el.content}
                  
                  </section>
                </section>
              </div>
            </div>
          })
        } 
       </section>
    </div>
    </div>:null}
  </>
  
 
}
