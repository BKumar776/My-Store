import React from 'react'
import { Link,useNavigate} from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import {SiHomeassistantcommunitystore} from 'react-icons/si'

import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';



const Header = () => {
  const auth = localStorage.getItem('user');
  const navigate = useNavigate();
  const logout = () => {
      localStorage.clear();
      navigate('/signup')
  }

  const {cart}=useSelector((state)=>state.allCart)
  return (
    <nav>
        <h1><SiHomeassistantcommunitystore/>  My Store</h1>
        <main>
            <HashLink to="/#home">Home</HashLink>
            <HashLink to="/#about">About</HashLink>
            <Link to="/menu">Menu</Link>
            <Link to="/contact">ContactUs</Link>
            <HashLink to="/#brands">Brands</HashLink>
            
            {
              auth ? <>
              <Link to="/" onClick={logout}>Logout ({JSON.parse(auth).name})</Link>
              <Link to='/cart'>
              <IconButton aria-label="cart" sx={{padding:'0px'}}>
               <Badge badgeContent={cart.length} color="secondary">
                <ShoppingCartIcon />
               </Badge>
              </IconButton> 
              </Link>
             </>:
             <>
             <Link to="/login">LogIn</Link>
            <Link to="/signup">SignUp</Link> </>

            }
            
            
        </main>

    </nav>
  )
}

export default Header

