import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setClickedText } from './store/buttonSlice'

function App() {
  const dispatch = useDispatch()
  const clickedText = useSelector((state) => state.button.clickedText)

  const handleClick = (text) => {
    dispatch(setClickedText(text))
  }

  return (
    <div className="p-4 text-center">
      <button
        onClick={() => handleClick('Button 1')}
        className="px-4 py-2 bg-blue-500 text-white rounded m-2"
      >
        Button 1
      </button>
      <button
        onClick={() => handleClick('Button 2')}
        className="px-4 py-2 bg-green-500 text-white rounded m-2"
      >
        Button 2
      </button>
      <button
        onClick={() => handleClick('Button 3')}
        className="px-4 py-2 bg-red-500 text-white rounded m-2"
      >
        Button 3
      </button>

      {clickedText && (
        <p className="mt-4 text-xl font-semibold">You clicked: {clickedText}</p>
      )}
    </div>
  )
}

export default App
