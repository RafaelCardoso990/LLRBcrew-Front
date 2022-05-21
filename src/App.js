import { BrowserRouter, Routes, Route } from "react-router-dom";

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
            </Routes>
        </BrowserRouter>

    )
}

export default App;