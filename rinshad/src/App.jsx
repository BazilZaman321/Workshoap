import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setColor } from './redux/colorSlice';


function App() {
  const colored = useSelector((state) => state.colorslice.colors);
  const dispatch = useDispatch();
  return (
    <>
    <div className={`${colored? "bg-amber-700" : "bg-blue-800"} h-20 w-12`} onClick={() => dispatch(setColor())} ></div>
    </>
  )
}

export default App