import {Route, BrowserRouter as Router, Routes} from "react-router-dom"
import Home from "./components/home/Home"
import Header from "./components/layout/Header"
import "./styles/App.scss"
import "./styles/Header.scss"
import "./styles/Home.scss"
import "./styles/Founder.scss"
import "./styles/Menu.scss"
import "./styles/Footer.scss"
import Footer from "./components/layout/Footer"


function App() {
  return (
   <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
    <Footer/>
   </Router>
  );
}

export default App;
