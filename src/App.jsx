import { useState,createContext } from 'react'
import { Route,Routes,NavLink,useNavigate } from 'react-router-dom';
import Home from './component/Home'
import './App.css'
import Loginpage from './component/Loginpage'
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './component/Register';
import Product from './component/Product';
import About from './component/About';
import Profile from './component/Profile';
import Cart from './component/Cart';
import profile from './assets/user.png'
import logo from './assets/cart.png'
import { Button, Container, Navbar, Nav,Image } from "react-bootstrap";
import Addproduct from './component/subcomponnt/Addproduct';
import { createContext } from 'react';


export const Countcart = createContext()

function App() {
  const [crtcount,setCart] = useState(0)
  const navigate = useNavigate()
  var logout = 'Login'
  if(localStorage.getItem('lgnbtn')){
   logout = localStorage.getItem('lgnbtn')
  }else{
   logout = 'Login'
  }
 

//  const click = () => {
//   if(localStorage.getItem('login')){
//     localStorage.clear();
//   window.location.reload()
//   } 
// }

  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
     <Container>
    <Navbar.Brand >
              <h2 className="fs-1 p-2 ">Furny Home</h2>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto" > </Nav>
            <Nav className="mainoption">
            <NavLink to="/"> Home</NavLink>
            <NavLink to="/product"> Product</NavLink>
                
                <NavLink to="/register"> Register</NavLink>
                <NavLink to="/about"> About</NavLink>
                <NavLink to="/profile">
                  Profile
                  <Image src={profile} alt="profile" height={20} width={20} />
                </NavLink>
                {/* <Countcart   */}
                <NavLink to="/cart">Cart
                <img src={logo} alt="cart" width={25} height={25} srcset="" />
                {crtcount}
                </NavLink>
                
                <NavLink>
                  <Button  variant='outline-secondary'
                    onClick={()=>{
                      if(localStorage.getItem('login')){
                        localStorage.clear()
                        
                        navigate('/')
                      }
                    }}
                    size="sm"
                    className="logout"
                    >
                    <div className='login-btn'>
                    <NavLink to="/login"> {logout}</NavLink>
                  </div>
                  </Button>
                  </NavLink>
            </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
    
      {/* <Home /> */}
    
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Loginpage/>} />
      <Route path='/register' element={<Register/>}/>
      <Route path='/product' element={<Product />} />
      <Route path='/about' element = {<About/>}/>
      <Route path='/profile' element={<Profile />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/addproduct' element={<Addproduct/>}/>
      <Route path='/cart' element={<Cart/>} />
    </Routes>
  
    </>
  )
}

export default App
