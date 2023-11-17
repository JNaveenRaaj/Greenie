
import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Home.css";
import { SearchBar } from "../SearchBar/SearchBar";

function Home() {
  return (
    
      <div>
        <Navbar />
        <div className="body">
          <div className="right">
            <h2 style={{ float: "left" }}>Users</h2>
            <SearchBar />
          </div>
        </div>
      </div>
    
  );
}

export default Home;