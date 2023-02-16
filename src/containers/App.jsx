import { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Landing from '../pages/Landing';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Flexbox from '../pages/Flexbox';
import RickAndMorty from '../pages/RickAndMorty';
import UserContext from '../context/UserContext';

function App() {
    const [isLoged, setIsLoged] = useState(false)
    return ( 
        <BrowserRouter>
            <UserContext.Provider value={{isLoged, setIsLoged}}>
                <Routes>
                    <Route path="/" element={<Landing/>} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/register" element={<Register/>} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/flexbox" element={<Flexbox />} />
                    <Route path="/rickandmorty" element={<RickAndMorty session={isLoged}/>} />
                    <Route path="/*" element={<NotFound/>} />
                </Routes>
            </UserContext.Provider>
        </BrowserRouter>   
     );
}

export default App;