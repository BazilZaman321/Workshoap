// Accordion.jsx

// Step 1: Import React and useState from React
import React, { useState } from 'react'; // React is needed for JSX, useState is a hook to store local state

// Step 2: Create the Accordion component and receive props (title, content)
const Accordion = ({ title, content }) => {
  // Step 3: Create a state variable to track whether the accordion is open or closed
  const [isOpen, setIsOpen] = useState(false); // Initial state is false (closed)

  // Step 4: A function to toggle open/close
  const toggleAccordion = () => {
    setIsOpen(!isOpen); // Flip the state: if true make false, if false make true
  };

  // Step 5: Return JSX to display the UI
  return (
    <div>
      {/* Display the title, and make it clickable. When clicked, toggleAccordion runs */}
      <h3 onClick={toggleAccordion} style={{ cursor: 'pointer' }}>
        {title}
      </h3>

      {/* If isOpen is true, show the content. If false, this line does not render anything */}
      {isOpen && <p>{content}</p>}
    </div>
  );
};

// Step 6: Export the Accordion component so it can be used in App.jsx
export default Accordion;
  