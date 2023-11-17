import React from "react";
import "./Sidebar.css"
function Sidebar() {
    return (
            <div className="left">
                <ul>
                    <li><button className="side-btn"><a className="side-txt" href='/'>User Table</a></button></li>
                    <li><button className="side-btn"><a className="side-txt" href='/account'>Account Creation</a></button></li>
                    <li><button className="side-btn"><a className="side-txt" href='https://greenie.one/'>About</a></button></li>
                    <li><button className="side-btn"><a className="side-txt" href='/'>Logout</a></button></li>
                </ul>
            </div>
        
    )
}

export default Sidebar;