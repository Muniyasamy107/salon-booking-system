function Navbar({ setPage, cartCount }) {
  return (
    <div className="navbar">

      {/* LOGO */}
      <h2 className="logo">ONLINE SALON BOOK</h2>

      <div className="navLinks">

        {/* HOME */}
        <span onClick={() => setPage("home")}>
          HOME
        </span>

        {/* BOOKINGS (API LIST PAGE) */}
        <span onClick={() => setPage("bookings")}>
          BOOKINGS
        </span>

        {/* ABOUT */}
        <span onClick={() => setPage("about")}>
          ABOUT
        </span>

        {/* SERVICES */}
        <span onClick={() => setPage("services")}>
          SERVICES
        </span>

        {/* CONTACT */}
        <span onClick={() => setPage("contact")}>
          CONTACT
        </span>

        {/* CART BUTTON */}
        <button onClick={() => setPage("cart")}>
          CART ({cartCount})
        </button>

      </div>

    </div>
  );
}

export default Navbar;