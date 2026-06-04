import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SalonDetails from "./components/SalonDetails";
import Cart from "./components/Cart";
import Booking from "./components/Booking";
import BookingsList from "./components/BookingsList";

import "./App.css";

function App() {
  const [page, setPage] = useState("home");
  const [selectedSalon, setSelectedSalon] = useState(null);
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((i) => i.id !== id));
  };

  return (
    <>
      {/* NAVBAR */}
      <Navbar setPage={setPage} cartCount={cart.length} />

      {/* HOME */}
      {page === "home" && (
        <Home
          setPage={setPage}
          setSelectedSalon={setSelectedSalon}
        />
      )}

      {/* DETAILS */}
      {page === "details" && (
        <SalonDetails
          salon={selectedSalon}
          addToCart={addToCart}
          setPage={setPage}
        />
      )}

      {/* CART */}
      {page === "cart" && (
        <Cart
          cart={cart}
          removeFromCart={removeFromCart}
          setPage={setPage}
        />
      )}

      {/* BOOKING FORM */}
      {page === "booking" && (
        <Booking setPage={setPage} />
      )}

      {/* BOOKINGS LIST */}
      {page === "bookings" && (
        <BookingsList />
      )}

      {/* ABOUT PAGE */}
      {page === "about" && (
        <div className="page">
          <h2>About Us</h2>
          <p>We provide luxury salon booking experience.</p>
        </div>
      )}

      {/* SERVICES PAGE */}
      {page === "services" && (
        <div className="page">
          <h2>Services</h2>
          <p>Haircut, Spa, Facial, Beard trim, Hair coloring.</p>
        </div>
      )}

      {/* CONTACT PAGE */}
      {page === "contact" && (
        <div className="page">
          <h2>Contact Us</h2>
          <p>Email: support@salon.com</p>
          <p>Phone: 9876543210</p>
        </div>
      )}

      {/* FOOTER */}
      <footer className="footer">
        <h3>OnlineSalonBook</h3>
        <p>Luxury Salon Booking Experience</p>
        <p>© 2026 All Rights Reserved</p>
      </footer>
    </>
  );
}

export default App;