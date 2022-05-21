import { BrowserRouter, Routes, Route } from "react-router-dom";
import {ParamContext} from "./assets/context/ParamContext";
import {useState} from "react";

import Choice from "./pages/choice";
import Login from "./pages/Login";
import About from "./pages/About";

function App() {
    return (

        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/about' element={<About />} />
                <Route path='/choice' element={<Choice />} />
                <Route path='/choice' element={<Choice />} />      
                <Route path='/tool' element={<Tools />} />   
            </Routes>
        </BrowserRouter>

    )
}

export default App;