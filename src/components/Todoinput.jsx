import { useState } from "react"


export default function TodoInput(props) {
    const { handleAddTodos, todoValue, setTodoValue } = props
    

    //Pega a frase do input, desce como um card ao clicar no botão, e retorna ao valor incial "digite a tarefa"
    return (
        <header>
            <input value={todoValue} onChange={ (e) => { 
                setTodoValue(e.target.value)
                }} placeholder="Digite a tarefa..." />
            <button onClick={() => {
                handleAddTodos(todoValue)
                setTodoValue('')
                
            }}>Add</button>
        </header>
    )
}