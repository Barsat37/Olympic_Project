import React, { useState } from 'react';
import axios from 'axios';
import './ChangePasswordForm.css';

const ChangePasswordForm = ({ onClose }) => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const email = localStorage.getItem('email'); // Retrieve email from localStorage
console.log("Email",email);
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'oldPassword') setOldPassword(value);
    else if (name === 'newPassword') setNewPassword(value);
    else if (name === 'confirmPassword') setConfirmPassword(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if new password and confirm password match
    if (newPassword !== confirmPassword) {
      console.log('New password and confirm password do not match');
      return;
    }

    try {
      // Send a PUT request to update the password
      
      const response = await axios.put(`${BASE_URL}/changePassword`, {
        email: email, // Use email retrieved from localStorage
        oldPassword: oldPassword,
        newPassword: newPassword
      });

      console.log(response.data); // Log the response from the server
      console.log('Password updated successfully');
      Swal.fire({
        position: "top-left",
        icon: "success",
        title: " Password Changed  Successfully",
        showConfirmButton: false,
        timer: 3000
      });
      onClose();
    } catch (error) {
      console.error('Failed to update password:', error.message);
      // Handle error appropriately, such as displaying an error message to the user
    }
  };

  return (
    <div className="change-password-form">
      <form onSubmit={handleSubmit}>
        <h2>Change Password</h2>
        <label>
          Old Password:
          <input
            type="password"
            name="oldPassword"
            value={oldPassword}
            onChange={handleChange}
          />
        </label>
        <label>
          New Password:
          <input
            type="password"
            name="newPassword"
            value={newPassword}
            onChange={handleChange}
          />
        </label>
        <label>
          Confirm New Password:
          <input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Update Password</button>
      </form>
    </div>
  );
};

export default ChangePasswordForm;
