import Card from '@/components/card'
import { useEffect, useState } from 'react'
import Classification from './Classification'
import {useForm as UseForm,SubmitHandler, useForm, Form} from 'react-hook-form';

export const Read= ({message}:{message:Message})=>{
  const [AllReply,setAllReply]=useState<Replytype[]>([])
  
  const Reply=async (data:Replytype)=>{
    const MessageReply=await fetch('api/Reply/Post',{
      method: 'POST',
      body:JSON.stringify(data) ,
      headers: new Headers({'authorization':localStorage.getItem('token') as string}) 
    }).then(res=>res.json())
    // setAllReply({...AllReply,MessageReply})
    
    
  }
  const GetReply=async ()=>{
  try {
    const {data}=await fetch('api/Reply/Get',{
      method: 'POST',
      body:JSON.stringify({NoteId:message.id}) ,
    }).then(res=>res.json())
    setAllReply(data)
  } catch (error) {
    console.error(error);
    
  }
  }

 const {register,handleSubmit}=useForm<Replytype>({
    values:{
      UserId:1,
      content:'',
      NoteId:message.id
    }
 })
 
useEffect(()=>{
  GetReply()
},[])
  return <>
       <section>
        <Card Message={message}/>
       </section>
       <section className=''>
         <form onSubmit={handleSubmit(Reply)}>
        <textarea id="story"  rows={2}  {...register('content')} placeholder='请输入自己的内容.....' className='w-full p-2 border-dodgerblue border-2 border-solid'></textarea>
         <div className='flex w-full justify-between'>
         <input className='border-dodgerblue border-2 border-solid flex-4' type="text"  placeholder='匿名'  name="" id="" />
         <button type='submit' className='bg-[black] text-textcolor w-14 rounded-xl flex-1'>评论</button>
          </div>  
         </form>
       </section>
       <section className='w-full flex flex-col justify-start overflow-y-auto'>
        <span >评论 {AllReply.length}</span>
        {
          AllReply.map((el,index)=>{
            return <div key={index}>
              <div className='flex  p-1 mb-3   '>
                <section className='m-1 f-3'>
                  {/* <Image width={30} height={30} className='w-10 h-10 rounded-full' src={el.Headphoto} alt="" /> */}
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
  const {register,setValue,handleSubmit}=UseForm<Message>()
  const onSubmit: SubmitHandler<Message>=async (data) => {
     let res= await CreateCard({UserId:2,url:'NULL',...data})
     
  
  }
    const [active,useactive]=useState(1)
    const Useactive=(a:number)=>{
      useactive(a)
      setValue('statusId',a)
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
       <Classification Classification={ClassificationArray} active={active} useactive={Useactive} {...register('statusId')}></Classification>
       </section>
       <section className='flex justify-around w-full h-8 px-1 absolute bottom-4'>
          <button className='w-2/5 m-1 h-full rounded-full  bg-textcolor border border-[black] border-solid' onClick={()=>{}}>丢弃</button>
          <button type='submit'  className='w-3/5 m-1 h-full rounded-full  bg-[black] hover:bg-buttoncolor text-textcolor' >确认</button>
       </section>
      </form>

  </>
  
 
}
