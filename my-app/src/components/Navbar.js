import React,{useState,useEffect} from 'react'
import {Link} from "react-router-dom";
import Hamburger from "hamburger-react";
import { Button } from './Button';
import "./Navbar.css"

function Navbar(){
const [click,setclick]= useState(false);
const [button,setButton] = useState(true);

const handleClick=()=> setclick(!click);

const closeMobileMenu=()=> setclick(false);

const showButton =()=>{
    if(window.innerWidth<=960){
        setButton(false);
    }
    else{
        setButton(true);
    }
};

useEffect(()=>
    {
        showButton();
    }
,[]);

window.addEventListener('resize',showButton);



  return (
  <>
  <nav className='navbar'>
    <div className="navbar-container">
        <Link to="/" className='navbar-logo' >Khush Patel</Link>
        <div className='menu-icon' onClick={handleClick} >
        <Hamburger color='#fff' />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"} >
         <li className='nav-item'>
            <Link to="/" className='nav-links' onclick={closeMobileMenu}>Home</Link>
         </li>
         <li className='nav-item'>
            <Link to="/products" className='nav-links' onclick={closeMobileMenu}>Products</Link>
         </li>
         <li className='nav-item'>
            <Link to="/services" className='nav-links' onclick={closeMobileMenu}>Services</Link>
         </li>
         <li >
            <Link to="/sign-up" className='nav-links-mobile' onclick={closeMobileMenu}>Sign-up</Link>
         </li>
        </ul>
        {button && <Button>Sign up</Button>} 
    </div>
    </nav>
  </>
  )
}

export default Navbar;
