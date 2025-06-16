// Importing React and Redux hooks
import React from "react";
import { useDispatch, useSelector } from "react-redux";

// Importing the action to filter data
import { filteredData } from "../store/productSlice";

const ProductFilter = () => {
  const dispatch = useDispatch(); // To send actions to Redux store
  const filteredItems = useSelector((state) => state.product.filtered); 
  // Getting the filtered products from Redux state

  // Function to handle button click and filter products by category
  const handleFilter = (category) => {
    dispatch(filteredData(category)); // Dispatching action with category
  };

  return (
    <div>
      {/* Buttons to filter by category */}
      <div>
        <button
          onClick={() => handleFilter("Electronics")}
          className="text-black border-2"
        >
          Electronics
        </button>
        <button
          onClick={() => handleFilter("Home Appliances")}
          className="text-black border-2"
        >
          Home Appliances
        </button>
        <button
          onClick={() => handleFilter("Clothing")}
          className="text-black border-2"
        >
          Clothing
        </button>
      </div>

      {/* Display filtered results */}
      <h3 className="text-xl font-semibold mb-2">Filtered Products:</h3>

      {/* If filteredItems is not empty, show products */}
      {filteredItems.length > 0 ? (
        <ul className="space-y-2">
          {filteredItems.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
      ) : (
        // If no items selected
        <p className="text-gray-500">No products selected.</p>
      )}
    </div>
  );
};

export default ProductFilter;
