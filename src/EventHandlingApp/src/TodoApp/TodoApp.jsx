// Create a state Variable to store the list of tasks.
// Initially the list should be empty.
// Create an input field and a ''Add Task" button to allow users to add new tasks to the list.

import React,{ useState } from "react";
import  './TodoApp.css';

function TodoApp() 
{
    // Initialize an empty arry as the initial state
    const [tasks, setTasks ] = useState([]);
    const [inputValue, setInputValue] = useState ("");
    const list = [];
    
    return
    ( <>
        <div className="wrapper">
        <input type="text" onChange={onChange} id="task"/>
        <button type="submit" onClick={onClick}>Add Task</button>
  
        <ul className="TodoList">
            {tasks.map((task,index) =>{
                return (
                    <>
                    <li key={index} id={index}>{task}</li>
                    <input type="checkbox"/>
                    <button onClick= {()=>onDelete(task)}>Delete</button>
                    </>)
                })}
        </ul>
        </div>           
        </>    );
    function onClick () 
{
    setTasks([...tasks,inputValue]);
    console.log(`my list:${tasks}`)
}
function onChange (event)
{
    setInputValue(event.target.value);// inputValue is 
}
function onDelete (task)
{
    const index = tasks.indexOf(task);
    tasks.splice(index,1);
    setTasks([...tasks]);
}
}
export default TodoApp;