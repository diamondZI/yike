
import { createSlice,PayloadAction } from '@reduxjs/toolkit'
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
    state.map(el=>{
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

export default todosSlice.reducer
