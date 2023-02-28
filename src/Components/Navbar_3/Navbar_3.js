import React from 'react';
import './navbar_3.css';
import { BsHeadset,BsCart2,BsPerson } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
function Navbar_3() {
  const {cartList = []} = useSelector((state) => state.cart);
  return (
    <div className='navbar-3'>
      {/* <nav > */}
        <ul className='thirdlist'>
            <li>Business Solutions</li>
            <li>Laptops</li>
            <li>Desktops</li>
            <li>Printers</li>
            <li>Ink & Toner</li>
            <li>Monitors</li>
            <li>Accessories</li>
            <li>Care Pack</li>
            <li style={{color:'red'}}>Sale</li>
            <li>Tech Takes</li>
            <li>Support</li>
        </ul>
        <div className='fourthlist'>
            <a href='#'>
                <BsHeadset />
            </a>
            <Link to= '/Click'>
                <BsCart2 />
                </Link>
<div className='cartcount'>
{cartList.length}
</div>
                <a href='#'>
                    <SlLocationPin />
                </a>
                <a href='#'>
                    <BsPerson />
                    </a>
        </div>
     
    </div>
  )
}

export default Navbar_3
