import React, {useState} from "react";

function FormComponentone()
{
    const [name, setName] = useState('');
    const [email, setEmail] =useState('');

    function onChange(event)
    {
        setName(event.target.value);        
    }
    function onEmailChange(event)
    {
        setEmail(event.target.value);        
    }
return ( 
    <>       
    name: <input type = "text" onChange={(e)=>onChange(e)}/>
    email: <input type = "email" onChange={(e)=>onEmailChange(e)}/>
    <p>output name: {name}</p>
    <p>output email: {email}</p>
    </>);
}
export default FormComponentone;