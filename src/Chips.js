import {React, useState} from "react";
import { NavLink } from "react-router-dom";

const Chips = ()=>{
    const [count, setCount] = useState(0);
    return (
        <div class="Chips">
            <h1>Bags eaten: {count}</h1>
            <button onClick={()=>setCount(count+1)}>Nom Nom Nom</button>
            <NavLink exact to="/">Go Back</NavLink>
        </div>
    )
}

export default Chips;