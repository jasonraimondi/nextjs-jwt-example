import React from "react";

export function Links() {
  return <ul>
    <li><a href={"/"}>Home</a></li>
    <li><a href={"/login"}>Login</a></li>
    <li><a href={"/dashboard"}>Dashboard (protected)</a></li>
  </ul>
}
