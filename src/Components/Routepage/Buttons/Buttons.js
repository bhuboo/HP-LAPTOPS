import React from 'react';
import './Buttons.css';
import { useDispatch } from 'react-redux';
import { increment} from '../../../Redux/cart';
import { decrement} from '../../../Redux/cart';
function Buttons({product,cartList}) {
  const disptach = useDispatch();
  return (
    <div className='B-buttons'>
    <button  className='decrease'onClick={() => disptach(decrement(product.id))}>-</button>
    <div className='rate' >{cartList[`${product.id}`].count}</div>
   <button className='increase' onClick={() => disptach(increment(product.id))} >+</button>
</div>
  )
}

export default Buttons
