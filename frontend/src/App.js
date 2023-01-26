import {Route, BrowserRouter as Router, Routes} from "react-router-dom"
import Home from "./components/home/Home"
import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"
import Contact from "./components/contact/Contact"
import Cart from "./components/cart/Cart"
import Order from "./components/cart/Order"
import PlaceOrder from "./components/cart/PlaceOrder"
import PaymentSuccess from "./components/cart/PaymentSuccess"
import Login from "./components/login/Login"
import Profile from "./components/profile/Profile"
import MyOrders from "./components/myorders/MyOrders"
import OrderDetails from "./components/myorders/OrderDetails"
import Dashboard from "./components/admin/Dashboard"
import "./styles/App.scss"
import "./styles/Header.scss"
import "./styles/Home.scss"
import "./styles/Founder.scss"
import "./styles/Menu.scss"
import "./styles/Footer.scss"
import "./styles/Contact.scss"
import "./styles/Cart.scss"
import "./styles/Shipping.scss"
import "./styles/PlaceOrder.scss"
import "./styles/PaymentSuccess.scss"
import "./styles/Login.scss"
import "./styles/Profile.scss"
import "./styles/Table.scss"
import "./styles/OrderDetails.scss"
import "./styles/Dashboard.scss"


function App() {
  return (
   <Router>
    <Header isAuthenticated={true}/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/Shipping" element={<Order/>}/>
      <Route path="/placeorder" element={<PlaceOrder/>}/>
      <Route path="/paymentsuccess" element={<PaymentSuccess/>}/>
      <Route path="/myorders" element={<MyOrders/>}/>
      <Route path="/order/:id" element={<OrderDetails/>}/>
      <Route path="/admin/dashboard" element={<Dashboard/>}/>
    </Routes>
    <Footer/>
   </Router>
  );
}

export default App;
