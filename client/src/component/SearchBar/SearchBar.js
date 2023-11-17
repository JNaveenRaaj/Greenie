import { useState, useEffect } from "react";
import "./SearchBar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';


export const SearchBar = ({ setResults }) => {
  

    const [userData, setUserData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
  
    useEffect(() => {
      fetch('http://localhost:3001/api/getusers')
        .then((response) => response.json())
        .then((data) => setUserData(data))
        
        .catch((error) => console.error('Error fetching data:', error));
    }, []); 
  
    const filteredData = userData.filter((user) =>
      user.username.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
      <div>
      <div className="search-field">
        <input
          type="text"
          placeholder="Search by Username"
          value={searchTerm}
          className="search-input"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button id="clear-btn" onClick={(e) => setSearchTerm('')}>Clear</button>

</div>
        
        <table className="user-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Username</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Account Creation Date</th>
                <th>View Profile</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((user) => (
                <tr key={user.userid} >
                  <td>{user.userid} </td>
                  <td>{user.username} </td>
                  <td>{user.email}</td>
                  <td>{user.phoneno}</td>
                  <td>{user.date}</td>
                  <td><a href="/userdetail"><FontAwesomeIcon icon={faUser} /></a></td>
                  
                </tr>
              ))}
            </tbody>
          </table>
      </div>
  );
};
