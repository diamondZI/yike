'use client'

import TitleName from '@/components/titleName'
import Image from 'next/image'
import Drawer from '@/components/Drawer'
import {Write} from '@/components/form'
import { useEffect, useState} from "react";
import {useAppDispatch,useAppSelector} from '@/features/hooks';
import { GetAllNote,PostNote } from '@/features/module/Note'

export default function Page(){
  const [active,useactive]=useState(0)
  const [display,usedisply] =useState(false)
  const [create,addCreate] =useState(false)
 const dispatch =useAppDispatch()
  const ClassificationArray=['全部','我','ta','最喜欢的','最有意义的','最值得纪念的','我的母校','我的生活','天空','大海','无题']
    return <> 
    <div> 
    <TitleName title="照片墙" message="很多事情值得记录,当然也值得回味" ></TitleName>
  
     <div className='justify-center flex text-yellow'>
     <h1> 等待建设中------</h1>    
       
      </div> 
      
    </div>
 
    <Drawer mode={true} show={display} setshow={usedisply} >
      <Write CreateCard={addCreate}/>
    </Drawer>
    </>

}
