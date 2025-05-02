// import React from 'react'
                                        //// list and key
// function Fruit() {
//     const items = ["🍎 Apple", "🍌 Banana", "🍇 Grapes"];
//     return (
//     <div>
//         {items.map((Fruit,index)=>(
//             <p key={index}>
//                 {Fruit}
//             </p>
//         ))}
//     </div>
//   )
// }

// export default Fruit

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import UsersList from "./UserList";
// import UserDetails from "./UserDetails";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<UsersList />} />
//         <Route path="/user/:id" element={<UserDetails />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;






/////////////////////////////////////////////////////////////////////////////////////////////////////////////


// import React, { useState, useRef } from 'react';

// const TimerComponent = () => {
//   const [time, setTime] = useState(0); // Time starts from 0
//   const intervalRef = useRef(null); // Store interval ID to stop it later

//   // Function to start the timer (incrementing every second)
//   const startTimer = () => {
//     if (intervalRef.current) return; // Prevent starting a new interval if already running

//     intervalRef.current = setInterval(() => {
//       setTime((prevTime) => prevTime + 1); // Increment time by 1 every second
//     }, 1000); // 1 second interval
//   };

//   // Function to stop the timer
//   const stopTimer = () => {
//     clearInterval(intervalRef.current); // Stop the interval
//     intervalRef.current = null; // Reset intervalRef
//   };

//   // Function to reset the timer
//   const resetTimer = () => {
//     setTime(0); // Reset the time to 0
//     clearInterval(intervalRef.current); // Stop any running interval
//     intervalRef.current = null; // Reset intervalRef
//   };

//   return (
//     <div className="flex justify-center items-center h-screen">
//       <div className="text-center">
//         <h1 className="text-xl mb-4">Timer</h1>
        
//         <div className="text-4xl mb-4">{time} seconds</div>

//         <div>
//           <button
//             onClick={startTimer}
//             className="bg-green-500 text-white px-4 py-2 rounded m-2"
//           >
//             Start
//           </button>
//           <button
//             onClick={stopTimer}
//             className="bg-red-500 text-white px-4 py-2 rounded m-2"
//           >
//             Stop
//           </button>
//           <button
//             onClick={resetTimer}
//             className="bg-gray-500 text-white px-4 py-2 rounded m-2"
//           >
//             Reset
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TimerComponent;




//////////////////////////////////////////////////////////////////////////////////////

import React, { useEffect, useState } from "react";

function UserList() {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);

  useEffect(() => {
    // Replace this with your actual API link
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleNameClick = (id) => {
    setSelectedUserId(id === selectedUserId ? null : id);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">User List</h2>
      {users.map((user) => (
        <div
          key={user.id}
          className="mb-4 p-4 border rounded shadow cursor-pointer"
        >
          <p
            className="font-medium text-blue-600"
            onClick={() => handleNameClick(user.id)}
          >
            {user.name}
          </p>

          {selectedUserId === user.id && (
            <div className="mt-2 text-sm text-gray-700">
              <p>Email: {user.email}</p>
              <p>
                Address: {user.address.street}, {user.address.city}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default UserList;
