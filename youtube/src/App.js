import React from "react";
import {Route,Routes} from 'react-router-dom';
import "./App.css";
import Home from "./Pages/Home";

const App = ()=>{
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
            </Routes>
        </>
    )
};

export default App;