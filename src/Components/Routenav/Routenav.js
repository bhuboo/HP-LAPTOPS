import React from 'react';
import './Routenav.css';
import {BsRecordCircleFill,BsCircleFill } from "react-icons/bs";
function Routenav() {
  return (
    <div className='Route-nav'>
      <img className='R-hpimg' src='https://in-media.apjonlinecdn.com/logo/stores/1/HP_logo_black_1.svg' alt='' />
      <div className='route-icons'>
      <BsRecordCircleFill className='R-dott'/>
      <hr className='R-hr'></hr>
      <BsCircleFill className='R-dott-2'/>
      <hr className='R-hr-2'></hr>
      <BsCircleFill className='R-dott-3'/>
      </div>
        <ul className='R-ul'>
            <li className='cart'>CART
            </li>
            <li className='checkout'>CHECKOUT</li>
            <li className='confirmation'>CONFIRMATION</li>
        </ul>
        <button className='check-buttton'>CHECKOUT SECURELY</button>
        
    </div>
    
  )
}

export default Routenav
