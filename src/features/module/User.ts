import { createSlice } from '@reduxjs/toolkit'
import { User } from '@prisma/client';


const todosSlice = createSlice({
  name: 'User',
  initialState:<User>{
   
  },
  reducers: {
   Getuserinfo: (state,{payload}:{payload:{
    value:User,
    token:string,
   }})=>{
        state=payload.value
        localStorage.setItem('token',payload.token)
        localStorage.setItem('User',JSON.stringify(payload.value))
        return state
   },
   lodeuserinfo: (state)=>{
 const User =localStorage.getItem('User') as string

  state=JSON.parse(User)
    return state
   }
 
  }
})

export const { Getuserinfo,lodeuserinfo } = todosSlice.actions

export default todosSlice.reducer
