import React, { useEffect } from 'react';
import Routenav from '../Routenav/Routenav';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { IoIosArrowDown  } from "react-icons/io";
import './Routepage.css';
import Buttons from './Buttons/Buttons';
import { useSelector,useDispatch } from 'react-redux';
import {gettotalprice} from '../../Redux/cart';

function Routepage() {
  const { cartList,totalPrice,totalCount,totalgst,ordertotal } = useSelector((state) => state.cart);
  const disptach = useDispatch();
  useEffect( () =>{
    disptach(gettotalprice())
  } ,[cartList])
  return (
    <div>
 <Routenav />
 <hr></hr>
 <div className='div'>
          <div>
         <h4 className='shopping'>CONTINUE SHOPPING</h4>
          <p className='shopping-cart'>SHOPPING CART</p>
          <hr className='R-hrcart'></hr>
          </div>
         <div className='summary'>
            <p>order summary</p>
          </div>
         </div>
          <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} className='first-div' >
        <Grid item xs={8}>
        {cartList?.map((product,key) => (
          <div className='cart-grid' key={key}>
           <div className='cart-grid1'>
            <img className='R-img' src={product.image} alt='' />
          </div>
          <div className='cart-info'>
          <p className='R-name1'>{product.name}</p>
          <p className='R-name2'>Part No.6J0W2PA</p>
          <p className='R-name3'>SHOW DETAILS</p>
          </div>
          <div className='cart-price'>
            {/* <p className='R-name1'>{product.price}</p> */}
       {product.price2 > 0 ?<p className='R-name1'>{product.price2}</p> : <p className='R-name1'>{product.price}</p>}
             <Buttons product={product} cartList={cartList}/>
            <p className='R-name3'>REMOVE ITEM</p>
          </div>
          </div>
          ))}
        </Grid>
        <Grid  item xs={4} className='total'>
        <div className='second-total'>
          <p className='price-p1'>APPLY DISCOUNT CODE</p>
              <div className='summary=grid' >
                <p  className='price-p1'>SUB TOTAL<span className='p-span1'> {totalPrice}</span></p>
                <p  className='price-p1'>QUANTITY <span  className='p-span2'> {totalCount}</span></p>
                 <p  className='price-p1'>INCLUDES GST <span  className='p-span3'>{totalgst}</span> </p>
                 <div className='total-price'>
                  <p className='price-T' > ORDER TOTAL  <span className='p-span3'>{ordertotal}</span></p>
                </div>
              </div>
          </div>
        </Grid>
        </Grid>
        </Box>
      
    </div>
  )
}

export default Routepage
