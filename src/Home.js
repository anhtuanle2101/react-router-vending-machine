import React from "react";
import { NavLink } from "react-router-dom";
import "./Home.css";

const Home = () =>{
    return (
        <div class="Home">
            <h1>Hello I am a vending machine what would you like to eat</h1>
            <nav class="nav-bar">
                <NavLink exact to="/sodas">
                    Sodas
                </NavLink>
                <NavLink exact to="/chips">
                    Chips
                </NavLink>
                <NavLink exact to="/sardines">
                    Fresh Sardines
                </NavLink>
            </nav>
        </div>
    )
}

export default Home;