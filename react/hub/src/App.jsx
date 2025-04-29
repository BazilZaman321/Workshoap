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

import { BrowserRouter, Routes, Route } from "react-router-dom";
import UsersList from "./UserList";
import UserDetails from "./UserDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UsersList />} />
        <Route path="/user/:id" element={<UserDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


 