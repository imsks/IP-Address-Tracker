import axios from "axios";

export const getIPTrackerResponse = (ipAddress) => {
  console.log(process.env.REACT_APP__IP_GEOLOCATION_API);

  axios({
    method: "get",
    url: `https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP__IP_GEOLOCATION_API}&ipAddress=${ipAddress}`,
  })
    .then((response) => {
      const { lat, lang } = response.data.location;
      return {
        lat,
        lang,
      };
    })
    .catch((error) => {
      console.log(error);
    });
};
