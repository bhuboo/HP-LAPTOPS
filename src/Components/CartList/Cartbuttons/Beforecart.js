import React from 'react';
import './Cartbuttons.css';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../Redux/cart';

function Beforecart({product}) {
  const disptach = useDispatch();


  return (
    <div>
        <button  className='cartbtn'onClick={() => disptach(addToCart(product))}>Add to cart</button>
    </div>
  )
}

export default Beforecart
