import React, { useState } from 'react';
import "../Navbar/Navbar.css"
import Sidebar from '../Sidebar/Sidebar';
import db from "../../images/database.png";

const Navbar = () => {


    return (
        <div>
            <div className='navbar'>
                <h1 className='title'><img src={db} className='img' /> User Management Dashboard</h1>
                
            </div>
            <Sidebar />
        </div>
    );
};

export default Navbar;
