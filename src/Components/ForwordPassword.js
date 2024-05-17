import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import logo1 from '../assets/blue-logo.png';
import Navbarr from './Navbarr';
import Footer from './Footer';
import '../styles/loginstyle.css';

const ForgotPassword = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [forgot, setforgot] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (formData.password !== formData.confirmPassword) {
                alert('Passwords do not match!');
                return;
            }

            const response = await axios.post('http://localhost:8000/sig', {
                email: formData.email,
                password: formData.password,
                action: 'forgotpassword'
            });

            if (response.data === 'success') {
                alert("Password Reset Successful")
                setforgot(true);

            } else if (response.data === 'notexist') {
                alert('User does not exist!');

            } else {
                alert('Password change failed!');

            }
        } catch (error) {
            console.error('Error:', error);
            alert('Password change failed!');
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
                        <p className="text-body-emphasis1 lead">You can reset your password here.</p>
                    </div>
                    <div className="form-side col-md-10 mx-auto col-lg-5">
                        <div className="form-side col-md-10 mx-auto col-lg-5">
                            <form className="bg-color p-4 p-md-5 rounded-3" onSubmit={handleSubmit}>
                                <div className="form-floating mb-3">
                                    <input
                                        type="email"
                                        className="form-feild-color form-control"
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
                                        className="form-feild-color form-control"
                                        id="floatingPassword"
                                        name="password"
                                        placeholder="New Password"
                                        value={formData.password}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="floatingPassword">New Password</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input
                                        type="password"
                                        className="form-feild-color form-control"
                                        id="floatingConfirmPassword"
                                        name="confirmPassword"
                                        placeholder="Confirm New Password"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="floatingConfirmPassword">Confirm New Password</label>
                                </div>
                                {forgot ? (<Link to='/login' type="submit" className="btn-custom w-100 btn btn-lg fw-bold">Reset Password</Link>)
                                    : (<button type="submit" className="btn-custom w-100 btn btn-lg fw-bold">Reset Password</button>)
                                }
                                <hr className="separation-color my-4" />
                                <small className="text-color">By Clicking Reset Password, you will be redirected to login page.</small>
                            </form>
                        </div>
                    </div>
                </div>
            </div >

            <Footer />
        </>
    );
};

export default ForgotPassword;
