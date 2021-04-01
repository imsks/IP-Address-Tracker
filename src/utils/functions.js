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

  // return {
  //   status: "Passed",
  //   coordinates: {
  //     lat: 37.38605,
  //     lng: -122.08385,
  //   },
  // };
};

export const handleIPAddressInput = (e, setCurrentIpAddress) => {
  setCurrentIpAddress(e.target.value);
};

export const handleSubmitIpAddress = (
  e,
  getIPTrackerResponseFromAPI,
  currentIpAddress
) => {
  e.preventDefault();
  getIPTrackerResponseFromAPI(currentIpAddress);
};
