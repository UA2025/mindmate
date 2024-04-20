import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './Com.css';

const Signup = () => {
    const history = useNavigate(); // Change this to navigate
    const [email, setEmail] = useState('');
    const [username, setName] = useState('');
    const [password, setPassword] = useState('');
    const [tab, setTab] = useState("sign-up"); // Default tab

    async function submit(e) {
        e.preventDefault();
      
        try {
            let action = "login"; 
        if (tab === "sign-up") {
            action = "signup"; 
        }

        const response = await axios.post("http://localhost:8000/sig", {
            username, 
            email,
            password,
            action
        });

            
            console.log("Response data:", response.data);
            console.log("Tab:", tab);
            if (response.data === "exist" && tab === "sign-in") {
console.log("data has logged",username);

                history("/nav", { state: { id: username } });
            } else if (response.data === "notexist" && tab === "sign-in") {
                alert("User have not signed up");
            } else if (response.data === "exist" && tab === "sign-up") {
                alert("User already exists");
            } else if (response.data === "notexist" && tab === "sign-up") {
              console.log("data is new",username);

                history("/nav", { state: { id: username ,email1:email} });
            }
        } catch (error) {
            alert("Wrong details");
            console.error(error);
        }
    }

    return (
        <div>
          <h1>{username}</h1>
          <h1>{email}</h1>
          <h1>{password}</h1>
        <div className="login-wrap">
            <div className="login-html">
           <input id="tab-1" type="radio" name="tab" className="sign-in" defaultChecked={tab === "sign-in"} onChange={() => setTab("sign-in")} />

<label htmlFor="tab-1" className="tab">
    Sign In
</label>
<input id="tab-2" type="radio" name="tab" className="sign-up" defaultChecked={tab === "sign-up"} onChange={() => setTab("sign-up")} />

<label htmlFor="tab-2" className="tab">
    Sign Up
</label>


<div className="login-form">
    <form   onSubmit={submit}>
  
        {tab === "sign-in" && (
            <div className="sign-in-htm">
                <div className="group">
                    <label htmlFor="user" className="label">
                        Username
                    </label>
                    
                    <input id="user" type="text" className="input" onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className="group">
                    <label htmlFor="pass" className="label">
                        Password
                    </label>
                    <input id="pass-sign-in" type="password" className="input"onChange={(e) => setPassword(e.target.value)}  />
                </div>
                <div className="group">
                    <input id="check-sign-in" type="checkbox" className="check" defaultChecked={false} />
                    <label htmlFor="check-sign-in">
                        <span className="icon"></span> Keep me Signed in
                    </label>
                </div>
                <div className="group">
                    <button type="submit" className="button">Sign In</button>
                </div>
            </div>
                        )}

{tab === "sign-up" && (
            <div className="sign-up-htm">
               <div className="group">
                                    <label htmlFor="user" className="label">
                                        Username
                                    </label>
                                    <input id="user" type="text" className="input" onChange={(e) => setName(e.target.value)}/>
                                </div>
                                <div className="group">
                                    <label htmlFor="pass-sign-up" className="label">
                                        Password
                                    </label>
                                    <input id="pass-sign-up" type="password" className="input" data-type="password" onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                <div className="group">
                                    <label htmlFor="pass-repeat" className="label">
                                        Repeat Password
                                    </label>
                                    <input id="pass-repeat" type="password" className="input" data-type="password"  />
                                </div>
                                <div className="group">
                                    <label htmlFor="email" className="label">
                                        Email Address
                                    </label>
                                    <input id="email" type="text" className="input" onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                
                                <div className="group">
                                <button type="submit" className="button">
                            {tab === "sign-in" ? "Sign In" : "Sign Up"}
                        </button>
                                </div>
                                <div className="hr"></div>
                                <div className="foot-lnk">
                                    <label htmlFor="tab-1">Already a Member?</label>
                                </div>
                            </div>)}
                          
</form>
                    
                </div>
            </div>
        </div>
        </div>
    );
};

export default Signup;