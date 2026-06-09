import { useState } from "react";
import API from "../api";

function Login({ setPage }) {

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async () => {

    if (!form.email || !form.password) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);

    try {
      const res = await API.post("/auth/login", form);
      const data = res.data;

      if (!data.token) {
        alert("Login Failed");
        setLoading(false);
        return;
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role);
      localStorage.setItem("name", data.name);

      alert("Login Successful");

      setPage(data.role === "ADMIN" ? "admin" : "home");

    } catch (error) {
      alert(error.response?.data?.message || "Login Failed");
    }

    setLoading(false);
  };

  return (
    <div className="login-container">

      <div className="login-card">

        <h2> Welcome Back</h2>
        <p>Login to continue booking your salon</p>

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={form.email}
          onChange={handleChange}
          className="login-input"
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={form.password}
          onChange={handleChange}
          className="login-input"
        />

        <button
          onClick={handleLogin}
          disabled={loading}
          className="login-btn"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <button
          onClick={() => setPage("signup")}
          className="secondary-btn"
        >
          Create New Account
        </button>

        <button
          onClick={() => setPage("forgot")}
          className="link-btn"
        >
          Forgot Password?
        </button>

      </div>

    </div>
  );
}

export default Login;