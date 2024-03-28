import React, { useState } from 'react';
import "./Navbar2.css";
import { BASE_URL } from '../Helper';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import ChangePasswordForm from './ChangePasswordForm';
import Swal from 'sweetalert2'

const Navbar2 = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await axios.post(`${BASE_URL}/logout`);

      if (response && response.data) {
        console.log('Logout successful:', response.data);
        toast.success('Logout successful');
        alert("Logout Successfully")
       
        Swal.fire("Logout successfully!");
        navigate('/Login'); // Redirect to login page after successful logout
      } else {
        console.error('Logout failed: Empty response');
        toast.error('Logout failed: Empty response');
      }
    } catch (error) {
      console.error('Logout failed:', error.response ? error.response.data : error.message);
      toast.error('Logout failed: ' + (error.response ? error.response.data : error.message));
    }
  };

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  const [showChangePassword, setShowChangePassword] = useState(false);

  const handleUpdatePasswordClick = () => {
    setShowChangePassword(true);
  };

  const handleCloseChangePassword = () => {
    setShowChangePassword(false);
  };

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
              <option value="saab">Français</option>
              <option value="opel">Italiano</option>
              <option value="audi">日本語</option>
              <option value="audi">हिन्दी</option>
              <option value="audi">العربية</option>
              <option value="audi">한국어</option>
            </select>
          </button>
        </div>
      </div>
      <div className="hero">
        <div className="hero1">
          <img src="images/logo_color (2).svg" alt="logo" className="img" />
        </div>
        <nav className="navbar">
          <ul>
            <Link to ="/"><li><a href="#">Home</a></li></Link>
            <Link to ="/watchlive"> <li><a href="#" id="home">Watch Live</a></li></Link>
            <Link to="/aboutus"><li><a href="aboutus.html">About Us</a></li></Link>
           <Link to="/blog"> <li><a href="#">Blog</a></li></Link> 
           <li><a href="#"> Schedule</a></li>
          </ul>
          <div className="user-profile">
            <img className="userr" src="images/b-letter.svg" alt="user profile" onClick={handleDropdownToggle} />
           
            <div className="barsat">Bikram K C</div>
            {showDropdown && (
              <div className="dropdown-menu">
                <p className='update-password' onClick={handleUpdatePasswordClick}>Update Password</p>
                {showChangePassword && (
        <ChangePasswordForm onClose={handleCloseChangePassword} />
      )}
              </div>
            )}
          </div>
          <button onClick={handleLogout} className="btn1">Log Out</button>
        </nav>
      </div>
    </>
  )
}

export default Navbar2;
