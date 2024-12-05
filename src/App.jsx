import { useState, useEffect } from "react"
import TodoInput from "./components/Todoinput"
import TodoList from "./components/TodoList"
import axios from 'axios'



//app é o componente principal da aplicação, ele é exportado no fim para o componente main que distribui as listas de cada dia na tela
// 

function App() {
  
  

  const [todos, setTodos] = useState([])
  const [todoValue, setTodoValue] = useState([''])

  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify( {todos: newList}))
  }

  function handleAddTodos (newTodo) {
    const newTodoList = [...todos, newTodo]
    persistData(newTodoList)
    setTodos(newTodoList)
    axios.post('http://localhost:5000/newTodo', {newTodo}) //joga o novo card para o back end (em .c/server/index.js)
    
  }

  //jogar o material do backend pros cards do front
  useEffect(() => {
    axios.get('http://localhost:5000/readTodo')
    .then(res => {
      console.log(res);
      
    })
  }, [])

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index
    })
    persistData(newTodoList)
    setTodos(newTodoList)

    
  }

  function handleEditTodo (index) {
    const valueToBeEdited = todos[index]
    setTodoValue(valueToBeEdited)
    console.log(index) 
    handleDeleteTodo(index)
    console.log(index) 
   
  }

  //const handleEditTodo2 = (id) => {
  //  console.log(id);
 // }

  

  useEffect(() => {
    if (!localStorage) {
      return
    }

    let localTodos = localStorage.getItem('todos')
    if (!localTodos) {
      return
    }
    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)

  }, [])

  return (
    
    <>
      
      <TodoInput todoValue={todoValue} 
      setTodoValue={setTodoValue} 
      handleAddTodos={handleAddTodos}>
      </TodoInput>

      <TodoList handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo} 
      todos={todos}>
      </TodoList>
            
    </>
  )
}

export default App
