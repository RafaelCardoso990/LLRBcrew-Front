import { BrowserRouter, Routes, Route } from "react-router-dom";
import {ParamContext} from "./assets/context/ParamContext";
import {useState} from "react";

import Choice from "./pages/choice";
<<<<<<< HEAD
import Login from "./pages/Login";
import About from "./pages/About";

function App() {
    return (

        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/about' element={<About />} />
                <Route path='/choice' element={<Choice />} />
            </Routes>
        </BrowserRouter>

=======
import Tools from "./pages/tools";


function App(){
    const [param,setParam] = useState();
    return(
       <ParamContext.Provider value={{param,setParam}}>
            <BrowserRouter>
                <Routes>
                    <Route path='/choice' element={<Choice />} />      
                    <Route path='/tool' element={<Tools />} />                 
                </Routes>
            </BrowserRouter>
        </ParamContext.Provider>
>>>>>>> cc689182f94cf51de2cc326b8b60593eab8eafba
    )
}

export default App;