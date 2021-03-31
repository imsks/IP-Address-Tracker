import React from "react";
import { FormInput, FormSubmitButton } from "../components/Form";
import MainHeading from "../components/Headings";

const Auth = () => {
  return (
    <div className="ipaddressapp__container__auth__form">
      <MainHeading text="IP Address Tracker" />
      <form className="ipaddressapp__container__form__container form">
        <FormInput type="email" placeholder="Enter your email" />
        <FormSubmitButton />
      </form>
    </div>
  );
};

export default Auth;
