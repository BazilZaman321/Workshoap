// Importing React and useState hook to use state in our component
import React, { useState } from 'react';

// Importing Formik and its components
import { Formik, Form, Field } from 'formik';

// Importing icons to show/hide password
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const LoginForm = () => {
  // This is a piece of state to track whether password is visible
  const [showPassword, setShowPassword] = useState(false); 
  // false means password is hidden

  return (
    // Main outer container with border and spacing using inline CSS
    <div style={{ maxWidth: '400px', margin: '40px auto', padding: '20px', border: '1px solid black' }}>
      
      {/* Simple title */}
      <h2 style={{ textAlign: 'center' }}>Login</h2>

      {/* Formik manages form state */}
      <Formik
        initialValues={{ email: '', password: '' }} // Starting values for form
        onSubmit={(values) => {                      // What to do when form is submitted
          console.log(values); // Shows the form values in the console
        }}
      >

        {/* Render function for Formik's UI */}
        {() => (
          // This replaces the normal <form> tag
          <Form>
            {/* Email Field */}
            <div style={{ marginBottom: '15px' }}>
              <label>Email</label><br />
              <Field
                type="email" // This is an input of type email
                name="email" // This matches the key in initialValues
                style={{
                  width: '100%',     // Full width of the container
                  padding: '5px',    // Inner spacing
                  border: '1px solid black' // Basic black border
                }}
              />
            </div>

            {/* Password Field with eye toggle */}
            <div style={{ marginBottom: '15px' }}>
              <label>Password</label><br />

              <div style={{ position: 'relative' }}>
                <Field
                  type={showPassword ? 'text' : 'password'} // If showPassword is true, show as text
                  name="password"
                  style={{
                    width: '100%',
                    padding: '5px',
                    border: '1px solid black',
                    paddingRight: '30px' // Extra space for the eye icon
                  }}
                />

                {/* This span holds the icon that toggles visibility */}
                <span
                  onClick={() => setShowPassword(!showPassword)} // Flip the value on click
                  style={{
                    position: 'absolute',         // Places icon inside the input
                    right: '10px',                // Pushes it to the right
                    top: '50%',                   // Moves to middle height-wise
                    transform: 'translateY(-50%)', // Center vertically
                    cursor: 'pointer'              // Changes cursor to hand
                  }}
                >
                  {/* Show FaEye if hidden, FaEyeSlash if shown */}
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit" // Button type submit triggers Formik's onSubmit
              style={{
                width: '100%',
                padding: '8px',
                border: '1px solid black'
              }}
            >
              Login
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm; // So we can use this component elsewhere
