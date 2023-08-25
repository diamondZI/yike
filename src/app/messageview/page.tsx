'use client'

import TitleName from '@/app/components/titleName'
import Classification from '@/app/components/Classification'
import Card from '@/app/components/card'
import { useState } from "react";
interface Message{
  // id: string,
  author:string
  time: string,
  state: string,
  Like:number,
  content:string,
  Reply:number,
}
export default function page(){
    const [active,useactive]=useState('全部')
    const ClassificationArray=['全部','留言','目标','理想','过去','将来','爱情','亲情','友情','秘密','信条','无题']
    const [messages,usemessages]=useState<Message[]>([
      {
        author:"一个大西瓜",
        time:'2020-12-12',
        state:'匿名1',
        content:'Hello Word!',
        Like:0,
        Reply:0,
      },
      {
        author:"一个大西瓜",
        time:'2020-12-12',
        state:'匿名1',
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
    return <div className="min-h-[calc(100vh-2.5rem)]">
     {/* <h1>你好</h1> */}
    <TitleName title="留言墙" message="很多事情值得记录,当然也值得回味"></TitleName>
    <Classification Classification={ClassificationArray} active={active} useactive={useactive}></Classification>
     <div className="flex justify-center flex-wrap" >
      {
        messages.map(messages=>{
        return  messages.state==='匿名'?<Card Message={messages} ></Card>:null
        })
      }
     </div>
    </div>

}
