import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SalonDetails from "./components/SalonDetails";
import Cart from "./components/Cart";
import Booking from "./components/Booking";
import BookingsList from "./components/BookingsList";
import ProtectedRoute from "./components/ProtectedRoute";

import Login from "./components/Login";
import Signup from "./components/Signup";
import ForgotPassword from "./components/ForgotPassword";
import Payment from "./components/Payment";

import AdminPage from "./components/AdminPage";

import "./App.css";

function App() {
  const [page, setPage] = useState("login");
  const [selectedSalon, setSelectedSalon] = useState(null);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [cart, setCart] = useState([]);

  const token = localStorage.getItem("token");

  const addToCart = (item) =>
    setCart((prev) => [...prev, item]);

  const removeFromCart = (id) =>
    setCart((prev) => prev.filter((i) => i.id !== id));

  const total = cart.reduce(
    (sum, item) => sum + (item.price || 0),
    0
  );

  useEffect(() => {
    if (token && page === "login") {
      setPage("home");
    }
  }, [token, page]);

  return (
    <div className="app-wrapper">

      {/* NAVBAR (always fixed) */}
      <Navbar setPage={setPage} cartCount={cart.length} />

      {/* MAIN CONTENT */}
      <main className="main-content">

        {page === "admin" && (
          <ProtectedRoute setPage={setPage} roleRequired="ADMIN">
            <AdminPage />
          </ProtectedRoute>
        )}

        {page === "home" && (
          <ProtectedRoute setPage={setPage}>
            <Home
              setPage={setPage}
              setSelectedSalon={setSelectedSalon}
            />
          </ProtectedRoute>
        )}

        {page === "details" && (
          <ProtectedRoute setPage={setPage}>
            <SalonDetails
              salon={selectedSalon}
              addToCart={addToCart}
              setPage={setPage}
            />
          </ProtectedRoute>
        )}

        {page === "cart" && (
          <ProtectedRoute setPage={setPage}>
            <Cart
              cart={cart}
              removeFromCart={removeFromCart}
              setPage={setPage}
            />
          </ProtectedRoute>
        )}

        {page === "booking" && (
          <ProtectedRoute setPage={setPage}>
            <Booking
              setPage={setPage}
              totalAmount={total}
            />
          </ProtectedRoute>
        )}

        {page === "bookings" && (
          <ProtectedRoute setPage={setPage}>
            <BookingsList
              setPage={setPage}
              setSelectedBooking={setSelectedBooking}
            />
          </ProtectedRoute>
        )}

        {page === "payment" && (
          <ProtectedRoute setPage={setPage}>
            <Payment
              setPage={setPage}
              total={total}
              booking={selectedBooking}
            />
          </ProtectedRoute>
        )}

        {page === "login" && <Login setPage={setPage} />}
        {page === "signup" && <Signup setPage={setPage} />}
        {page === "forgot" && <ForgotPassword setPage={setPage} />}

      </main>

      {/* FOOTER (fixed + professional) */}
      <footer className="footer">
        <div className="footer-content">

          <h3>Online Salon Book</h3>
          <p>Luxury Salon Booking Experience</p>
          <p className="copyright">
            © 2026 All Rights Reserved | Premium UI Experience
          </p>

        </div>
      </footer>

    </div>
  );
}

export default App;