'use client'

import TitleName from '@/components/titleName'
import Classification from '@/components/Classification'
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
 const  a =useAppSelector(state=>state.Note)

 
  const ClassificationArray=['全部','我','ta','最喜欢的','最有意义的','最值得纪念的','我的母校','我的生活','天空','大海','无题']
    return <> 
    <div> 
    <TitleName title="照片墙" message="很多事情值得记录,当然也值得回味" ></TitleName>
    <div className='px-12 transition-all'  >
    <Classification Classification={ClassificationArray} active={active} useactive={useactive}></Classification>
    </div>
        <div>
           <h1>noah1   </h1>
           <button onClick={()=>{dispatch(GetAllNote([
            {
              id:1,
              content:'1',
              createdAt:'new Date().toString()',
              title:'1',
              statusId:1,
              updatedAt:'1',
              replies:[]
            
            }
           ]))}}>加</button>
           <button onClick={()=>dispatch(PostNote([
            {
              id:2,
              content:'1',
              createdAt:'new Date().toString()',
              title:'1',
              statusId:1,
              updatedAt:'1',
              replies:[]
            
            }
           ]))}>减</button>
           <button onClick={()=>{console.log(a);
           }}>加num</button>
         </div>     
      
    </div>
 
    <Drawer mode={true} show={display} setshow={usedisply} >
      <Write CreateCard={addCreate}/>
    </Drawer>
    </>

}
