import  Home  from "./pages/Home";
import  About  from "./pages/About";
import  Product  from "./pages/Product";
import  Contact  from "./pages/Contact";
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"  
import Error from "./pages/Error"  
import {Routes, Route} from "react-router-dom"

const App = () => {
  return (
    <div className="bg-black h-screen text-white  ">
      <Navbar />
      <Routes>
        <Route path="/" element= {<Home/>} />
        <Route path="/about" element= {<About/>} />
        <Route path="/contact" element= {<Contact/>} />
        <Route path="/product" element= {<Product/>} />
        <Route path="*" element= {<Error/>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
