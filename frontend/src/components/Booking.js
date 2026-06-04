import { useState } from "react";
import API from "../api";

function Booking({ setPage }) {
  const [form, setForm] = useState({
    name: "",
    address: "",
    email: "",
    contact: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    API.post("/bookings", form)
      .then(() => {
        alert("Booking Confirmed 🎉");
        setPage("bookings");
      })
      .catch((err) => {
        console.log("Error:", err);
        alert("Booking Failed ❌");
      });
  };

  return (
    <div className="booking">

      <h2>Booking Form</h2>

      <input
        name="name"
        placeholder="Name"
        onChange={handleChange}
      />

      <input
        name="address"
        placeholder="Address"
        onChange={handleChange}
      />

      <input
        name="email"
        placeholder="Email"
        type="email"
        onChange={handleChange}
      />

      <input
        name="contact"
        placeholder="Contact Number"
        onChange={handleChange}
      />

      <input
        name="date"
        type="date"
        onChange={handleChange}
      />

      <input
        name="time"
        type="time"
        onChange={handleChange}
      />

      <button onClick={handleSubmit}>
        Confirm Booking
      </button>

    </div>
  );
}

export default Booking;