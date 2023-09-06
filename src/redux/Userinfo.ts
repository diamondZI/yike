import {createSlice} from '@reduxjs/toolkit';
const counterSlice = createSlice({
  name: 'User',
  
  initialState: {
    value:{}
  },
  reducers: {
    incremented(state,action)  {
     state.value=action.payload
    },
    decremented: state => {
      
    }
  }
})
