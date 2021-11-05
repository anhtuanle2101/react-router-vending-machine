import React from "react";
import { NavLink } from "react-router-dom";

const Sardines = () =>{
    return (
        <div class="Sardines">
            <h1>You don't eat the sardines, they eat you</h1>
            <NavLink exact to="/">Go Back</NavLink>
        </div>  
    )
}

export default Sardines;