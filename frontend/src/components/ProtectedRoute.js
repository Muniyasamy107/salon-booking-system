import { useEffect, useState } from "react";

function ProtectedRoute({ children, setPage, roleRequired }) {

  const [allowed, setAllowed] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {

    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    if (!token) {
      alert("Login required");
      setPage("login");
      return;
    }

    if (roleRequired && role !== roleRequired) {
      alert("Access denied");
      setPage("home");
      return;
    }

    setAllowed(true);
    setChecking(false);

  }, [setPage, roleRequired]);

  if (checking) {
    return (
      <div className="protected-loading">
        <div className="loader"></div>
        <h3>Checking access...</h3>
        <p>Please wait</p>
      </div>
    );
  }

  return allowed ? children : null;
}

export default ProtectedRoute;