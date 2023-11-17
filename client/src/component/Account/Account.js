import React from "react";
import logo from "../../images/Greenie.png"
import "./Account.css"
import Navbar from "../Navbar/Navbar";
function Account() {
    return (
        <div>
            <Navbar />
            <div className="form-table">
                <div className="form">
                    <h2><img className="logo" src={logo}></img>Account Creation</h2>
                    <div >
                        <h4>Username</h4>
                        <input className="accInp" placeholder="Username" type="text"></input>
                    </div>
                    <div>
                        <h4>Password</h4>
                        <input className="accInp" placeholder="Password" type="password"></input>
                    </div>
                    <div ><button className="acc-btn" ><a href="/">Create Account</a></button></div>
                </div>
            </div>
        </div>
    )
}

export default Account;