import React, { useState, useEffect } from "react";
import { FormInput, FormSubmitButton } from "../components/Form";
import { MainHeading } from "../components/Headings";
import IPTrackerHero from "../components/IPTrackerHero";
import IPTrackerMap from "../components/IPTrackerMap";
import {
  getIPTrackerResponse,
  handleIPAddressInput,
  handleSubmitIpAddress,
} from "../utils/functions";

const IPTracker = () => {
  const [ipTrackerResponseData, setIpTrackerResponseData] = useState(null);
  const [currentIpAddress, setCurrentIpAddress] = useState(null);
  const [ipTrackingStatusText, setIpTrackingStatusText] = useState("Loading");

  async function getIPTrackerResponseFromAPI(ipAddress = "8.8.8.8") {
    const response = await getIPTrackerResponse(ipAddress);

    if (response.status === "Failed") {
      setIpTrackingStatusText(response.message);
      return;
    }

    setIpTrackerResponseData(response);
  }

  useEffect(() => {
    getIPTrackerResponseFromAPI();
  }, []);

  console.log(ipTrackerResponseData)

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
              getIPTrackerResponseFromAPI,
              currentIpAddress
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
