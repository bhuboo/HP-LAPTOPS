import React from 'react';
import "./Navbar_2.css";
// import { BsSearch } from "react-icons/bs";
import TextField from '@mui/material/TextField';

function Navbar_2() {
  return (
    <div>
        <nav className='secondnav'>
            <ul className="navlist">
                <li>
      <img className='logo' src='https://in-media.apjonlinecdn.com/logo/stores/1/HP_logo_black_1.svg' alt='logo'/>
     </li>
     <li>
      {/* <div className='textfield'> */}
      {/* <input className='searchbar' type='text' placeholder='What are you looking for?'></input> */}
      {/* <BsSearch /> */}
      {/* </div> */}
      <TextField className='textfield' placeholder='What are you looking for?'> </TextField>
      </li>
      </ul>
      <ul className='sales'>
      <a href='#'>SALES: 1800-108-4747</a>
      </ul>
      </nav>
    </div>
  )
}

export default Navbar_2
