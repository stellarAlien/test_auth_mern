// Import the 'React' library, which is necessary for JSX syntax
import React from "react";

// Import the 'ReactDOM' library specifically from "react-dom/client"
import ReactDOM from "react-dom/client";

// Import the main application component, 'App', from the "./App" file
import App from "./App";

// Import the styles defined in the "./index.scss" file
import "./index.scss";

// Import the Redux store from "./store/store"
import { store } from "./store/store";

// Import the 'Provider' component from "react-redux"
import { Provider } from "react-redux";

// Create a root element for rendering the React application and specify the 'root' element by its id
// This uses the experimental 'createRoot' method from 'ReactDOM'
ReactDOM.createRoot(document.getElementById("root")).render(
    // Wrap the entire application in a 'Provider' component to provide access to the Redux store
    <Provider store={store}>
        {/* Render the main 'App' component. */}
        <App />
    </Provider>
);
