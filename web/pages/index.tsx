import React from "react";
import { Links } from "../components/links";
import { get } from "../services/rest_service";

type Props = {
  message: string;
}

function Page({message}: Props) {
  return <>
    <Links/>
    <p>The following is a result of a server side api call pre-render. If you right click and view source, the response from the API call will be visible in the source. This is different than say... Inspect Element, which shows the client side rendered content.</p>
    <p>This means that search engines can scrape this page, and immediately see the content, without trusting that the search engines can render SPA's.</p>
    <h2><small style={{color: "grey"}}>API Call:</small> {message}</h2>
  </>;
}

Page.getInitialProps = async () => {
  const res: any = await get("/api/unrestricted");

  let message = "Something unexpected happened!";

  if (res.error) {
    message = res.error;
  } else if (res.data && res.data.message) {
    message = res.data.message
  }

  return { message };
};

export default Page;
