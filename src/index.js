import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Chatbot from './Chatbot';
import App from './App';
import { Provider } from 'react-redux'; // Import Provider from react-redux
import store from './redux/store'; 
import Homework from './Components/Homework';
import Navbar from './Components/Navbar';
import reportWebVitals from './reportWebVitals';
import Profile from './Components/Profile';
import HomePage from './Components/HomePage';
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import Navbarr from './Components/Navbarr';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Diary from './Components/Diary';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<Provider store={store}>
  <React.StrictMode>
     <BrowserRouter>
   
   <Routes>

     <Route path="/homework" element={<Homework/>} />
     <Route path="/nav" element={<Navbar/>} />
     <Route path="/" element={<HomePage />} />
     <Route path="/chatbot" element={<Chatbot />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/navv" element={<Navbarr/>} />
                    <Route path="/diary" element={<Diary/>} />
  
   </Routes>
   
 </BrowserRouter>
    <App />
  </React.StrictMode>
  </Provider>
);

reportWebVitals();
