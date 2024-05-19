import React, { useContext, useEffect, useState } from 'react'
import TodosContext from './Context/TodosContext'

const Form = () => {

const{saveTodo,edit,updateTodo}=useContext(TodosContext)
const [text, setText]= useState("")

   const handleSubmit= (e)=> {
    e.preventDefault()
  
    if(edit.editMode)
    {
      updateTodo(edit.todo.id, text)
    }
    else{
        saveTodo(text)
    }
    setText("")
   }
   useEffect(()=>{
    setText(edit.todo.text)
   },[edit])

  
  return (
  
<form className='my-3' onSubmit={handleSubmit}> 
 

    <input type="text" className="form-control my-3 rounded-0"placeholder='enter text here...... ' value={text}  onChange={(e)=> setText(e.target.value)}/>
    
  <button type="submit" className="btn btn-lg btn-success rounded-0 w-100">Submit</button>
</form>
  )
}

export default Form