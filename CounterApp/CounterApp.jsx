// Analysis
// What to do? 
// Create a class component named CounterApp.
// Inside the CounterApp component, create a state property to store the counter value. Initially, the counter should start at 0.
// Display the current counter value on the screen.
// Create three buttons: "Increment," "Decrement," and "Reset."
// Implement click handlers for each button to update the counter value accordingly.
// The "Increment" button should increase the counter by 1.
// The "Decrement" button should decrease the counter by 1, but it should not allow the counter to go below 0.
// The "Reset" button should set the counter back to 0.
// Create a new React application or use an existing one.
// Implement the CounterApp class component based on the requirements.
// Use the state property to manage the counter value.
// Handle user interactions to increment, decrement, and reset the counter.
// Render the CounterApp component in your main application file (App.js or similar).
// Test your application to ensure that it functions as expected.
// How to do? Use "üseState" & functional componenet
// Create three buttons: "Increment," "Decrement," and "Reset."

import React, {useState} from "react";
function CounterApp ()
 {
    let [counter, setCounter] = useState(0);
    // let [currentValue, setCurrentValue] = useState(0);

    function increment()
    {
        setCounter(++counter);
    }
    function decrement()
    {
        setCounter(--counter);
    }
    function reset()
    {
        setCounter(0);
    }
    // function setCurrentValueFromInput(e)
    // {
    //     setCurrentValue(parsetInt(e.target.currentValue));
    // }
 
    return (
        <>
        <input type = "text" value={counter} name="counter"/> 
        {/* // onChange={(e)=>setCurrentValueFromInput(e)} // */}
        <br/>
        <button type = "button" onClick={increment}> increment</button>
        <br/>
        <button type = "button" onClick={decrement}> decrement</button>
        <br/>
        <button type = "button" onClick={reset}> reset</button>
        <br/>
        </>
        )
 }


export default CounterApp;
