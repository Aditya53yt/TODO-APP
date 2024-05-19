 import React, { useState } from 'react'
import Form from './components/Form'
import Navbar from './components/navbar'
import Listgroup from './Listgroup'
import { TodoProvider } from './components/Context/TodosContext'
 
 const App = () => {

     return (
    
   <TodoProvider>
   <Navbar   />
  
   <div className="container p-5" >
<Form   />
<Listgroup   />
</div>
   </TodoProvider>
   )
 }
 
 export default App