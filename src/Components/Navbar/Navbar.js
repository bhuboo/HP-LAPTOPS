import React from 'react';
// import Button from '@mui/material/Button';
import "./Navbar.css"

function Navbar() {
  return (
    <div className="app-bar">
        <nav>
            <ul className="navbar">
                <li>
                    <p className="para1">HP FOR BUSINESS</p>
                </li>
                <li>
                   <p className="para2">Got GSTIN? Join today and get exclusive offers!</p>
                </li>
                <li>
               <button className="btn-1">Learn More</button>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar