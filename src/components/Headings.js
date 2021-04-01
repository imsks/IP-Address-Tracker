import React from "react";

export const MainHeading = ({ text, className }) => {
  return <h1 className={"heading-main " + className}>{text}</h1>;
};

export const SubHeading = ({ text, className }) => {
  return <h4 className={"heading-sub " + className}>{text}</h4>;
};
