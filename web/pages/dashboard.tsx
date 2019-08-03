import React from "react"
import { AuthProps, privateRoute } from "../components/private_route";
import Cookie from "js-cookie";
import Router from "next/router";
import { COOKIES } from "../services/login_service";

function Page(props: AuthProps) {
  const logout = async () => {
    Cookie.remove(COOKIES.authToken);
    alert("logout");
    await Router.push("/login");
  };

  return <>
    <p>Hello Dashboard</p>
    <p>{JSON.stringify(props.auth)}</p>
    <button onClick={logout}>Logout</button>
  </>
}

export default privateRoute(Page);
