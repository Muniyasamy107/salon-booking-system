import salons from "../data/salons";

function Home({ setPage, setSelectedSalon }) {
  return (
    <>
      {/* HERO */}
      <div className="hero">
        <h1>Luxury Salon Booking</h1>
        <p>Book your premium salon in Chennai</p>
      </div>

      {/* GRID */}
      <div className="grid">
        {salons.map((s) => (
          <div className="card" key={s.id}>
            
            <img src={s.image} alt={s.name} />

            <h3>{s.name}</h3>
            <p>{s.location} ⭐ {s.rating}</p>

            {/* BUTTON WRAPPER (IMPORTANT FIX) */}
            <div className="btn-wrap">
              <button
                className="view-btn"
                onClick={() => {
                  setSelectedSalon(s);
                  setPage("details");
                }}
              >
                View Services
              </button>
            </div>

          </div>
        ))}
      </div>
    </>
  );
}

export default Home;