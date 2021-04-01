import React, { useState } from "react";
import { FormInput, FormSubmitButton } from "../components/Form";
import { MainHeading } from "../components/Headings";
import IPTrackerHero from "../components/IPTrackerHero";
import IPTrackerMap from "../components/IPTrackerMap";
import {
  handleIPAddressInput,
  handleSubmitIpAddress,
} from "../utils/functions";
import { useIPTrackerAPI } from "../utils/hooks";

const IPTracker = () => {
  const [ipTrackerResponseData, setIpTrackerResponseData] = useState(null);
  const [currentIpAddress, setCurrentIpAddress] = useState("8.8.8.8");
  const [ipTrackingStatusText, setIpTrackingStatusText] = useState("Loading");

  useIPTrackerAPI(
    currentIpAddress,
    setIpTrackingStatusText,
    setIpTrackerResponseData
  );

  return (
    <div className="ipaddressapp__container__tracker">
      <MainHeading text="IP Address Tracker" />
      <form className="ipaddressapp__container__form__container form">
        <FormInput
          type="text"
          placeholder="Search for an IP address"
          handleInputIpAddress={(e) =>
            handleIPAddressInput(e, setCurrentIpAddress)
          }
        />
        <FormSubmitButton
          handleSubmitIpAddress={(e) =>
            handleSubmitIpAddress(
              e,
              currentIpAddress,
              setIpTrackingStatusText,
              setIpTrackerResponseData
            )
          }
        />
      </form>
      {ipTrackerResponseData ? (
        <>
          <IPTrackerHero
            ipAddress={ipTrackerResponseData.ipAddress}
            location={ipTrackerResponseData.location}
            timezone={ipTrackerResponseData.timezone}
            isp={ipTrackerResponseData.isp}
          />
          <IPTrackerMap coordinates={ipTrackerResponseData.coordinates} />
        </>
      ) : (
        <section className="ipaddressapp__container__tracker__hero">
          <div className="ipaddressapp__container__tracker__hero__container">
            <MainHeading
              text={ipTrackingStatusText}
              className="ipaddressapp__container__tracker__hero__container__heading"
            />
          </div>
        </section>
      )}
    </div>
  );
};

export default IPTracker;
