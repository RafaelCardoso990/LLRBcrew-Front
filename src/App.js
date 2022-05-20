import { BrowserRouter, Routes, Route } from "react-router-dom";

import Choice from "./pages/choice";

function App(){        
    return(
       
        <BrowserRouter>
            <Routes>
                <Route path='/choice' element={<Choice />} />                
            </Routes>
        </BrowserRouter>
       
    )
}

export default App;