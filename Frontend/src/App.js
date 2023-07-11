import { BrowserRouter,Routes,Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home.jsx"
import ContactUs from "./components/ContactUs"
import Login from "./components/Login";
import Signup from "./components/Signup";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import PrivateComponent from "./components/PrivateComponent";
import Cart from "./components/Cart";

import "./styles/App.css"
import "./styles/Header.css"
import "./styles/Home.css"
import "./styles/Footer.css"
import "./styles/Contact.css"
import "./styles/loginpage.css"
import "./styles/signuppage.css"
import "./styles/Menu.css"
import "./styles/Cart.css"
import "./styles/MediaQuery.css"




function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>

      <Route path="/" element={<Home/>}></Route>
      
      <Route element={<PrivateComponent/>}>
      
      <Route path="/contact" element={<ContactUs/>}></Route>
      <Route path="/menu" element={<Menu/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
      </Route>

      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
     
  );
}

export default App;
