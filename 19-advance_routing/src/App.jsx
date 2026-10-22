import  Home  from "./pages/home";
import  About  from "./pages/About";
import  Product  from "./pages/product";
import  Contact  from "./pages/Contact";
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"  
import Error from "./pages/Error"  
import {Routes, Route} from "react-router-dom"
import Women from "./pages/Women";
import Men from "./pages/Men";
import Kids from "./pages/Kids";
import DynAbout from "./pages/DynAbout";
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <div className="bg-black h-screen text-white  ">
      <Navbar />
      <Navigation />
      <Routes>
        <Route path="/" element= {<Home/>} />
        <Route path="/about" element= {<About/>} />
        <Route path="/about/:id" element= {<DynAbout/>} />
        <Route path="/contact" element= {<Contact/>} />
        <Route path="/product" element= {<Product/>}>
          <Route path="men" element= {<Men />} />
          <Route path="women" element= {<Women />} />
          <Route path="kids" element= {<Kids />} />
        </Route>
        <Route path="*" element= {<Error/>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
