'use client'

import TitleName from '@/components/titleName'
import Classification from '@/components/Classification'
import Drawer from '@/components/Drawer'
import {Write} from '@/components/form'
import { useState } from "react";
import {useAutoAnimate} from '@formkit/auto-animate/react'
import {MaterialSymbolsAddCircleOutlineRounded} from '@/until/icon'
export default function Page(){
  const [active,useactive]=useState('全部')
  const [display,usedisply] =useState(true)
  const [create,addCreate] =useState(false)
  const ClassificationArray=['全部','我','ta','最喜欢的','最有意义的','最值得纪念的','我的母校','我的生活','天空','大海','无题']
    return <> 
    <div >
 
    <TitleName title="照片墙" message="很多事情值得记录,当然也值得回味"></TitleName>
    <div className='px-12 transition-all' >
    <Classification Classification={ClassificationArray} active={active} useactive={useactive}></Classification>

    </div>
             
 <button onClick={()=>{usedisply(true)}}> 打开了</button>
    </div>
 
    <Drawer mode='Write' show={display} setshow={usedisply} >
      <Write/>
    </Drawer>
    </>

  }
