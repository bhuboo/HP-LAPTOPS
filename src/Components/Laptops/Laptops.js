import React from 'react';
import './Laptops.css';
// import Button from '@mui/material/Button';

function Laptops() {
  return (
    <div className='laptoppages'>
      <h2 className='lph1'>LAPTOPS</h2>
      <p className='lph2'>APPLY QUICK FILTERS</p>
      <ul className='btnlist'>
        <li>
        <button className='lpbtn'>HOME</button>
        </li>
        <li>
            <button className='lpbtn'>BUSINESS</button>
            </li>
            <li>
        <button className='lpbtn'>GAMING</button>
        </li>
        <li>
        <button className='lpbtn'>ON SALE</button>
        </li>
        <li>
        <button className='lpbtn2'>DISPATCH IN 2 DAYS</button>
        </li>
        <li>
        <button className='lpbtn2'>LAPTOPS UNDER ₹50,000</button>
        </li>
      </ul>
    </div>
  )
}

export default Laptops
