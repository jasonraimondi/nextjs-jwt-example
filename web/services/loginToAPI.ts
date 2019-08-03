import axios, { AxiosRequestConfig } from "axios";
import { LoginInputs } from "../pages/login";
import { catchAxiosError } from "./error";

export async function loginToAPI(inputs: LoginInputs): Promise<string | void> {
  const data = new URLSearchParams(inputs);
  const config: AxiosRequestConfig = {
    baseURL: "http://localhost:1323",
  };
  const res: any = await axios.post("/api/login", data, config).catch(catchAxiosError);
  if (res.error) {
    return res.error;
  } else if (!res.data || !res.data.token) {
    return "Something went wrong!";
  }
  const { token } = res.data;
  alert(`token is ${token}`);
}
