import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Importing Provider to give Redux access to the whole app
import { Provider } from "react-redux";
import store from "./store/store"; // Importing our store

// Rendering the App component inside Provider
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
