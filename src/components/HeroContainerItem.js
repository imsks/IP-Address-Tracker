import React from "react";
import { MainHeading, SubHeading } from "./Headings";

const HeroContainerItem = ({ subHeadingText, headingText }) => {
  return (
    <div className="ipaddressapp__container__tracker__hero__container__item">
      <SubHeading
        text={subHeadingText}
        className="ipaddressapp__container__tracker__hero__container__item__subheading"
      />
      <MainHeading
        text={headingText}
        className="ipaddressapp__container__tracker__hero__container__item__heading"
      />
    </div>
  );
};

export default HeroContainerItem;
