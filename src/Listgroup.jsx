import React from 'react'
import ListItem from './ListItem'
import { useContext } from 'react'
import TodosContext from './components/Context/TodosContext'

const Listgroup = () => {
    const{todos,editTodo}=useContext(TodosContext)
  return (
   <ul className="list-group my-3 shadow-sm">
    {
   
       todos.map((todo)=>(
        <ListItem key={todo.id} todo={todo}  editTodo={editTodo}/>
       ))
      
    }
   </ul>
  )
}

export default Listgroup