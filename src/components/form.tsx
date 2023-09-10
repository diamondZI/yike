import Card from '@/components/card'
import { useEffect, useMemo, useState } from 'react'
import Classification from './Classification'
import {useForm as UseForm,SubmitHandler, useForm, Form} from 'react-hook-form';
import {useAutoAnimate} from '@formkit/auto-animate/react';
import {useAppDispatch} from '@/features/hooks';
import {useAppSelector} from '@/features/hooks';
import {PostReply} from '@/features/module/Note';
export const Read= ({message}:{message:Message})=>{
  const [AllReply,setAllReply]=useState<Replytype[]>(message.replies) 
  const UserID=useAppSelector(state=>state.User.id)
  const dispatch=useAppDispatch()
  const Reply=async (data:Replytype)=>{
    const MessageReply=await fetch('api/Reply/Post',{
      method: 'POST',
      body:JSON.stringify(data) ,
      headers: new Headers({'authorization':localStorage.getItem('token') as string}) 
    }).then(res=>res.json())
  console.log('1');
  

  }
  const {register,handleSubmit}=useForm<Replytype>({
    values:{
      UserId:UserID,
      content:'',
      NoteId:message.id
    }
  })
  const [ref]=useAutoAnimate()
  
 useEffect(()=>{
 console.log(AllReply);
 
 },[AllReply])

  return <>
       <section className='w-full flex justify-center '>
        <Card Message={message}/>
       </section>
       <section className=''>
         <form onSubmit={handleSubmit(Reply)}>
        <textarea id="story"  rows={2}  {...register('content')} placeholder='请输入自己的内容.....' className='w-full h-16 p-2 border-dodgerblue border-2 border-solid'></textarea>
         <div className='flex w-full justify-between h-9'>
         <input className='border-dodgerblue w-2/3 border-2 border-solid m-1 ' type="text"  placeholder='匿名'   />
         <button type='submit' className='bg-[black] text-textcolor rounded-xl flex-1'>评论</button>
          </div>  
         </form>
       </section>
       <span className='sticky top-0 bg-textcolor'>评论 {AllReply.length}</span>

       <section  className='w-full  h-[58vh] overflow-auto  flex flex-col  justify-start overflow'>
      
       {
          AllReply.map((el,index)=>{
            return <div key={el.id} ref={ref}>
              <div className='flex  p-1 mb-3   '>
                <section className='m-1 f-3'>
                 <div className='bg-yellow rounded-full w-7 h-7'>

                 </div>
                </section>
                <section className='flex-1'>
                  <span className='text-sm font-serif'>匿名 {el.createdAt?.split('T')[0]} </span>
                  <section className='text-sm  h-2/3'>
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
export const Write= ({CreateCard}:{CreateCard:Function})=>{
  const Color=[ 'yellow','dodgerblue','yellowbody','darkorange']
  const UserID=useAppSelector(state=>state.User.id)
  const [active,useactive]=useState(1)
  const {register,setValue,handleSubmit,getValues}=UseForm<Message>()
  const onSubmit: SubmitHandler<Message>=async (data) => {
      data.statusId=active
     let res= await CreateCard({UserId:UserID,url:'NULL',...data})
     console.log(res); 
  }
     
    const Useactive=(a:number)=>{
      useactive(a)
    }
    
    const [bgcolor,changeBgcolor]=useState('yellow')
  const ClassificationArray=['全部','留言','目标','理想','过去','将来','爱情','亲情','友情','秘密','信条','无题']
  
  return <>
      <form onSubmit={handleSubmit(onSubmit)}>
      <section className='flex w-full'>
        {Color.map((el,index)=>{
          return <div key={index} onClick={()=>{changeBgcolor(el)}} className={`w-5 m-2 h-5 bg-${el} ${el===bgcolor?'border border-buttoncolor border-solid':null} `}></div>
        })}
       </section>
       <section className={`bg-${bgcolor} p-1 w-full h-56`}>
       <textarea placeholder='留言...' {...register('content')} className='bg-[rgb(0,0,0,0)] outline-none h-44 w-full '></textarea>
       <input placeholder='留言...' {...register('title')} className='bg-[rgb(0,0,0,0)] p-1 text-sm outline-none border-2 border-solid border-textcolor w-full'></input>
       </section>
       <section className='w-full'>
       <Classification Classification={ClassificationArray} active={active} useactive={Useactive} ></Classification>
       </section>
       <section className='flex justify-around w-full h-8 px-1 absolute bottom-4'>
          <button className='w-2/5 m-1 h-full rounded-full  bg-textcolor border border-[black] border-solid' onClick={()=>{}}>丢弃</button>
          <button type='submit'  className='w-3/5 m-1 h-full rounded-full  bg-[black] hover:bg-buttoncolor text-textcolor' >确认</button>
       </section>
      </form>

  </>
  
 
}
