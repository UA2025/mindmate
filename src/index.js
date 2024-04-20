import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Homework from './Components/Homework';
import Navbar from './Components/Navbar';
import reportWebVitals from './reportWebVitals';
import Signup from './Components/Signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <React.StrictMode>
     <BrowserRouter>
   
   <Routes>

     <Route path="/homework" element={<Homework/>} />
     <Route path="/nav" element={<Navbar/>} />
    
     <Route path="/sig" element={<Signup />} />
  
   </Routes>
 </BrowserRouter>
    <App />
  </React.StrictMode>

);

reportWebVitals();
