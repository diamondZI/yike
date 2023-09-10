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
        return state
   }
  }
})

export const { Getuserinfo } = todosSlice.actions

export default todosSlice.reducer
