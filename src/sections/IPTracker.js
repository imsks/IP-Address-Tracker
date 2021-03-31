import React from "react";
import { FormInput, FormSubmitButton } from "../components/Form";
import MainHeading from "../components/Headings";

const IPTracker = () => {
  return (
    <div className="ipaddressapp__container__tracker">
      <MainHeading text="IP Address Tracker" />
      <form className="ipaddressapp__container__form__container form">
        <FormInput type="number" placeholder="Search for an IP address" />
        <FormSubmitButton />
      </form>
    </div>
  );
};

export default IPTracker;
