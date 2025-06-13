import React, { useState } from 'react';
import './App.css'; 

function App() {
  const [isOn, setIsOn] = useState(false); 

  const handleToggle = () => {
    setIsOn(!isOn); 
  };

  return (
    <div className="App" style={{ textAlign: 'center', marginTop: '50px' }}>

      <button 
        onClick={handleToggle}
        style={{
          padding: '10px 20px',
          fontSize: '18px',
          backgroundColor: isOn ? 'green' : 'gray',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer'
        }}
      >
        {isOn ? 'mm' : 'OFF'}
      </button>
    </div>
  );
}

// import React from 'react'

// function App() {
//   return (
//     <div>App</div>
//   )
// }

// export default App
export default App;
