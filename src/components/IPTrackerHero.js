import React from "react";
import { MainHeading, SubHeading } from "./Headings";

const IPTrackerHero = ({ ipAddress, location, timezone, isp }) => {
  return (
    <section className="ipaddressapp__container__tracker__hero">
      <div className="ipaddressapp__container__tracker__hero__container">
        <div className="ipaddressapp__container__tracker__hero__container__item">
          <SubHeading
            text="IP ADDRESS"
            className="ipaddressapp__container__tracker__hero__container__item__subheading"
          />
          <MainHeading
            text={ipAddress}
            className="ipaddressapp__container__tracker__hero__container__item__heading"
          />
        </div>
        <div className="ipaddressapp__container__tracker__hero__container__item">
          <SubHeading
            text="LOCATION"
            className="ipaddressapp__container__tracker__hero__container__item__subheading"
          />
          <MainHeading
            text={location}
            className="ipaddressapp__container__tracker__hero__container__item__heading"
          />
        </div>
        <div className="ipaddressapp__container__tracker__hero__container__item">
          <SubHeading
            text="TIMEZONE"
            className="ipaddressapp__container__tracker__hero__container__item__subheading"
          />
          <MainHeading
            text={timezone}
            className="ipaddressapp__container__tracker__hero__container__item__heading"
          />
        </div>
        <div className="ipaddressapp__container__tracker__hero__container__item">
          <SubHeading
            text="ISP"
            className="ipaddressapp__container__tracker__hero__container__item__subheading"
          />
          <MainHeading
            text={isp}
            className="ipaddressapp__container__tracker__hero__container__item__heading"
          />
        </div>
      </div>
    </section>
  );
};

export default IPTrackerHero;
