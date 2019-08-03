import jwtDecode from "jwt-decode";

export type DecodedToken = {
  readonly email: string;
  readonly exp: number;
}

export class AuthToken {
  readonly decodedToken: DecodedToken;

  constructor(readonly token?: string) {
    this.decodedToken = { email: "", exp: 0 };
    try {
      if (token) this.decodedToken = jwtDecode(token);
    } catch (e) {}
  }

  get expiresAt(): Date {
    return new Date(this.decodedToken.exp * 1000);
  }

  get isExpired(): boolean {
    return new Date() > this.expiresAt;
  }

  get isAuthenticated(): boolean {
    return !this.isExpired;
  }

  get authorizationString() {
    return `Bearer ${this.token}`;
  }
}
