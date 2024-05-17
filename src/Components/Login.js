import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import logo1 from '../assets/blue-logo.png';
import Navbarr from './Navbarr';

import { useNavigate } from "react-router-dom";
import Footer from './Footer';
import '../styles/forgotstyle.css';
import '../styles/loginstyle.css';
import { useDispatch } from 'react-redux';
import { setUserId } from '../redux/actions';
import { useSelector } from 'react-redux';

const Login = () => {
    
    const dispatch = useDispatch();
    const history = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [loggedIn, setLoggedIn] = useState(false);
    const [userExists, setUserExists] = useState(false); // New state to track if user exists

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const [username, setName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8000/sig', {
                email: formData.email,
                password: formData.password,
                action: 'login'
            });
            console.log("Response data:", response);
            if (response.data.email===formData.email) {
                alert('Login successful!');
                dispatch(setUserId(response.data._id));
                  console.log('response.data.userId',response.data._id)
                const usernameResponse = await axios.get('http://localhost:8000/getUsername', {
                    params: {
                      email: formData.email
                    }
                  });
                  const username = usernameResponse.data.username;
                  console.log('username',username)
                      history("/profile", { state: { id: username } });
            } else if (response.data === 'notexist') {
                alert('User does not exist!');
                setUserExists(false); // Update userExists state
            } else if (response.data === 'invalid') {
                alert('Invalid credentials!');
                setUserExists(true); // Update userExists state
            } else {
                alert('Login failed!');
                setUserExists(true); // Update userExists state
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Login failed!');
        }
           };

   
    return (
        <>
            <Navbarr />

            <div className="container my-5">
                <div className="bg-image row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                    <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                        <div className="d-flex align-items-center mb-3">
                            <img src={logo1} alt="Logo" className="logo" />
                            <h1 className="display-4 fw-bold lh-1 text-body-emphasis1">MindMate</h1>
                        </div>
                        <p className="h4 fw text-body-emphasis1 lh-1 mb-3">Embracing growth, one step at a time.</p>
                        <p className="text-body-emphasis1 lead">Welcome back! Please log in with your existing account credentials. If you're new here, feel free to sign up for an account to get started.</p>
                        <p className="text-body-emphasis1 lead"><i>Click here if you <Link to="/forgotpass" className='forgot-link'>Forgot Password</Link></i></p>
                    </div>
                    <div className="form-side-login col-md-10 mx-auto col-lg-5">
                        <form className="bg-color-login p-4 p-md-5 rounded-3" onSubmit={handleSubmit}>
                            <div className="form-floating mb-3">
                                <input
                                    type="email"
                                    className="form-feild-color-login form-control"
                                    id="floatingInput"
                                    name="email"
                                    placeholder="name@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                <label htmlFor="floatingInput">Email address</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input
                                    type="password"
                                    className="form-feild-color-login form-control"
                                    id="floatingPassword"
                                    name="password"
                                    placeholder="Password"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                                <label htmlFor="floatingPassword">Password</label>
                            </div>
                            {/* Conditional rendering based on userExists state */}
                            {/* Takes the user to signup page if login is not successful or account is not made and takes the user to their ptofile when logged in  */}
                            
                                <button className="btn-custom w-100 btn btn-lg fw-bold" type="submit">Login</button>
                            
                            <hr className="separation-color my-4" />
                            <small className="text-color">By clicking Login, you will go to your account</small>
                        </form>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default  Login ;