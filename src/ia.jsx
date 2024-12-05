import React, { useState, useEffect } from 'react';
import { Run } from './gemini-start.js';

export default function IaCard(props) {
  const [weatherText, setWeatherText] = useState('');

  useEffect(() => {
    const fetchWeather = async () => {
      const text = await Run();
      setWeatherText(text);
    };

    fetchWeather();
  }, []);

  const { children, handleDeleteTodo, index, handleEditTodo } = props;

  return (
    
    <li className='iaItem'>
      {children}
      <div className='actionsContainer' >
        
        
        <p id="weather-paragraph">{weatherText}</p>
        
      </div>
    </li>
  );
}






















//import { useState, useEffect } from "react"
//import TodoInput from "./components/Todoinput"
//import TodoList from "./components/TodoList"
//import axios from 'axios'
//import TodoCard from './components/TodoCard'


//function Ia() {

    

   // return (

    
   // <>
    //    <h1>Veja como está o tempo Hoje: </h1>
       
    //    <p id="result"></p>

    //    <TodoCard {...props} key={todoIndex}
    //      index={todoIndex}
    //      >
    //        <p>{todo}</p>
    //      </TodoCard>

    //    <script type="module" src="gemini-start.js"></script>

    //</>
//)
//}

// export default Ia