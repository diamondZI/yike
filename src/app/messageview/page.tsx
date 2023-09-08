'use client'

import TitleName from '@/components/titleName'
import Classification from '@/components/Classification'
import Card from '@/components/card'
import {Read as Readview, Write as Writeview} from '@/components/form'
import { useState,useEffect } from "react";
import {useAutoAnimate} from '@formkit/auto-animate/react'
import {MaterialSymbolsAddCircleOutlineRounded} from '@/until/icon'
import Drawer from '../../components/Drawer'
import { data } from 'autoprefixer'
export default function Page(){
    const [active,useactive]=useState(0)
    const [index,setindex]=useState(0)
    const [display,usedisply] =useState(false)
    const [create,addCreate] =useState(false)
    const ClassificationArray=['全部','留言','目标','理想','过去','将来','爱情','亲情','友情','秘密','信条','无题']
    const [messages,setmessages]=useState<Message[]>([])
    
    const [parent]=useAutoAnimate({
      duration:300
    })
    const addCard=async function(){
      try {
        const {data}=await fetch('api/Note/Get/GetNote',{
          method:'POST',
          body: JSON.stringify({id:1})
        }).then(response =>response.json())   
        console.log("1");
           
        setmessages(data)
      }catch{
        console.error("Error");
        
      }
    
         
   
    }
    const CreateCard=async function(Note:Message){
      const token=localStorage.getItem('token') as string

      const {data}=await fetch('api/Note/Post',{
        method:'POST',
        body: JSON.stringify(Note),
        headers:new Headers({'authorization':token})
      }).then(response =>response.json())  
  console.log({...messages,...data});
  
      
      // setmessages({...messages,...data});        
    }
   
    const Setdisply=(index:number)=>{
   setindex(index)
      usedisply(true)
    }
    useEffect(()=>{
      addCard()
      
    },[])
    
    return <>
    <div>
    
    <TitleName title="留言墙" message="很多事情值得记录,当然也值得回味"></TitleName>
    <div className='px-12 transition-all' >
    <Classification Classification={ClassificationArray} active={active} useactive={useactive}></Classification>

    </div>
     <div className="flex justify-center flex-wrap " ref={parent} >
     {
     messages.map((messages,index)=>{
           return  messages.statusId===active||active===0?<div key={index} onClick={()=>{Setdisply(index)}} className='hover:border-2 hover:border-solid hover:border-yellow m-2'><Card    Message={messages} ></Card></div>:null
           })
     }
     </div>
     <div onClick={()=>{addCreate(true)}} className='text-5xl  fixed right-0 bottom-0 cursor-pointer hover:text-greenyellow'>
       <MaterialSymbolsAddCircleOutlineRounded/>

     </div>
    </div>
    
     <Drawer mode={true} show={display} setshow={usedisply}>
      <Readview message={messages[index]}></Readview>
     </Drawer>
     <Drawer mode={false} show={create} setshow={addCreate} >
    
      <Writeview CreateCard={CreateCard}></Writeview>
      
     </Drawer>
    </>
}
