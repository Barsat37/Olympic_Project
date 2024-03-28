import React, { useState } from 'react';
import "./register.css";
import { BASE_URL } from '../services/Helper'; // Import BASE_URL from your helper file
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

const Register = () => {
    const navigate = useNavigate();
    const [formInput, setFormInput] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        successMsg: "",
        name: "",
        contactNumber: "",
        country: "",
    });

    const [formError, setFormError] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        name: "",
        contactNumber: "",
        country: "",
    });

    const handleUserInput = (name, value) => {
        setFormInput({
            ...formInput,
            [name]: value,
        });
    };

    const validateFormInput = async (event) => {
        event.preventDefault();

        let inputError = {
            email: "",
            password: "",
            confirmPassword: "",
            name: "",
            contactNumber: "",
            country: "",
        };

        // Check for empty fields
        if (!formInput.name || !formInput.email || !formInput.contactNumber || !formInput.password || !formInput.country) {
            setFormError({
                ...inputError,
                email: formInput.email ? "" : "Enter a valid email address",
                password: formInput.password ? "" : "Password should not be empty",
                name: formInput.name ? "" : "Enter your name",
                country: formInput.country ? "" : "Enter a country name",
                contactNumber: formInput.contactNumber ? "" : "Enter your contact number"
            });
            setFormInput((prevState) => ({
                ...prevState,
                successMsg: "",
            }));
            return;
        }

        // Check if email is valid
        if (!/\S+@\S+\.\S+/.test(formInput.email)) {
            setFormError({
                ...inputError,
                email: "Enter a valid email address",
            });
            setFormInput((prevState) => ({
                ...prevState,
                successMsg: "",
            }));
            return;
        }

        // Check if password is empty
        if (!formInput.password) {
            setFormError({
                ...inputError,
                password: 'Password should not be empty'
            });
            setFormInput((prevState) => ({
                ...prevState,
                successMsg: "",
            }));
            return;
        }

        // Check if passwords match
        if (formInput.confirmPassword !== formInput.password) {
            setFormError({
                ...inputError,
                confirmPassword: "Passwords do not match"
            });
            setFormInput((prevState) => ({
                ...prevState,
                successMsg: "",
            }));
            return;
        }

        // Clear any previous errors and show success message
        setFormError(inputError);
        setFormInput((prevState) => ({
            ...prevState,
            successMsg: "You have successfully registered",
        }));

        // Make the API call to register the user
        try {
            const response = await fetch(`${BASE_URL}/registration`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formInput)
            });

            if (response.ok) {
                // Registration successful
                toast.success('Registration successful');
                setFormInput({
                    email: "",
                    password: "",
                    confirmPassword: "",
                    successMsg: "Registration successful",
                    name: "",
                    contactNumber: "",
                    country: "",
                });
                setFormError({
                    email: "",
                    password: "",
                    confirmPassword: "",
                    name: "",
                    contactNumber: "",
                    country: "",
                });
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Registered Successfully",
                    showConfirmButton: false,
                    timer: 3000
                  });
                navigate('/Login');

            }

            else {
                // Registration failed
                toast.error('Registration failed');
                const data = await response.json();
                console.error(data.error); // Log the error message
            }
        } catch (error) {
            toast.error('Error: ' + error.message);
            // Handle network errors or other exceptions
        }
    };

    return (
        <>
            <div className='first'>
                <div className="container">
                    <div className="card">
                        <div className="card-header">
                            <h4 className='title'>User Registration</h4>
                        </div>
                        <div className="card-body">
                            <form onSubmit={validateFormInput}>
                                {/* Form inputs */}
                                <p className="label">Name</p>
                                <input
                                    value={formInput.name}
                                    onChange={({ target }) => { handleUserInput(target.name, target.value) }}
                                    name="name"
                                    type="text"
                                    autoComplete="off"
                                    className="input"
                                    placeholder="Enter name" />
                                <p className="error-message">{formError.name}</p>

                                {/* Email */}
                                <p className="label">Email</p>
                                <input
                                    value={formInput.email}
                                    onChange={({ target }) => { handleUserInput(target.name, target.value) }}
                                    name="email"
                                    type="text"
                                    autoComplete="off"
                                    className="input"
                                    placeholder="Enter email" />
                                <p className="error-message">{formError.email}</p>

                                {/* Contact Number */}
                                <p className="label">Contact Number</p>
                                <input
                                    value={formInput.contactNumber}
                                    onChange={({ target }) => { handleUserInput(target.name, target.value) }}
                                    name="contactNumber"
                                    type="text"
                                    autoComplete="off"
                                    className="input"
                                    placeholder="Enter contact number" />
                                <p className="error-message">{formError.contactNumber}</p>

                                {/* Password */}
                                <p className="label">Password</p>
                                <input
                                    value={formInput.password}
                                    onChange={({ target }) => { handleUserInput(target.name, target.value) }}
                                    name="password"
                                    type="password"
                                    autoComplete="off"
                                    className="input"
                                    placeholder="Enter password" />
                                <p className="error-message">{formError.password}</p>

                                {/* Confirm Password */}
                                <p className="label">Confirm Password</p>
                                <input
                                    value={formInput.confirmPassword}
                                    onChange={({ target }) => { handleUserInput(target.name, target.value) }}
                                    name="confirmPassword"
                                    type="password"
                                    autoComplete="off"
                                    className="input"
                                    placeholder="Confirm password" />
                                <p className="error-message">{formError.confirmPassword}</p>

                                {/* Country */}
                                <p className="label">Country</p>
                                <input
                                    value={formInput.country}
                                    onChange={({ target }) => { handleUserInput(target.name, target.value) }}
                                    name="country"
                                    type="text"
                                    autoComplete="off"
                                    className="input"
                                    placeholder="Enter country" />
                                <p className="error-message">{formError.country}</p>

                                {/* Submit Button */}
                                <input type="submit" className="btnn" value="Submit" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    );
};

export default Register;
