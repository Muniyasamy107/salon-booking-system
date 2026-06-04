import { useEffect, useState } from "react";
import API from "../api";

function BookingsList() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadBookings = () => {
    setLoading(true);

    API.get("/bookings")
      .then((res) => {
        setBookings(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    loadBookings();
  }, []);

  const deleteBooking = (id) => {
    const confirmDelete = window.confirm("Are you sure to delete?");
    if (!confirmDelete) return;

    API.delete(`/bookings/${id}`)
      .then(() => {
        alert("Deleted Successfully 🗑️");
        loadBookings();
      })
      .catch((err) => {
        console.log(err);
        alert("Delete Failed ❌");
      });
  };

  return (
    <div className="bookings-list">

      <h2>All Bookings</h2>

      {/* LOADING STATE */}
      {loading && <p>Loading bookings...</p>}

      {/* EMPTY STATE */}
      {!loading && bookings.length === 0 && (
        <p>No bookings found</p>
      )}

      {/* DATA LIST */}
      {!loading &&
        bookings.map((b) => (
          <div key={b.id} className="booking-card">

            <h3>{b.name}</h3>

            <p>Address: {b.address}</p>
            <p>Email: {b.email}</p>
            <p>Contact: {b.contact}</p>
            <p>Date: {b.date}</p>
            <p>Time: {b.time}</p>

            <button
              onClick={() => deleteBooking(b.id)}
              style={{ background: "red", color: "white" }}
            >
              Delete
            </button>

          </div>
        ))}
    </div>
  );
}

export default BookingsList;