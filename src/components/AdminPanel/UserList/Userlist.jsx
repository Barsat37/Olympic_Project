import React, { useState, useEffect } from 'react';
import "./userlist.css"
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../services/Helper';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2';



const Userlist = () => {
    const [users, setUsers] = useState([]);

    const navigate = useNavigate();
    useEffect(() => {
        const fetchUsers = async () => {
          try {
            const response = await axios.get(`${BASE_URL}/all`);
            if (response && response.data) {
              console.log("Response",response.data);
                setUsers(response.data);
            } else {
              console.error('Failed to fetch users: Empty response');
            }
          } catch (error) {
            console.error('Failed to fetch users:', error.response ? error.response.data : error.message);
            toast.error('Failed to fetch users: ' + (error.response ? error.response.data : error.message));
          }
        };
    
        fetchUsers();
      }, []); // Empty dependency array ensures this effect runs only once on component mount
    
    
  const handleLogout = async () => {
    try {
      const response = await axios.post(`${BASE_URL}/logout`);

      if (response && response.data) {
        console.log('Logout successful:', response.data);
        toast.success('Logout successful');
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "You have been successfully logout",
          showConfirmButton: false,
          timer: 1500
        });
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
  const handleDelete = async (userId) => {
    try {
      await axios.delete(`${BASE_URL}/${userId}`);
      // If deletion succeeds, you might want to update the user list to reflect the changes
      setUsers(users.filter(user => user.id !== userId));
      console.log('User deleted successfully');
      Swal.fire("User deleted successfully!");
    //   fetchUsers();
    window.location.reload();
    } catch (error) {
      console.error('Failed to delete user:', error.response ? error.response.data : error.message);
    }
  };
  const handleDisable = async (userId,active) => {
    try {
      await axios.post(`${BASE_URL}/disable/${userId}`);
      
      console.log("active",active);
    if (active === true) {
      Swal.fire("User disable successfully!");
    } else   {
      Swal.fire("User Enable successfully!");
    }
      // If deletion succeeds, you might want to update the user list to reflect the changes
      setUsers(users.filter(user => user.id !== userId));
      console.log('User disable successfully');
     
     
    //   fetchUsers();
     window.location.reload();
    } catch (error) {
      console.error('Failed to delete user:', error.response ? error.response.data : error.message);
    }
  };
  return (

    <>
    
    <div className="hole-dashboard">
        
        <div className="user-dashboard">
            <div className="admin-image">
                <img  className="user"  src="images/b-letter.svg" alt="user profile" onclick="toggleMenu()"/> 
            </div>
            <p className="naamee">Barsat K C</p>
            <p className="super-admin"> Super Admin</p>
            <div className="dashboard-buttons">
            <button className="dashboard-button">Dashboard</button><br/>
            <button onClick={handleLogout} className="logout-button">Logout</button><br/>
        </div>
        {/* <button  onClick={handleLogout} className='btn1'>
        Log Out
        </button> */}
        </div>
    <div className="user-detail">
        <div className="dashboard-navbar">
            <p className="dashboard-funolympic"> 
                <div className="hero01">
                    <p className="fu"><span id="i1">Fu</span><span id="i2">nO</span><span id="i3">ly</span><span id="i4">mp</span><span id="i5">ic</span></p>
                <img src="images/logo_color (2).svg" alt="logo" />
            </div>
            </p>
        </div>
    
        <div className="search-container">
            <p className="list-of-users"> Lists of Users</p>
            <div className="searchh">
           
        </div>
        </div>
    <table>
        <thead>
            <tr>
                <th>S.N</th>
                <th>Name</th>
                <th>Email</th>
                <th>Country</th>
                <th>Phone No</th>
                <th>Password</th>
                <th>Role</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
        {users.map((user, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.country}</td>
                  <td>{user.contactNumber}</td>
                  <td>{user.password}</td>
                  <td>{user.role}</td>
                  <td className="action">
                  <button
  onClick={() => handleDisable(user.userId,user.active)}
  className={ `${user.active ? 'enable-button' : 'disable-button'}`}
>
  {user.active ? "Active" : "Disable"}
</button>  
 <button onClick={() => handleDelete(user.userId)} className="delete-btn">Delete</button>
                  </td>
                </tr>
              ))}

            
            
        </tbody>
    </table>
    </div>
    </div>
    
    <div className="admin-foter">
      <p className='admin-footer'>
      Copyright 2024. All rights reserved
      </p>
    </div>
    </>
  )
}

export default Userlist;