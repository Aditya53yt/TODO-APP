import { Children, createContext, useState } from "react";

const TodosContext=createContext()

export const TodoProvider=({children})=>{ 
  const[todos ,setTodos] =useState([{ id:1 ,text:"Default Text"}])
    const[dark, setDark] =useState(true)
    const [edit,setEdit]= useState({
      todo:{},
      editMode:false, 
    })
    const changeTheme =()=> {
        if(dark){
        setDark(false)
      }
       else
      {
        setDark(true)
      }
    
    }
    const deleteTodo =(id)=>{
      setTodos(todos.filter((item)=> item.id!==id))
       }

// savatodo
const saveTodo = (text) =>{
  setTodos([{id:crypto.randomUUID(), text:text}, ...todos])
     }
     const editTodo=(oldTodo)=>{
      setEdit({ 
        todo:oldTodo,
        editMode:true
      })
    }
    const updateTodo =(oldId,newText)=>{
      setTodos(todos.map(item=>item.id===oldId ? {id:oldId,text:newText}:item))
             }
    return(
        <TodosContext.Provider value={{ edit,todos,dark, changeTheme,deleteTodo,saveTodo,editTodo,updateTodo}}>
           {children}
        </TodosContext.Provider>
    )
}

export default TodosContext