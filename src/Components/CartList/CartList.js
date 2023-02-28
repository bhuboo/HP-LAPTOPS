import React from 'react';
import './CartList.css';
import {BsQuestionCircleFill,BsPlusSquare,BsRecord2,BsSquare,BsStarFill } from "react-icons/bs";
import products from "../../api/products.json";
import { MdOutlineArrowForwardIos } from "react-icons/md";
// import Beforecart from './Cartbuttons/Beforecart';
// import Aftercart from './Cartbuttons/Aftercart';
import {useSelector} from "react-redux";
import CartButtons from './Cartbuttons';

function CartList() { 
  const { cartList } = useSelector((state)=> state.cart);
  console.log(cartList);
  
  return (
    <div className='sidebar'>
      <div>
      <button className='sbtn'><p className='pricep1'><BsQuestionCircleFill className='qsmark'/> PRICE <BsPlusSquare className='plusicon' /></p></button><br></br>
      <button className='sbtn'><p className='pricep1'><BsQuestionCircleFill className='qsmark'/> CATEGORY <BsPlusSquare className='plusicon1' /></p></button><br></br>
      <button className='sbtn'><p className='pricep1'><BsQuestionCircleFill className='qsmark'/> FORM FACTOR <BsPlusSquare className='plusicon1' /></p></button><br></br>
      <button className='sbtn'><p className='pricep1'> PROCESSORS <BsPlusSquare className='plusicon1' /></p></button><br></br>
      <button className='sbtn'><p className='pricep1'><BsQuestionCircleFill className='qsmark'/> SCREEN SIZE<BsPlusSquare className='plusicon1' /></p></button><br></br>
      <button className='sbtn'><p className='pricep1'><BsQuestionCircleFill className='qsmark'/> HARD DRIVE CAPACITY<BsPlusSquare className='plusicon1' /></p></button><br></br>
      <button className='sbtn'><p className='pricep1'><BsQuestionCircleFill className='qsmark'/> MEMORY(RAM)<BsPlusSquare className='plusicon1' /></p></button><br></br>
      <button className='sbtn'><p className='pricep1'><BsQuestionCircleFill className='qsmark'/> OPERATING SYSTEM <BsPlusSquare className='plusicon1' /></p></button><br></br>
      <button className='sbtn'><p className='pricep1'><BsQuestionCircleFill className='qsmark'/> GRAPHICS <BsPlusSquare className='plusicon1' /></p></button><br></br>
      <button className='sbtn'><p className='pricep1'><BsQuestionCircleFill className='qsmark'/> WEIGHT,METRIC<BsPlusSquare className='plusicon1' /></p></button><br></br>
      <button className='sbtn'><p className='pricep1'><BsQuestionCircleFill className='qsmark'/> USAGE<BsPlusSquare className='plusicon1' /></p></button><br></br>
      <button className='sbtn'><p className='pricep1'><BsQuestionCircleFill className='qsmark'/> COLOUR<BsPlusSquare className='plusicon1' /></p></button><br></br>
      <button className='sbtn'><p className='pricep1'><BsQuestionCircleFill className='qsmark'/> FAMILY BRAND<BsPlusSquare className='plusicon1' /></p></button><br></br>
      <button className='sbtn'><p className='pricep1'><BsQuestionCircleFill className='qsmark'/> FEATURES<BsPlusSquare className='plusicon1' /></p></button><br></br>
      <button className='sbtn'><p className='pricep1'><BsQuestionCircleFill className='qsmark'/> INCLUDED<BsPlusSquare className='plusicon1' /></p></button><br></br>
      <button className='sbtn'><p className='pricep1'><BsQuestionCircleFill className='qsmark'/> AVAILABILITY<BsPlusSquare className='plusicon1' /></p></button><br></br>
      <button className='sbtn'><p className='pricep1'> SALES/DEALS<BsPlusSquare className='plusicon1' /></p></button><br></br>
    </div>
    <div className='card'>
      {products?.map((product,key) => (
      <div className='maincontainer' key={key}>
        <div className='stock'>
       <p > <BsRecord2 className='stockbtn'/></p><p style={{color:'grey',fontSize:'15px'}}> IN STOCK</p>
       </div>
      <img className='lapimg' src={product.image} alt=""></img>
      {/* <div className='lapimgs'>
      <img className='lapimg1'src='https://in-media.apjonlinecdn.com/attribute/swatch/h/p/hp_care_pack_rgb_blue.png'></img>
     <img className='lapimg1' src='https://in-media.apjonlinecdn.com/attribute/swatch/_/t/_thumb_128208.png'></img>
      </div> */}
      <p className='star'><BsStarFill style={{color:'#0199d5'}}/>
      <BsStarFill style={{color:'#0199d5'}}/>
      <BsStarFill style={{color:'#0199d5'}}/>
      <BsStarFill style={{color:'#0199d5'}}/>
      <BsStarFill style={{color:'grey'}}/> 3.9(47)</p>
      <p className='lapname'>{product.name}</p>

      <p className='lappara'>{product.para1}</p>
      <div className='formline'>
        <form >
          <BsSquare className='square' />
        <label className='label'> Compare 6J0W2PA</label>
 </form>
      </div>
      <div className='pricetag'>
      <p style={{color:'rgb(63, 63, 63)',fontSize:'13px'}}><del>{product.info1}</del></p>
      <p className='lapinfo2'>{product.info2}</p>
      </div>
      <div className='taxprice'>
      <p className='lapprice'>{product.price}</p>
      <p className='tax'>{product.tax}</p>
      </div>
      <p className='gst'>{product.gst}</p>
      <div className='details'>
      <p className='vdetails'> View Details </p>
      <p><MdOutlineArrowForwardIos className='arrow'/></p>
      {/* <button  className='cartbtn'>Add to cart</button> */}
      {/* <Beforecart addToCart={addToCart}/> */}
      {/* <Aftercart /> */}
      {/* {cartCount>0 ? <Aftercart />:<Beforecart product={product}/>} */}
      <CartButtons product = {product}/>
</div>      
</div>
  ))}
  </div>
  </div> 
  )
}

export default CartList
