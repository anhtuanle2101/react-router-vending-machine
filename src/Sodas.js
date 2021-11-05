import React from "react";
import { NavLink } from "react-router-dom";

const Sodas = () =>{
    return (
        <div class="Sodas">
            <h1>OMG SUGARR</h1>
            <NavLink exact to="/">Go Back</NavLink>
        </div>
    )
}

export default Sodas;