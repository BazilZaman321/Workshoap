// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { setColor } from './redux/colorSlice';


// function App() {
//   const colored = useSelector((state) => state.colorslice.colors);
//   const dispatch = useDispatch();
//   return (
//     <>
//     <div className={`${colored? "bg-amber-700" : "bg-blue-800"} h-20 w-12`} onClick={() => dispatch(setColor())} ></div>
//     </>
//   )
// }

// export default App






// // App.jsx
// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { increment, decrement, reset } from "./redux/counterSlice";


// function App() {
//   const count = useSelector((state) => state.counter.value);
//   const dispatch = useDispatch();

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h1>Count: {count}</h1>
//       <button onClick={() => dispatch(increment())}>➕ Increment</button>
//       <button onClick={() => dispatch(decrement())}>➖ Decrement</button>
//       <button onClick={() => dispatch(reset())}>🔁 Reset</button>
//     </div>
//   );
// }

// export default App;


import React, {useReducer}from "react";


function reducer(state,action) {
  if(action.type==='increment'){
    return{ count:state.count +1};
  }
   if(action.type==='decrement'){
    return{ count:state.count -1};
   }
    return state;
  }

function Counter() {
  const inistate ={count :0};
  const [state , dispatch]=useReducer(reducer , inistate);
  return(
    <div>
      <h2>count:{state.count}</h2>
      <button onClick={()=>dispatch({type:'increment'})}>increse</button>
      <button onClick={()=>dispatch({type:'decrement'})}>decrese</button>

    </div>

  )

};

export default Counter;