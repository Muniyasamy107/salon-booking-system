function SalonDetails({ salon, addToCart, setPage }) {
  return (
    <div className="details">
      
      <button
        className="back-btn"
        onClick={() => setPage("home")}
      >
        ⬅ Back to Home
      </button>

      <div className="banner">
        <img src={salon.image} alt={salon.name} />
        <div>
          <h2>{salon.name}</h2>
          <p>{salon.location}</p>
        </div>
      </div>

      <div className="center-view">
        <h3>Services</h3>
        <p>Select your premium salon services</p>
      </div>

      <div className="services-grid">
        {salon.services.map((s) => (
          <div className="service-card" key={s.id}>
            <img src={s.image} alt={s.name} />

            <div className="service-info">
              <h4>{s.name}</h4>
              <p>₹{s.price}</p>

              <button
                className="add-btn"
                onClick={() =>
                  addToCart({
                    id: Date.now(),
                    name: s.name,
                    price: s.price
                  })
                }
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SalonDetails;