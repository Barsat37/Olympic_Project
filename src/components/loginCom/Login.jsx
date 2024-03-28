import React, { useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../services/Helper';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css'; // Import the CSS file for styling
import Navbar from '../services/navbarCom/Navbar';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Login = ({ switchToRegister }) => {
  // State variables to manage form inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make API request to login endpoint
      const response = await axios.post(`${BASE_URL}/login`, {
        email,
        password
      });

      if (response && response.data) {
        console.log('Login successful:', response.data);

        toast.success('Login successful');
        
        alert('Login successful');
        localStorage.setItem('email', email);
        var role = response.data.role;
        
        if (role === 'admin') {
            navigate('/Dashboard');
        } else if (role === 'user') {
          navigate('/profile');
        } else {
            // Handle unknown roles
            console.error('Unknown role:', role);
            toast.error('Unknown role');
        }
        // You can redirect the user or perform other actions upon successful login
        
      } else {
        // Handle cases where the response or response data is empty
        console.error('Login failed: Empty response');
        toast.error('Login failed: Empty response');
      }
    } catch (error) {
      // Handle login failure, show error message to user, etc.
      var message = error.response.data.message;
        console.log("MESSAGE1",message);
        if(message === 'disable'){
          console.log("MESSAGE",message);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "User has disable contact to admin",
            
          });
        }else{
          console.error('Login failed:', error.response ? error.response.data : error.message);
          toast.error('Login failed: ' + (error.response ? error.response.data : error.message));
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Invalid Password or Username/Email",
            
          });
        }
     
    }
  };

  return (
    <>
    <Navbar/>
    <div className="full_container">
      <div className="Login-container">
        <h2>Account Login</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Username/Email</label>
          <input
            type="text"
            placeholder="Enter username / Email Address"
            id="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            id="password"
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <a href="#">Forget password?</a>
          <button className="login" type="submit">Login</button><br/>
          <button className="backhome" onClick={switchToRegister}><p>Back to home</p></button>
        </form>
      </div>
      </div>
    </>
  );
};

export default Login;
