import { AxiosError } from "axios";

export type ErrorResponse = {
  error: string
}

export function catchAxiosError(err: AxiosError): ErrorResponse {
  // Something happened in setting up the request that triggered an Error
  console.log("Error", err.message);
  let message = "Something happened in setting up the request that triggered an Error";

  if (err.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.log(err.response.data.message);
    console.log(err.response.status);
    // console.log(err.response.headers);
    message = err.response.data.message;
  } else if (err.request) {
    // The request was made but no response was received
    // `err.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    console.log(err.request);
    message = "The request was made, but no response was received";
  }
  return { error: message };
}
