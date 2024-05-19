import React, { useContext } from 'react'
import TodosContext from './Context/TodosContext'

const Navbar = () => {


   const{dark}=useContext(TodosContext)
 const{changeTheme}=useContext(TodosContext)




    return (
    <nav className={dark? "navbar bg-dark text-light":"navbar bg-light"}>
  <div className="container-fluid">
    <span className="navbar-brand mb-0  h1 text-warning">React CRUD</span>
    <span className="navbar-brand  mb-0 h1 ">
      <button className={dark?'btn btn-light btn-sm':'btn btn-dark btn-sm'} onClick={changeTheme}>
        {dark ? "light mode":"dark mode"}
        </button>
    </span>
  </div>
</nav>
  )
}

export default Navbar