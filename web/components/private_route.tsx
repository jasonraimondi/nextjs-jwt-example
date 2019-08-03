import ServerCookie from "next-cookies";
import Router from "next/router";
import React, { Component } from "react";
import { COOKIES } from "../services/login_service";
import { AuthToken } from "../services/auth_token";

export type AuthProps = {
  auth: AuthToken
}

type AuthState = {
  auth: AuthToken
}

export function privateRoute(WrappedComponent: any) {
  return class extends Component<AuthProps, AuthState> {
    state = {
      auth: new AuthToken(this.props.auth.token),
    };

    static async getInitialProps(ctx: any) {
      const token = ServerCookie(ctx)[COOKIES.authToken];
      const auth = new AuthToken(token);
      const initialProps = { auth };
      if (WrappedComponent.getInitialProps) return WrappedComponent.getInitialProps(initialProps);
      return initialProps;
    }

    componentDidMount(): void {
      if (this.props.auth.decodedToken.exp === 0 || this.state.auth.isExpired) {
        Router.push("/login");
      }
    }

    componentDidUpdate(): void {
      if (this.props.auth.decodedToken.exp === 0 || this.state.auth.isExpired) {
        Router.push("/login");
      }
    }

    render() {
      // the server pass to the client serializes the token
      // so we have to reinitialize the authToken class
      //
      // @see https://github.com/zeit/next.js/issues/3536
      // const auth =;
      return <WrappedComponent auth={this.state.auth} {...this.props} />;
    }
  };
}
