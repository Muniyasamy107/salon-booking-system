function Navbar({ setPage, cartCount }) {

  const role = localStorage.getItem("role");
  const token = localStorage.getItem("token");
  const name = localStorage.getItem("name");

  const handleLogout = () => {
    localStorage.clear();
    setPage("login");
  };

  return (
    <div className="navbar">

      {/* LOGO */}
      <h2 onClick={() => setPage("home")}>
        ONLINE SALON BOOK
      </h2>

      {/* LINKS */}
      <div className="nav-links">

        {token && (
          <>
            <span onClick={() => setPage("home")}>Home</span>
            <span onClick={() => setPage("bookings")}>Bookings</span>

            {role === "ADMIN" && (
              <span
                className="admin-link"
                onClick={() => setPage("admin")}
              >
                Admin
              </span>
            )}

            <button
              className="cart-btn"
              onClick={() => setPage("cart")}
            >
              🛒 {cartCount}
            </button>

            <span className="user">👤 {name}</span>

            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </>
        )}

        {!token && (
          <button className="login-btn" onClick={() => setPage("login")}>
            Login
          </button>
        )}

      </div>

    </div>
  );
}

export default Navbar;