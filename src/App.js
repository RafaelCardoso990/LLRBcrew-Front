import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ParamContext } from "./assets/context/ParamContext";
import { useState } from "react";

import Choice from "./pages/choice";
import Tools from "./pages/tools";
import Login from "./pages/Login";
import About from "./pages/About";


function App() {
    const [param, setParam] = useState();
    return (
        <ParamContext.Provider value={{ param, setParam }}>
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