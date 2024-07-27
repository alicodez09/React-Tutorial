import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import CreateTodo from './layouts/todos/createTodo'
import Todo from './layouts/todos'
import UpdateTodo from './layouts/todos/updateTodo'
import TodoModal from "./layouts/todoModol"

function App() {

  return (
    <BrowserRouter>
      <Routes>
         <Route path='/todo' element={<Todo/>}/>
        <Route path='/create-todo' element={<CreateTodo/>}/>
        <Route path='/update-todo/:id' element={<UpdateTodo/>}/>
        <Route path='/' element={<TodoModal/>}/>


      </Routes>
    </BrowserRouter>
  )
}

export default App
