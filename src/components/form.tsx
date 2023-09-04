
import Card from '@/components/card'
import Image from 'next/image'

import { useState } from 'react'
import Classification from './Classification'
export const Read= ({message}:{message:Message})=>{
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
              <div className='flex  p-1 mb-3   '>
                <section className='m-1 f-3'>
                  {/* <Image width={30} height={30} className='w-10 h-10 rounded-full' src={el.Headphoto} alt="" /> */}
                </section>
                <section className='flex-1'>
                  <span className='text-sm font-serif'>{el.name} {el.time}</span>
                  <section className='text-sm  h-2/3'>
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
    
     </>
  
 
}
export const Write= ()=>{
  const Color=[ 'yellow','dodgerblue','yellowbody','darkorange', 'buttoncolor'
   ]
    const [active,useactive]=useState('全部')
    const [bgcolor,changeBgcolor]=useState('yellow')
  const ClassificationArray=['全部','留言','目标','理想','过去','将来','爱情','亲情','友情','秘密','信条','无题']

  return <>
       <section className='flex w-full'>
        {Color.map((el,index)=>{
          return <div key={index} onClick={()=>{changeBgcolor(el)}} className={`w-5 m-2 h-5 bg-${el} ${el===bgcolor?'border border-buttoncolor border-solid':null} `}></div>
        })}
       </section>
       <section className={`bg-${bgcolor} p-1 w-full h-56`}>
       <textarea placeholder='留言...' className='bg-[rgb(0,0,0,0)] outline-none h-44 w-full '></textarea>
       <input placeholder='留言...' className='bg-[rgb(0,0,0,0)] p-1 text-sm outline-none border-2 border-solid border-textcolor w-full'></input>
       </section>
       <section className='w-full'>
       <Classification Classification={ClassificationArray} active={active} useactive={useactive}></Classification>
       </section>
       <section className='flex justify-around w-full h-8 px-1 absolute bottom-4'>
          <button className='w-2/5 m-1 h-full rounded-full  bg-textcolor border border-[black] border-solid' >丢弃</button>
          <button className='w-3/5 m-1 h-full rounded-full  bg-[black] hover:bg-buttoncolor text-textcolor'>确认</button>
       </section>
  </>
  
 
}
