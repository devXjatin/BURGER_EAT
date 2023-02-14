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
import Users from "./components/admin/Users"
import Orders from "./components/admin/Orders"
import About from "./components/about/About"
import NotFound  from "./components/layout/NotFound"
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
import "./styles/About.scss"
import { useEffect } from "react"
import {useDispatch, useSelector} from 'react-redux'
import { loadUser } from "./redux/actions/user"
import toast, {Toaster} from "react-hot-toast"

function App() {

  const dispatch = useDispatch()
  const {error, message, isAuthenticated} = useSelector((state)=>state.auth)

  useEffect(()=>{
    dispatch(loadUser())
  },[dispatch])

  useEffect(() => {
    if(error){
      toast.error(error);
      dispatch({
        type:"clearError"
      })
    }

    //show message
    if(message){
      toast.success(message);
      dispatch({
        type:"clearMessage"
      })
    }
  }, [dispatch, error, message])
  

  return (
   <Router>
    <Header isAuthenticated={isAuthenticated}/>
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
      <Route path="/admin/users" element={<Users/>}/>
      <Route path="/admin/orders" element={<Orders/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    <Footer/>
    <Toaster/>
   </Router>
  );
}

export default App;
