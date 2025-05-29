// import React from "react";
// import ProductFilter from "./component/productFilter";

// const App = () => {
//   return (
//     <div>
//       <h1>Product Filter</h1>
//       <ProductFilter />
//     </div>
//   );
// };

// export default App;


// 1. Import the useState hook from React
import { useState } from 'react';

// 2. Create your functional component
function App() {

  // 3. Write the data (accordion content)
  const accordionData = [
    { title: "What is HTML?", content: "HTML is the structure of a webpage." },
    { title: "What is CSS?", content: "CSS styles the HTML elements." },
    { title: "What is JavaScript?", content: "JavaScript adds interactivity to webpages." }
  ];

  // 4. Add state to track which accordion is open
  const [openIndex, setOpenIndex] = useState(null);

  // 5. Write the function to handle opening/closing
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // 6. Write the JSX to render the accordion
  return (
    <div>
      <h2>Simple Accordion</h2>

      {accordionData.map((item, index) => (
        <div key={index}>
          {/* Accordion title - clickable */}
          <div onClick={() => toggleAccordion(index)}>
            {item.title}
          </div>

          {/* Accordion content - show only if it's open */}
          {openIndex === index && (
            <div>
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// 7. Export the component so it can be used in other files
export default App;
