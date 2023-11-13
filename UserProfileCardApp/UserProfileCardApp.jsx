// Analysis
// UserProfileCard App
// Create a functional component named UserProfileCard.
// Define PropTypes for the component to validate the incoming user data.
// The UserProfileCard should display the user's name, age, and email.
// How to do? props, props validation

import React from "react";
import PropTypes from "prop-types";

function UserProfileCard(props) 
{
    return
    (   <>
        <div>
            <span>name: {props.name}</span><br/>
            <span>age: {props.age}</span><br/>
            <span>email: {props.email}</span><br/>
        </div>
        </>
    )
}

UserProfileCard.PropTypes = 
{
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired
}

export default UserProfileCard;