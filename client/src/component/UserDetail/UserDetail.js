import React, { useEffect, useState } from "react";
import "./UserDetail.css"
import profile from "../../images/profile.jpg"
import Navbar from "../Navbar/Navbar";
function UserDetail() {
    const [userData, setUserData] = useState([]);


    useEffect(() => {
        fetch('http://localhost:3001/api/getusers')
            .then((response) => response.json())
            .then((data) => setUserData(data))

            .catch((error) => console.error('Error fetching data:', error));
    }, []);



    return (
        <div>
            <Navbar />
            <div className="usertable">
                <h2>User Details</h2>
                <img className="profile" src={profile}></img>
                <div className="user-content">
                    <h3>Username</h3>
                    <h3>Email</h3>
                    <h3>PhoneNo</h3>
                    <h3>ID</h3>
                    <h3>Creation Date</h3>
                </div>
            </div>
        </div>
    )
}

export default UserDetail;