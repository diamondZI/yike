'use client'

import TitleName from '@/app/components/titleName'
import Classification from '@/app/components/Classification'
import Card from '@/app/components/card'
import {Read as Readview,Write as Writeview} from '@/app/components/form'
import { useState } from "react";
import {useAutoAnimate} from '@formkit/auto-animate/react'
import {MaterialSymbolsAddCircleOutlineRounded} from '@/app/components/icon'
export default function page(){
    const [active,useactive]=useState('全部')
    const [display,usedisply] = useState(false)
    const [create,addCreate] = useState(false)
    const ClassificationArray=['全部','留言','目标','理想','过去','将来','爱情','亲情','友情','秘密','信条','无题']
    const [messages,usemessages]=useState<Message[]>([
      {
        author:"一个大西瓜",
        time:'2020-12-12',
        state:'留言',
        content:'Hello Word!',
        Like:0,
        Reply:0,
      },
      {
        author:"一个大西瓜",
        time:'2020-12-12',
        state:'留言',
        content:'Hello Word!',
        Like:0,
        Reply:0,
      },
      {
        author:"一个大西瓜",
        time:'2020-12-12',
        state:'目标',
        content:'Hello Word!',
        Like:0,
        Reply:0,
      },
      {
        author:"一个大西瓜",
        time:'2020-12-12',
        state:'理想',
        content:'Hello Word!',
        Like:0,
        Reply:0,
      },
      {
        author:"一个大西瓜",
        time:'2020-12-12',
        state:'匿名',
        content:'Hello Word!',
        Like:0,
        Reply:0,
      }
    ])
    const [parent,endable]=useAutoAnimate({
      duration:300
    })
    // 实际获取数据时这里要得到id方便读取数据
    const Fromshowup=()=>{
     usedisply(true)
      
    }
    return <>
    <div className="min-h-[calc(100vh-2.5rem)]">
     {/* <h1>你好</h1> */}
    <TitleName title="留言墙" message="很多事情值得记录,当然也值得回味"></TitleName>
    <div className='px-12 transition-all' >
    <Classification Classification={ClassificationArray} active={active} useactive={useactive}></Classification>

    </div>
     <div className="flex justify-center flex-wrap " ref={parent} >
      {
        messages.map((messages,index)=>{
        return  messages.state===active||active==='全部'?<div key={index} onClick={()=>{Fromshowup()}} className='hover:border-2 hover:border-solid hover:border-yellow m-2'><Card    Message={messages} ></Card></div>:null
        })
      }
     </div>
     <div onClick={()=>{addCreate(true)}} className='text-5xl  fixed right-0 bottom-0 cursor-pointer hover:text-greenyellow'>
       <MaterialSymbolsAddCircleOutlineRounded/>

     </div>
    </div>
    // 这个组件可以抽出遮罩层DRAW
     <Readview  message={messages[0]} display={display} usedisply={usedisply}></Readview>
     <Writeview display={create} usedisply={addCreate}></Writeview>
    </>
}
