import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Login({ setIsLoggedIn }) {
  const history = useHistory();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoggedIn(true);
    history.push("/");
  }

  function handleLogin() {
    setIsLoggedIn(true);
    history.push("/")
  }

  return (
    <form id="login" onSubmit={handleSubmit}>
      <h1>Login</h1>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
      />
      <br />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      <br />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;