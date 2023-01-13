import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Landing from '../pages/Landing';
import Login from '../pages/Login';

function App() {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing/>} />
                <Route path="/login" element={<Login/>} />
                {/* //<Route path="/register" element={} /> */}
            </Routes>
        </BrowserRouter>   
     );
}

export default App;