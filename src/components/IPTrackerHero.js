import React from "react";
import HeroContainerItem from "./HeroContainerItem";

const IPTrackerHero = ({ ipAddress, location, timezone, isp }) => {
  return (
    <section className="ipaddressapp__container__tracker__hero">
      <div className="ipaddressapp__container__tracker__hero__container">
        <HeroContainerItem
          subHeadingText="IP ADDRESS"
          headingText={ipAddress}
        />
        <HeroContainerItem subHeadingText="LOCATION" headingText={location} />
        <HeroContainerItem subHeadingText="TIMEZONE" headingText={timezone} />
        <HeroContainerItem subHeadingText="ISP" headingText={isp} />
      </div>
    </section>
  );
};

export default IPTrackerHero;
