import React, { useState } from "react";
import { login } from "../services/login_service";

export type LoginInputs = {
  email: string
  password: string
}

function Page() {
  // these values are hardcoded since our main.go api only accepts this auth combo
  const initialValues: LoginInputs = { email: "rickety_cricket@example.com", password: "shhh!", };

  const [inputs, setInputs] = useState(initialValues);
  const [error, setError] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = await login(inputs);
    if (res) setError(res);
  };

  const handleInputChange = (e: React.ChangeEvent<any>) => {
    e.persist();
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  return <>
    {error ? <p>Error: {error}</p> : null}
    <form className="container mx-auto max-w-sm" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" onChange={handleInputChange} value={inputs.email} placeholder="rickety_cricket@example.com"/>
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" onChange={handleInputChange} value={inputs.password} placeholder="********"/>
      </div>
      <button type="submit">Login</button>
    </form>
  </>;
}

export default Page;