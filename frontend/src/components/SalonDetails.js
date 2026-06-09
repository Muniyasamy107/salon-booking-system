function SalonDetails({ salon, addToCart, setPage }) {

  if (!salon) {
    return (
      <div className="no-salon">
        <h3>No salon selected</h3>
        <button onClick={() => setPage("home")}>
          ⬅ Go Home
        </button>
      </div>
    );
  }

  const handleAdd = (service) => {
    addToCart({
      id: Date.now(),
      name: service.name,
      price: service.price
    });

    alert("Added to cart ✔");
  };

  return (
    <div className="salon-page">

      {/* BACK BUTTON */}
      <button className="back-btn" onClick={() => setPage("home")}>
        ⬅ Back
      </button>

      {/* HEADER */}
      <div className="salon-header">

        <img src={salon.image} alt={salon.name} />

        <div className="salon-info">
          <h2>{salon.name}</h2>
          <p>📍 {salon.location}</p>
        </div>

      </div>

      {/* TITLE */}
      <div className="section-title">
        <h3> Premium Services</h3>
        <p>Choose your beauty package</p>
      </div>

      {/* SERVICES */}
      <div className="service-grid">

        {salon.services?.map((s) => (
          <div className="service-card" key={s.id}>

            <img src={s.image} alt={s.name} />

            <div className="service-body">
              <h4>{s.name}</h4>
              <p className="price">₹{s.price}</p>

              <button
                onClick={() => handleAdd(s)}
                className="add-btn"
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