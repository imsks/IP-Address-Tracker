import React, { useState, useEffect } from "react";
import Auth from "./sections/Auth";
import IPTracker from "./sections/IPTracker";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <main className="ipaddressapp">
      <section className="ipaddressapp__container">
        {!isLoggedIn ? <Auth /> : <IPTracker />}
      </section>
    </main>
  );
};

export default App;
