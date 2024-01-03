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
    <div id="login">
      <h1>eWorld</h1>
      <form id="login_form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={formData.username}
          placeholder="username"
          onChange={handleChange}
        />
        <br />
        <input
          type="password"
          name="password"
          value={formData.password}
          placeholder="password"
          onChange={handleChange}
        />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;