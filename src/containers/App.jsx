import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Landing from '../pages/Landing';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Flexbox from '../pages/Flexbox';

function App() {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/home" element={<Home />} />
                <Route path="/flexbox" element={<Flexbox />} />
                <Route path="/*" element={<NotFound/>} />
            </Routes>
        </BrowserRouter>   
     );
}

export default App;