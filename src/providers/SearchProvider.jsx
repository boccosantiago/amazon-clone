import React from "react";
import { useState, useContext } from "react";

const searchContext = React.createContext();

export function useSearchContext() {
  return useContext(searchContext);
}

export function SearchProvider({ children }) {
  const [query, setQuery] = useState("");

  return (
    <searchContext.Provider value={{ query, setQuery }}>
      {children}
    </searchContext.Provider>
  );
}
