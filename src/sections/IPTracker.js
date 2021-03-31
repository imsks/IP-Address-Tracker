import React from "react";
import { FormInput, FormSubmitButton } from "../components/Form";
import MainHeading from "../components/Headings";
import IPTrackerMap from "../components/IPTrackerMap";
import { getIPTrackerResponse } from "../utils/functions";

const IPTracker = () => {
  const ipTrackerResponse = getIPTrackerResponse("8.8.8.8");

  console.log(ipTrackerResponse);

  return (
    <div className="ipaddressapp__container__tracker">
      <MainHeading text="IP Address Tracker" />
      <form className="ipaddressapp__container__form__container form">
        <FormInput type="number" placeholder="Search for an IP address" />
        <FormSubmitButton />
      </form>
      <IPTrackerMap />
    </div>
  );
};

export default IPTracker;
