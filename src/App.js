// import Banner from "./Components/Banner/Banner";
// import Blackbox from "./Components/Blackbox/Blackbox";
// import CartList from "./Components/CartList/CartList";
// import Laptops from "./Components/Laptops/Laptops";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar/Navbar";
import Routepage from "./Components/Routepage/Routepage";
// import Navbar_2 from "./Components/Navbar_2/Navbar_2";
// import Navbar_3 from "./Components/Navbar_3/Navbar_3";
// import Footbanner from "./Components/Footbanner/Footbanner";
// import Footer from "./Components/Footer/Footer";




function App() {
  return (
    <div className="App">
     
      {/* <Navbar /> */}
    {/* <Navbar_2 />
    <Navbar_3 />
    <Banner />
    <Laptops />
    <Blackbox />
    <CartList />
    <Footbanner />
    <Footer /> */}
    <Routes>
      <Route path ='/' element = {<Home />} />
      <Route path='/Click' element={<Routepage />} />
    </Routes>
    </div>
  );
}

export default App;
