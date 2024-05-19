import React, { useContext } from 'react'
import TodosContext from './components/Context/TodosContext'

const ListItem = ({todo, editTodo}) => {
   
const {deleteTodo}=useContext(TodosContext)
    return (
    <li className="list-group-item rounded-0 ">
        <h1 className="display-6">
       {
      todo.text
       }
        </h1>
        <span className="float-end">
       <button className=" btn btn-sm btn-warning mx-1 " onClick={()=>editTodo(todo)}>edit </button>
       <button className=" btn btn-sm btn-danger mx-1 " onClick={()=>deleteTodo(todo.id)}> delete</button>

        </span>
    </li>
  )
}
 
export default ListItem