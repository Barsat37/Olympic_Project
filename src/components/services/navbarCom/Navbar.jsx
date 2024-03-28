import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
    <div className="hero0">
        <div className="hero01">
            <p><span id="i1">Fu</span><span id="i2">nO</span><span id="i3">ly</span><span id="i4">mp</span><span id="i5">ic</span></p>
        <img src="images/logo_color (2).svg" alt="logo" />
        
    </div>
        <div className="bt">
            <button className="btn2">
           
            <select id="language">
                <option value="volvo" selected>English</option>
                <option value="saab" >Français</option>
                <option value="opel">Italiano</option>
                <option value="audi">日本語</option>
                <option value="audi">हिन्दी</option>
                <option value="audi">العربية</option>
                <option value="audi">한국어</option>
              </select>
        </button></div>
        
</div>
    <div className="hero">
        <div className="hero1">
        <img src="images/logo.png" alt="logo" className="img" />
        
    </div>
     <nav className="navbar">
        
        <ul>
            <Link to="/"><li><a href="#" > Home</a></li> </Link>
            <li><a href="#" id="home">Live Games</a></li>
            <li><a href="#"> About Us</a></li>
            <li><a href="#">Blog</a></li>
           <Link to= "/schedule"><li><a href="#"> Schedule</a></li></Link>
            
            
        </ul>
        <div className='up'>  
         <Link to="/Login"><button className="btn1">Login</button> </Link>
        <Link  to="/Register"> <button className="btn1">Sign Up</button></Link>
        </div>
      
      
    </nav>
</div>
    </>
  )
}

export default Navbar;