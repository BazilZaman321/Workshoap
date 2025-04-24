import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filteredData } from "../store/productSlice";

const ProductFilter = () => {
  const dispatch = useDispatch();
  const filteredItems = useSelector((state) => state.product.filtered);

  const handleFilter = (category) => {
    dispatch(filteredData(category));
  };

  return (
    <div>

      <div >
        <button
          onClick={() => handleFilter("Electronics")}
          className=" text-black border-2 "
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

      <h3 className="text-xl font-semibold mb-2">Filtered Products:</h3>
      {filteredItems.length > 0 ? (
        <ul className="space-y-2">
          {filteredItems.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No products selected.</p>
      )}
    </div>
  );
};

export default ProductFilter;
