// Code Keypad Component Here

import React from "react";

function Keypad () {
    
    return(
        <>
        <input 
        type="password" 
        name="pwd"
        onChange={() => console.log("Entering password...")}
        placeholder = "Enter password"
        />
        </>
    )
}

export default Keypad;