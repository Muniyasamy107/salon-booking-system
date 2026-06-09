import { useEffect, useState } from "react";
import API from "../api";

function AdminPage({ setPage }) {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadBookings();
  }, []);

  const loadBookings = () => {
    setLoading(true);

    API.get("/bookings/admin/all")
      .then((res) => {
        setBookings(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  const totalRevenue = bookings
    .filter((b) => b.status === "PAID")
    .reduce((sum, b) => sum + (b.amount || 0), 0);

  const totalBookings = bookings.length;
  const paidBookings = bookings.filter((b) => b.status === "PAID").length;
  const pendingBookings = bookings.filter((b) => b.status === "PENDING").length;

  return (
    <div className="admin-container">

      <h2 className="admin-title">👑 Admin Dashboard</h2>

      {/* STATS */}
      <div className="stats-grid">

        <div className="stat-card revenue">
          <h3>Revenue</h3>
          <p>₹{totalRevenue}</p>
        </div>

        <div className="stat-card total">
          <h3>Total</h3>
          <p>{totalBookings}</p>
        </div>

        <div className="stat-card paid">
          <h3>Paid</h3>
          <p>{paidBookings}</p>
        </div>

        <div className="stat-card pending">
          <h3>Pending</h3>
          <p>{pendingBookings}</p>
        </div>

      </div>

      {/* BUTTON */}
      <button className="refresh-btn" onClick={loadBookings}>
        🔄 Refresh
      </button>

      {/* BOOKINGS */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        bookings.map((b) => (
          <div key={b.id} className="admin-booking-card">

            <h3>{b.name}</h3>
            <p>📅 Date: {b.date}</p>
            <p>📞 Contact: {b.contact}</p>

            <p>
              💳 Status:{" "}
              <span className={b.status === "PAID" ? "paid-badge" : "pending-badge"}>
                {b.status}
              </span>
            </p>

            <p>💰 Amount: ₹{b.amount}</p>

          </div>
        ))
      )}
    </div>
  );
}

export default AdminPage;