
import { createSlice,PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../index';

const initialState={
  value:1
}
const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    increment:state=>{
    state.value+=1;
    },
    decrement:state=>{
      state.value--;
    },
    incrementByAmount:(state,action:PayloadAction<number>)=>{
   state.value+=action.payload
    }
  }
})

export const { increment,decrement,incrementByAmount } = todosSlice.actions
export const selectCount = (state:RootState) => state.todos.value
export default todosSlice.reducer
