import React, { createContext, useEffect, useState } from "react";

export const AppContext = createContext({});

const AppProvider = ({ children }) => {
  const [builderProducts, setBuilderProducts] = useState([]);

  //   useEffect(() => {}, []);

  return (
    <AppContext.Provider value={{ builderProducts, setBuilderProducts }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
