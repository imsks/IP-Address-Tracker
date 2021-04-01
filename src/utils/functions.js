import axios from "axios";

export const getIPTrackerResponse = async (ipAddress) => {
  return axios({
    method: "get",
    url: `https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP__IP_GEOLOCATION_API}&ipAddress=${ipAddress}`,
  })
    .then((response) => {
      const ipTrackerResponsePayload = {
        ipAddress,
        location:
          response.data.location.city + " " + response.data.location.country,
        timezone: response.data.location.timezone,
        isp: response.data.isp,
        coordinates: {
          lat: response.data.location.lat,
          lng: response.data.location.lng,
        },
      };

      return ipTrackerResponsePayload;
    })
    .catch((error) => {
      return {
        status: "Failed",
        message: error.response.data.messages,
      };
    });

  // ONLY FOR TESTING
  // return {
  //   status: "Passed",
  //   ipAddress,
  //   location: "CITY NAME AND COUNTRY NAME",
  //   timezone: "TIMEZONE",
  //   isp: "ISP IS THIS",
  //   coordinates: {
  //     lat: 27.5035,
  //     lng: 77.67215,
  //   },
  // };
};

export const handleIPAddressInput = (e, setCurrentIpAddress) => {
  setCurrentIpAddress(e.target.value);
};

export const handleSubmitIpAddress = (
  e,
  // getIPTrackerResponseFromAPI,
  currentIpAddress,
  setIpTrackingStatusText,
  setIpTrackerResponseData
) => {
  e.preventDefault();
  getIPTrackerResponseFromAPI(
    currentIpAddress,
    setIpTrackingStatusText,
    setIpTrackerResponseData
  );
};

export async function getIPTrackerResponseFromAPI(
  ipAddress,
  setIpTrackingStatusText,
  setIpTrackerResponseData
) {
  const response = await getIPTrackerResponse(ipAddress);

  if (response.status === "Failed") {
    setIpTrackingStatusText(response.message);
    return;
  }

  setIpTrackerResponseData(response);
}
