import Navbar from "./Navbar/Navbar";
import Navbar_2 from "./Navbar_2/Navbar_2";
import Navbar_3 from "./Navbar_3/Navbar_3";
import Banner from "./Banner/Banner";
import Laptops from "./Laptops/Laptops";
import Blackbox from "./Blackbox/Blackbox";
import CartList from "./CartList/CartList";
import Footbanner from "./Footbanner/Footbanner";
import Footer from "./Footer/Footer";

function Home() {
  return (
    <div>
       <Navbar />
    <Navbar_2 />
    <Navbar_3 />
    <Banner />
    <Laptops />
    <Blackbox />
    <CartList />
    <Footbanner />
    <Footer />
    </div>
  )
}

export default Home
