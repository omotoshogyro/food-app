import React, { useState, createContext } from "react";

export const GlobalProvider = createContext();

const name = "Okikiola Omotosho";

function Provider({ children }) {
  const [modal, setModal] = useState(false);

  return (
    <GlobalProvider.Provider value={{ name, modal, setModal }}>
      {children}
    </GlobalProvider.Provider>
  );
}

export default Provider;
