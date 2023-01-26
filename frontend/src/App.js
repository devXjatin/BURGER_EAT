import {Route, BrowserRouter as Router, Routes} from "react-router-dom"
import Home from "./components/home/Home"
import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"
import Contact from "./components/contact/Contact"
import Cart from "./components/cart/Cart"
import Order from "./components/cart/Order"
import "./styles/App.scss"
import "./styles/Header.scss"
import "./styles/Home.scss"
import "./styles/Founder.scss"
import "./styles/Menu.scss"
import "./styles/Footer.scss"
import "./styles/Contact.scss"
import "./styles/Cart.scss"
import "./styles/Order.scss"


function App() {
  return (
   <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/order" element={<Order/>}/>
    </Routes>
    <Footer/>
   </Router>
  );
}

export default App;
