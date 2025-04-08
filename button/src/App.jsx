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
        className="px-4 py-2 border border-gray-400 rounded m-2"
      >
        Button 1
      </button>
      <button
        onClick={() => handleClick('Button 2')}
        className="px-4 py-2 border border-gray-400 rounded m-2"
      >
        Button 2
      </button>
      <button
        onClick={() => handleClick('Button 3')}
        className="px-4 py-2 border border-gray-400 rounded m-2"
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



// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { setClickedText } from './store/buttonSlice'

// function App() {
//   const dispatch = useDispatch()
//   const clickedColor = useSelector((state) => state.button.clickedText)

//   const handleClick = (color) => {
//     dispatch(setClickedText(color))
//   }

//   return (
//     <div className="p-4 text-center">
//       <button
//         onClick={() => handleClick('red')}
//         className="px-4 py-2 border border-gray-400 rounded m-2"
//       >
//         Red
//       </button>
//       <button
//         onClick={() => handleClick('blue')}
//         className="px-4 py-2 border border-gray-400 rounded m-2"
//       >
//         Blue
//       </button>
//       <button
//         onClick={() => handleClick('green')}
//         className="px-4 py-2 border border-gray-400 rounded m-2"
//       >
//         Green
//       </button>

//       {clickedColor && (
//         <div
//           className="mx-auto mt-6"
//           style={{
//             backgroundColor: clickedColor,
//             width: '100px',
//             height: '100px',
//             borderRadius: '8px',
//           }}
//         ></div>
//       )}
//     </div>
//   )
// }

// export default App
