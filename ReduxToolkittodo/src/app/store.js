//making a store

import { configureStore } from "@reduxjs/toolkit";            
//import the reducers
import todoReducer from '../features/todo/todoSlice';      // Since it’s the default export, you can give it any name when importing.Here you chose the name todoReducer.


//put these value in store
export const store = configureStore({
    reducer: todoReducer
})