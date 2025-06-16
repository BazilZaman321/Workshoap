import React, { useState } from 'react'; // React and useState for building and managing component state

const App = () => {
  // Step 1: Create state for input values
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Step 2: Create state for error message
  const [error, setError] = useState('');

  // Step 3: Function to run when form is submitted
  const handleSubmit = (e) => {
    e.preventDefault(); // Stop page from refreshing

    // Step 4: Basic validation checks
    if (name === '' || email === '' || password === '') {
      setError('All fields are required'); // show this if any field is empty
    } else if (!email.includes('@')) {
      setError('Email must include @'); // show this if email is invalid
    } else if (password.length < 6) {
      setError('Password must be at least 6 characters');
    } else {
      alert('Form submitted successfully ✅'); // show alert on success
      setError(''); // clear any previous errors
      setName('');
      setEmail('');
      setPassword('');
    }
  };

  // Step 5: return the UI (JSX)
  return (
    <div>
      <h2>Simple Form</h2>

      {/* Step 6: Display error message if exists */}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* Step 7: The form starts here */}
      <form onSubmit={handleSubmit}>
        {/* Name input */}
        <label>Name:</label><br />
        <input
          type="text" // input is text type
          value={name} // current value
          onChange={(e) => setName(e.target.value)} // update name state on typing
          style={{ border: '1px solid black', padding: '5px', marginBottom: '10px' }}
        /><br /><br />

        {/* Email input */}
        <label>Email:</label><br />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ border: '1px solid black', padding: '5px', marginBottom: '10px' }}
        /><br /><br />

        {/* Password input */}
        <label>Password:</label><br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ border: '1px solid black', padding: '5px', marginBottom: '10px' }}
        /><br /><br />

        {/* Submit button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App; // Exporting the component so it can be used in main.jsx
