import React, { useState } from "react";
import AppContainer from "./components/AppContainer";
import { useSawo } from "./utils/hooks";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const sawoAuthSuccess = async (payload) => {
    setIsLoggedIn(true);
  };

  useSawo(sawoAuthSuccess);

  return (
    <main className="ipaddressapp">
      <AppContainer isLoggedIn={isLoggedIn} />
    </main>
  );
};

export default App;
