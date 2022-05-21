import { BrowserRouter, Routes, Route } from "react-router-dom";
import {ParamContext} from "./assets/context/ParamContext";
import {useState} from "react";

import Choice from "./pages/choice";
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
    )
}

export default App;