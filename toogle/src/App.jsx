// // App.jsx

// // Step 1: Import React (required for JSX)
// import React from 'react';

// // Step 2: Import the Accordion component we created
// import Accordion from './Accordion';

// // Step 3: Create the main App component
// const App = () => {
//   return (
//     <div>
//       {/* Heading for the app */}
//       <h1>My Accordion</h1>

//       {/* Step 4: Use the Accordion component multiple times with different props */}
//       {/* title and content are passed to Accordion as props */}
//       <Accordion title="Section 1" content="This is the content of section 1." />
//       <Accordion title="Section 2" content="This is the content of section 2." />
//       <Accordion title="Section 3" content="This is the content of section 3." />
//     </div>
//   );
// };

// // Step 5: Export App so we can render it from main.jsx
// export default App;




////////////////////////////////////////////////////////////////////////////////


// 1. Import useState from React to manage state (open/close behavior)
import { useState } from 'react';

// 2. Define your component named App
function App() {

  // 3. Your accordion content: An array (list) of objects
  // Each object has a title (question) and content (answer)
  const accordionData = [
    { title: "What is HTML?", content: "HTML is the structure of a webpage." },
    { title: "What is CSS?", content: "CSS styles the HTML elements." },
    { title: "What is JavaScript?", content: "JavaScript adds interactivity to webpages." }
  ];

  // 4. Create state to keep track of the currently open accordion
  // openIndex is initially null, which means no item is open at first
  const [openIndex, setOpenIndex] = useState(null);

  // 5. This function runs when you click an accordion title
  const toggleAccordion = (index) => {
    // If you click the already open item, close it (set to null)
    // Otherwise, open the new one (set to its index)
    setOpenIndex(openIndex === index ? null : index);
  };

  // 6. Return the JSX to render your UI
  return (
    <div>
      {/* Heading of the accordion section */}
      <h2>Simple Accordion</h2>

      {/* 7. Loop through each item in accordionData using map() */}
      {accordionData.map((item, index) => (
        // 8. A wrapper for each accordion block
        <div
          key={index} // Unique key required by React
          style={{
            border: "1px solid black",    // Adds border around item
            marginBottom: "8px",          // Adds space below each item
            padding: "6px"                // Adds inner spacing
          }}
        >

          {/* 9. The clickable title (question part) */}
          <div
            onClick={() => toggleAccordion(index)} // Run toggle function when clicked
            style={{ cursor: "pointer", fontWeight: "bold" }} // Makes it look clickable
          >
            {item.title} {/* Show the title text */}
          </div>

          {/* 10. Show the content (answer) ONLY if this item is currently open */}
          {openIndex === index && (
            <div style={{ marginTop: "6px" }}>
              {item.content} {/* Show the answer text */}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// 11. Export the App component so it can be used in index.js or elsewhere
export default App;

