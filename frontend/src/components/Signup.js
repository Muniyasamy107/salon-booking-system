import { useState } from "react";
import API from "../api";

function Signup({ setPage }) {

  const [form, setForm] = useState({
    name: "",
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

  const handleSignup = async () => {

    if (!form.name || !form.email || !form.password) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);

    try {
      await API.post("/auth/signup", form);

      alert("Account created successfully 🎉");
      setPage("login");

    } catch (err) {
      console.log(err);
      alert("Signup failed");
    }

    setLoading(false);
  };

  return (
    <div className="signup-page">

      <div className="signup-card">

        <h2>🧾 Create Account</h2>
        <p>Join our premium salon booking platform</p>

        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={form.name}
          onChange={handleChange}
          className="input-box"
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={form.email}
          onChange={handleChange}
          className="input-box"
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={form.password}
          onChange={handleChange}
          className="input-box"
        />

        <button
          onClick={handleSignup}
          disabled={loading}
          className="signup-btn"
        >
          {loading ? "Creating..." : "Sign Up"}
        </button>

        <button
          onClick={() => setPage("login")}
          className="login-link"
        >
          Already have an account?
        </button>

      </div>

    </div>
  );
}

export default Signup;