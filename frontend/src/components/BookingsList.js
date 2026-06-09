import { useEffect, useState } from "react";
import API from "../api";

function BookingsList({ setPage, setSelectedBooking }) {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

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

  const handleRefresh = () => {
    setRefreshing(true);
    loadBookings();

    setTimeout(() => {
      setRefreshing(false);
    }, 500);
  };

  const deleteBooking = (id) => {
    const confirmDelete = window.confirm("Are you sure to delete?");
    if (!confirmDelete) return;

    API.delete(`/bookings/${id}`)
      .then(() => {
        alert("Deleted Successfully");
        loadBookings();
      })
      .catch((err) => {
        console.log(err);
        alert("Delete Failed");
      });
  };

  return (
    <div className="bookings-list">
      <h2> All Bookings</h2>

      <button className="refresh-btn" onClick={handleRefresh}>
        {refreshing ? "Refreshing..." : "Refresh"}
      </button>

      {loading && <p>Loading bookings...</p>}

      {!loading && bookings.length === 0 && <p>No bookings found</p>}

      {!loading &&
        bookings.map((b) => (
          <div key={b.id} className="booking-card">
            <h3>{b.name}</h3>

            <p>📍 Address: {b.address}</p>
            <p>📧 Email: {b.email}</p>
            <p>📞 Contact: {b.contact}</p>
            <p>📅 Date: {b.date}</p>
            <p>⏰ Time: {b.time}</p>

            <p>
              Status:{" "}
              <span className={b.status === "PAID" ? "status-paid" : "status-pending"} >
                {b.status || "PENDING"}
              </span>
            </p>

            {b.status !== "PAID" && (
              <button
                className="pay-btn"
                onClick={() => {
                  setSelectedBooking(b);
                  setPage("payment");
                }}
              >
                Pay Now
              </button>
            )}

            <button
              className="delete-btn"
              onClick={() => deleteBooking(b.id)}
            >
              Delete
            </button>
          </div>
        ))}
    </div>
  );
}

export default BookingsList;