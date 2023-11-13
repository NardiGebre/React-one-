import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoApp from './TodoApp/TodoApp';
import CounterApp from './CounterApp/CounterApp';
import UserProfileCard from './UserProfileCardApp/UserProfileCardApp';
import EventHandlingApp from './EventHandlingApp/EventHandlingApp';
import FormComponent from './FormComponent/FormComponent';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <TodoApp/>
    <CounterApp/>
    <UserProfileCard name ="Akxum" age = "3000" email = "akxum@gmail.com"/>
    <EventHandlingApp/>
    <FormComponent/>
 
     </React.StrictMode>
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


