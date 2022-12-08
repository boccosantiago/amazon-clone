import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { StateProvider } from "./providers/StateProvider";
import { SearchProvider } from "./providers/searchProvider";
import "./index.css";
import reducer, { initialState } from "./reducer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <SearchProvider>
        <App />
      </SearchProvider>
    </StateProvider>
  </React.StrictMode>
);
