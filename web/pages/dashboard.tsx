import React from "react"
import { AuthProps, privateRoute } from "../components/private_route";
import Cookie from "js-cookie";
import Router from "next/router";
import { COOKIES } from "../services/login_service";
import { Links } from "../components/links";
import { get } from "../services/rest_service";
import { AuthToken } from "../services/auth_token";

type Props = AuthProps & {
  message: string
}

function Page(props: Props) {
  const logout = async () => {
    Cookie.remove(COOKIES.authToken);
    alert("logout");
    await Router.push("/login");
  };

  console.log(props.auth);

  return <>
    <Links />
    <p>{props.message}</p>
    {/*<div>{props.auth.authorizationString}</div>*/}
    {props.auth.isAuthenticated ? "YES" : "NO"}
    <button onClick={logout}>Logout</button>
  </>
}

Page.getInitialProps = async ({ auth }: AuthProps): Promise<Props> => {
  const res: any = await get("/api/restricted", {
    headers: {
      Authorization: auth.authorizationString
    }
  });

  let message = "Something unexpected happened!";

  if (res.error) {
    message = res.error;
  } else if (res.data && res.data.message) {
    message = res.data.message
  }

  return { message, auth, };
};

export default privateRoute(Page);
