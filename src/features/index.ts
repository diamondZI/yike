import { configureStore } from '@reduxjs/toolkit'
import todosReducer from './module/todoSlice'
import Note from './module/Note';
import User from './module/User';


const store = configureStore({
  reducer: {
    todos: todosReducer,
    Note: Note,
    User:User
  }
})
export default  store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
