import salons from "../data/salons";

function Home({ setPage, setSelectedSalon }) {

  const handleView = (salon) => {
    setSelectedSalon(salon);
    setPage("details");
  };

  return (
    <div className="home-container">

      {/* HERO */}
      <div className="hero">
        <h1> Luxury Salon Booking</h1>
        <p>Book your premium salon in Chennai</p>
      </div>

      {/* GRID */}
      <div className="salon-grid">

        {salons.map((s) => (
          <div className="salon-card" key={s.id}>

            <img src={s.image} alt={s.name} />

            <div className="salon-info">

              <h3>{s.name}</h3>
              <p>📍 {s.location}</p>
              <p>⭐ {s.rating}</p>

              <button
                className="view-btn"
                onClick={() => handleView(s)}
              >
                View Services
              </button>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Home;