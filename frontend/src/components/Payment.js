import { useState } from "react";
import API from "../api";

function Payment({ setPage, booking }) {

  //  ALL HOOKS TOP LEVEL (IMPORTANT FIX)
  const [cardNumber, setCardNumber] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  //  SAFE CHECK (NOT BEFORE HOOKS)
  if (!booking) {
    return (
      <div className="payment-page">
        <div className="payment-card">
          <h2>⚠️ No booking selected</h2>
          <button onClick={() => setPage("bookings")} className="pay-btn">
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const handlePayment = async () => {

    if (!name || !cardNumber) {
      alert("Fill all payment details");
      return;
    }

    setLoading(true);

    try {
      const paymentId = "TXN_" + Date.now();

      await API.put(`/bookings/pay/${booking.id}`, {
        status: "PAID",
        paymentId,
      });

      alert("Payment Successful 🎉");

      setPage("bookings");

    } catch (error) {
      console.log(error);
      alert("Payment Failed");
    }

    setLoading(false);
  };

  return (
    <div className="payment-page">

      <div className="payment-card">

        <h2>💳 Secure Payment</h2>
        <p>Complete your booking payment safely</p>

        {/* BOOKING SUMMARY */}
        <div className="booking-summary">
          <h3>Booking Summary</h3>
          <p>ID: {booking.id}</p>
          <p>Name: {booking.name}</p>
          <p className="amount">
            Amount: ₹{booking.amount || 500}
          </p>
        </div>

        {/* INPUTS */}
        <input
          type="text"
          placeholder="Card Holder Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="payment-input"
        />

        <input
          type="text"
          placeholder="Card Number"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          className="payment-input"
        />

        {/* BUTTON */}
        <button
          onClick={handlePayment}
          disabled={loading}
          className="pay-btn"
        >
          {loading ? "Processing..." : "Pay Now"}
        </button>

      </div>
    </div>
  );
}

export default Payment;