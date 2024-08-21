import React, { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});

  const validateForm = () => {
    const newError = {};

    if (!email) {
      newError.email = "Email is Required";
    }
    if (!password) {
      newError.password = "Password is Required";
    }

    setError(newError);

    return Object.keys(newError).length === 0;
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form is submitted with email:", email);
      console.log("Form is submitted with Password:", password);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit"> Login </button>
    </form>
  );
};
export default LoginForm;
