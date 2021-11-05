import React from "react";
import {BrowserRouter as Router, Route, Routes, NavLink} from "react-router-dom";
import Home from "./Home";
import Sodas from "./Sodas";
import Chips from "./Chips";
import Sardines from './Sardines';


const VendingMachine = ()=>{
    return (
        <div class="VendingMachine">
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home/>}></Route>
                    <Route exact path="/sodas" element={<Sodas/>}></Route>
                    <Route exact path="/chips" element={<Chips/>}></Route>
                    <Route exact path="/sardines" element={<Sardines/>}></Route>
                </Routes>
            </Router>
        </div>
    )
}

export default VendingMachine;