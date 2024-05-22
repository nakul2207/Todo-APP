import { configureStore } from '@reduxjs/toolkit'
import { todoSlice } from './slice/TodoCompleteslice'

export const store = configureStore({
  reducer: 
  {todo:todoSlice.reducer},
})