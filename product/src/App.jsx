// Importing React and our ProductFilter component
import React from "react";
import ProductFilter from "./component/productFilter";

const App = () => {
  return (
    <div>
      <h1>Product Filter</h1>
      {/* Rendering our filter component */}
      <ProductFilter />
    </div>
  );
};

export default App;
