import React from 'react';
import './Blackbox.css';

function Blackbox() {
  return (
    <div className='blackbox'>
        <p className='p1'>0 Filter Applied</p>
        <p className='p2'>1-12 of 263 Results</p>
        <div className='blackbox1'>
      <p>View</p>
      <vl className='vl'></vl>
      <p>12</p>
      <vl className='vl'></vl>
      <p>18</p>
      <vl className='vl'></vl>
      <p>30</p>
      </div>
      <div>
      <select name="cars" id="cars" className='cars'>
          <option value="volvo">Sort By Featured</option>
           <option value="saab">Recommended</option>
          <option value="opel">Discount</option>
          <option value="audi">Best Seller</option>
          <option value="opel">Price:Low to High </option>
<option value="opel">Price:High to Low</option>
<option value="opel">Ratings:High to Low </option>
<option value="opel">New Arrivals</option>
        </select>
      </div>
    </div>
  )
}

export default Blackbox
