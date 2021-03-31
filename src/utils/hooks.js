import { useEffect } from "react";
import Sawo from "sawo";

export const useSawo = (sawoAuthSuccess) => {
  useEffect(() => {
    const config = {
      // should be same as the id of the container created on 3rd step
      containerID: "sawo-container",
      // can be one of 'email' or 'phone_number_sms'
      identifierType: "phone_number_sms",
      // Add the API key copied from 2nd step
      apiKey: "f4fe36f6-cacc-42be-ae97-419300fd05f5",
      // Add a callback here to handle the payload sent by sdk
      onSuccess: sawoAuthSuccess,
    };

    let sawo = new Sawo(config);
    sawo.showForm();
  }, []);
};