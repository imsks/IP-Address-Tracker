import React from "react";
import Auth from "../sections/Auth";
import IPTracker from "../sections/IPTracker";

const AppContainer = ({ isLoggedIn }) => {
  return (
    <section className="ipaddressapp__container">
      {!isLoggedIn ? <Auth /> : <IPTracker />}
    </section>
  );
};

export default AppContainer;
