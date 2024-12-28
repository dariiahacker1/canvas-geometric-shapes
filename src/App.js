import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Cube from "./Pages/Cube/Cube";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Sphere from "./Pages/Sphere/Sphere";
import Pyramid from './Pages/Pyramid/Pyramid'

function App() {
    return (
        <div className="App">
                <BrowserRouter>
                    <NavBar/>
                    <Routes>
                        <Route path="/" element={<Navigate to="/cube" replace />} />
                        <Route path="/cube" element={<Cube/>}></Route>
                        <Route path="/sphere" element={<Sphere/>}></Route>
                        <Route path="/pyramid" element={<Pyramid/>}></Route>
                    </Routes>
                </BrowserRouter>
        </div>
);
}

export default App;
