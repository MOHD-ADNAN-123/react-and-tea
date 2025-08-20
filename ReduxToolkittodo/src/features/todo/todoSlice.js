import { createSlice, nanoid } from "@reduxjs/toolkit";
//nanoid is a predefined method which generate unique ids

//initial state of your todo (array or object) => can be empty or have some data like we are taking a single todo
const initialState ={
    todos: [{id:1,text: "todo1"}]  //Array of objects
}

//now creating a slice(basically a reducer)
export const todoSlice = createSlice({      //createSlice method takes an object
    name : 'todo',  //name property
    initialState,   //every slice has a initialstate which we have already defined (can be defined here also)
    reducers:{        //reducers => (properties and function)
        addTodo : (state,action)=>{ //state and action access is given to you
            //1  creating a new todo
            const todo ={
                id:nanoid(),
                text: action.payload   //payload is a object from where we can extract
            }
            //2 updating the state (intialState was given now we will update the state)  
            state.todos.push(todo)
        },   
        removeTodo : (state,action)=>{  //state=>current state and action=> data that is passed
            state.todos =state.todos.filter(todo => todo.id !==   action.payload)
        },
        //make 1 more reducers for practice like update
    }    
}) 

//export the indivisual functionality also
export const {addTodo,removeTodo} =todoSlice.actions
//export all reducers for store
export default todoSlice.reducer