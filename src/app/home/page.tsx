'use client'

import TitleName from '@/components/titleName'
import Classification from '@/components/Classification'
import Drawer from '@/components/Drawer'
import {Write} from '@/components/form'
import { useState,useEffect } from "react";
import {incremented,decremented,store} from '@/redux';
export default function Page(){
  const [active,useactive]=useState(0)
  const [display,usedisply] =useState(false)
  const [create,addCreate] =useState(false)
  const imageUrl=[]
  useEffect(()=>{
    store.dispatch(incremented())
 console.log((store.getState()));
 
  })
  const ClassificationArray=['全部','我','ta','最喜欢的','最有意义的','最值得纪念的','我的母校','我的生活','天空','大海','无题']
    return <> 
    <div> 
    <TitleName title="照片墙" message="很多事情值得记录,当然也值得回味"></TitleName>
    <div className='px-12 transition-all' >
    <Classification Classification={ClassificationArray} active={active} useactive={useactive}></Classification>
    </div>
        <div>
          
          
         </div>     
      
    </div>
 
    <Drawer mode='Write' show={display} setshow={usedisply} >
      <Write CreateCard={addCreate}/>
    </Drawer>
    </>

  }
