import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ParamContext } from "./assets/context/ParamContext";
import { useState } from "react";

import Choice from "./pages/choice";
import Login from "./pages/Login";
import About from "./pages/About";
import Tools from "./pages/tools";

function App() {
    const [param,setParam] = useState();
    const [level,setLevel] = useState("1");
    return (
        <ParamContext.Provider value={{param,setParam, level, setLevel}}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/choice' element={<Choice />} />                  
                    <Route path='/tool' element={<Tools />} />   
                </Routes>
            </BrowserRouter>
        </ParamContext.Provider>
    )
}

export default App;