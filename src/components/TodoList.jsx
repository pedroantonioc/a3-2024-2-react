import React from 'react'
import TodoCard from './TodoCard'


//TodoList é o componente responsável por renderizar a lista no comoponente app


export default function TodoList(props) {

  const{ todos } = props
  
  
  
  return (
    <ul className='main'>
      {todos.map((todo, todoIndex) => {
        return (
          <TodoCard {...props} key={todoIndex}
          index={todoIndex}
          >
            <p>{todo}</p>
          </TodoCard>
        )
      })}
    </ul>
  )
}
