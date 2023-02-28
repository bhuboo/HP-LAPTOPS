import React from 'react';
import { useSelector } from 'react-redux';
import Aftercart from './Aftercart';
import Beforecart from './Beforecart';

const CartButtons = ({product}) => {
    const { cartList } = useSelector((state)=> state.cart);
    const cartCount = cartList?.find((item) => item?.id === product?.id)?.count;
    console.log(cartCount,"==cartCount");
  return (
    <>  
      {cartCount > 0 ? <Aftercart product={product} /> : <Beforecart product={product}/>};
    {/* <Aftercart product={product}/> <Beforecart product={product} /> */}
    </>
  );
};

export default CartButtons
