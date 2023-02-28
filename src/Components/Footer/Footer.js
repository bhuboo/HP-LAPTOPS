import React from 'react';
import {FaFacebookF, FaYoutube, FaTwitter, FaPinterestP, FaGooglePlusG, FaSpider} from "react-icons/fa";
import './Footer.css';

function Footer() {
  return (
    <div className='mainfooter'>
    <div className=' footerlist'>
        <ul className='ul1'>
          <li><h5 style={{color:'white'}}>Contact Us</h5></li>
          <li>Consumer Customers</li>
          <li>1800 108 4747</li>
          <li>Business Customers</li>
          <li>1800 108 4746</li>
          <li>Mon-Fri 9am - 7pm</li>
          <li>(excl. public holidays)</li>
          </ul>
          <ul className='ul1'>
          <li><h5 style={{color:'white'}}>Shop for Products</h5></li>
          <li>Laptops</li>
          <li>Desktops</li>
          <li>Printers</li>
          <li>Ink & Toner</li>
          <li>Monitors</li>
          <li>Accessories</li>
          <li>Care Pack</li>
          <li>Support</li>
          <li>Latest Offers</li>
          <li>Latest Products</li>
          </ul>
          <ul className='ul1'>
          <li><h5 style={{color:'white'}}>Customer Service</h5></li>
          <li>About Us</li>
          <li>Technical Support</li>
          <li>Software & Drivers</li>
          <li>Terms & Conditions</li>
          <li>FAQs</li>
          <li>Contact Us</li>
          <li>Feedback & Complaints</li>
          <li>How to Order</li>
          <li>Product Review</li>
          </ul>
          <ul className='ul1'>
          <li><h5 style={{color:'white'}}>My HP</h5></li>
          <li>My Account</li>
          <li>Track My Order</li>
          <li>HP Money</li>
          <li>Store Locator</li>
          <li>Tech Takes</li>
          <li>Sustainable Impact</li>
          </ul>
          <ul className='ul1'>
          <li><h5 style={{color:'white'}}>Private Program</h5></li>
          <li>HP Employee Store</li>
          <li>Corporate Employee Offers</li>
          <li>Student Store</li>
          <li>Original Rewards Program</li>
          <li>HP for Business</li>
          <li>HP Corporate Accessories Store</li>
          <li>HP Planet Partners Rewards</li>
          <li>HP Deskjet Supplies Rewards</li>
          </ul>
    </div>
    <hr className='footerhr'></hr>
    <p className='footpara'>© 2023 HP INDIA SALES PRIVATE LIMITED</p>
    <p className='footpara'>Terms & conditions of sales & service | Terms of Use | Site map | Privacy Statement</p>
    <ul className='footicon'>
      <li><FaFacebookF style={{backgroundColor:'grey',color:'#fff',width:'20px',borderRadius:'3px'}}/></li>
      <li><FaYoutube style={{backgroundColor:'grey',color:'#fff',width:'20px',borderRadius:'3px'}} /></li>
      <li><FaTwitter style={{backgroundColor:'grey',color:'#fff',width:'20px',borderRadius:'3px'}} /></li>
      <li><FaPinterestP style={{backgroundColor:'grey',color:'#fff',width:'20px',borderRadius:'3px'}}/></li>
      <li><FaGooglePlusG style={{backgroundColor:'grey',color:'#fff',width:'20px',borderRadius:'3px'}} /></li>
    </ul>
    <div className='paragraph'>
    <p>Ultrabook, Celeron, Celeron Inside, Core Inside, Intel, Intel Logo, Intel Arc graphics, 
      Intel Atom, Intel Atom Inside, Intel Core, Intel Inside, Intel Inside Logo, Intel vPro, Intel Evo, 
      Pentium, Pentium Inside, vPro Inside, Xeon,</p>
      <p> Xeon Inside, Intel Agilex, Arria, Cyclone, Movidius, eASIC, 
      Ethernet, Iris, Killer, MAX, Select Solutions, Si Photonics, Stratix, Tofino, and Intel Optane are trademarks 
      of Intel Corporation or its subsidiaries.</p>
      <p>Not all features are available in all editions or versions of Windows. Systems may require upgraded and/or 
        separately purchased hardware, drivers and/or software to take full advantage of Windows functionality.See </p>
        <p style={{color:'#0199d5'}}>www.microsoft.com</p>
        <p>The following applies to HP systems with Intel Skylake or next-generation silicon chip-based system shipping with Windows 7, Windows 8, Windows 8.1 or
           Windows 10 Pro systems downgraded to Windows 7 Professional,</p>
           <p>Windows 8 Pro, or Windows 8.1: This version of Windows running with the processor or chipsets used in this system has limited support from Microsoft. 
            For more information about Microsoft’s support, please see </p>
            <p>Microsoft's Support Lifecycle FAQ at <span style={{color:'#0199d5'}}>www.support.microsoft.com/lifecycle</span></p>
            <p>In accordance with the <span style={{color:'#0199d5'}}>Microsoft Silicon Support Policy</span>, HP does not support or provide drivers for Windows 8 or Windows 7 on products
               configured with Intel or AMD 7th generation and forward processor</p>
               <p>Covid-19 Disclaimer: We are working to meet the current extraordinary customer demand for our products. Our website reflects current product availability but circumstances are dynamic.
                 You may check your order status</p>
                 <p>via our Track My Order page ( Here ). We will send updates by email as soon as they are available. We greatly value your business and 
                  appreciate your ongoing patience as we work to get your order to you.</p>
                  <p>For HP supplies (inks and toners), disclaimers apply. To know more, please<span style={{color:'#0199d5'}}>click here</span></p>
                  <p>Please note: The product colour and look & feel may vary from the visual representation on the Website. While all efforts are made to check pricing, 
                    product specifications and other errors, inadvertent errors do occur from</p>
                    <p>time to time and HP reserves the right to decline orders arising from such errors. For pen drives, please reach out to 
                      respective manufacturers for any service queries.</p>
                      <p>This e-store is Serviced by Savex Technologies Pvt Ltd. (124, Maker Chambers 3, Nariman Point, Mumbai - 21).</p>
                      <p><FaSpider/> HP employees: Report website issues</p>
      </div>
    </div>
  );
}

export default Footer
