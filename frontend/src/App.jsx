import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import CreateTodo from './layouts/todos/createTodo'
import Todo from './layouts/todos'
import UpdateTodo from './layouts/todos/updateTodo'

function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Todo/>}/>
        <Route path='/create-todo' element={<CreateTodo/>}/>
        <Route path='/update-todo/:id' element={<UpdateTodo/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App
