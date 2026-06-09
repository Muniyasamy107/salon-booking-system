import { useState } from "react";
import API from "../api";

function ForgotPassword({ setPage }) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleReset = () => {
    if (!email) {
      alert("Enter your email");
      return;
    }

    setLoading(true);

    API.post("/auth/forgot-password", { email })
      .then(() => {
        setLoading(false);
        alert("Reset link sent to your email");
        setPage("login");
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
        alert("Something went wrong");
      });
  };

  return (
    <div className="forgot-container">

      <div className="forgot-card">

        <h2>🔐 Forgot Password</h2>
        <p>Enter your email to reset password</p>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="forgot-input"
        />

        <button
          onClick={handleReset}
          disabled={loading}
          className="reset-btn"
        >
          {loading ? "Sending..." : "Reset Password"}
        </button>

        <button
          onClick={() => setPage("login")}
          className="back-btn"
        >
          Back To Login
        </button>

      </div>

    </div>
  );
}

export default ForgotPassword;