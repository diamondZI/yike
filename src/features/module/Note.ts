
import { createSlice,PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../index';
import a from '@/hooks/form';
import { Reply } from '@prisma/client';
const  initialState:Message[]=[];
const todosSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
   //获取
   GetAllNote: (state,action):Message[]=>{
    if (!state.length)  return action.payload
    return state
   },
   PostNote: (state,action)=>{
     return [...state,action.payload] 
   },
   PostReply:(state,{payload}:{payload:{
    id:number,
    replie:Replytype
   }})=>{
    state.find(el=>{
      if (el.id===payload.id) {
        el.replies.push(payload.replie)
      }
    
    })
     return state
   }
   //注册
  }
})

export const { GetAllNote,PostNote,PostReply } = todosSlice.actions
export const selectCount = (state:RootState) => state.todos.value
export default todosSlice.reducer
