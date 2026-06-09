import { useState } from "react";
import API from "../api";

function Booking({ totalAmount, setPage }) {
  const [form, setForm] = useState({
    name: "",
    address: "",
    email: "",
    contact: "",
    date: "",
    time: ""
  });

  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleBooking = async () => {
    try {
      const payload = {
        ...form,
        amount: totalAmount,
        status: "PENDING",
        paymentId: ""
      };

      await API.post("/bookings", payload);

      setMsg("Booking Success ✅");

      setTimeout(() => {
        setPage("payment");
      }, 1200);
    } catch (err) {
      console.log(err);
      setMsg("Booking Failed ❌");
    }
  };

  return (
    <div className="booking-wrapper">
      <div className="booking-card">

        <h2>✨ Premium Booking Sheet</h2>
        <p className="sub">Fill your details and confirm appointment</p>

        <table className="booking-table">
          <tbody>

            <tr>
              <td>Name</td>
              <td>
                <input name="name" onChange={handleChange} placeholder="Enter name" />
              </td>
            </tr>

            <tr>
              <td>Address</td>
              <td>
                <input name="address" onChange={handleChange} placeholder="Full address" />
              </td>
            </tr>

            <tr>
              <td>Email</td>
              <td>
                <input name="email" onChange={handleChange} placeholder="Email ID" />
              </td>
            </tr>

            <tr>
              <td>Phone</td>
              <td>
                <input name="contact" onChange={handleChange} placeholder="Mobile number" />
              </td>
            </tr>

            <tr>
              <td>Date</td>
              <td>
                <input type="date" name="date" onChange={handleChange} />
              </td>
            </tr>

            <tr>
              <td>Time Slot</td>
              <td>
                <select name="time" onChange={handleChange}>
                  <option value="">Select Time</option>
                  <option>09:00 AM</option>
                  <option>10:00 AM</option>
                  <option>11:00 AM</option>
                  <option>12:00 PM</option>
                  <option>02:00 PM</option>
                  <option>04:00 PM</option>
                  <option>06:00 PM</option>
                </select>
              </td>
            </tr>

          </tbody>
        </table>

        <div className="amount-box">
          💰 Total Amount: ₹{totalAmount}
        </div>

        <button className="book-btn" onClick={handleBooking}>
          Confirm Booking
        </button>

        {msg && <p className="msg">{msg}</p>}
      </div>
    </div>
  );
}

export default Booking;