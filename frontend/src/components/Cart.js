function Cart({ cart, removeFromCart, setPage }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleProceed = () => {
    if (cart.length === 0) {
      alert("Cart is empty!");
      return;
    }
    setPage("booking");
  };

  return (
    <div className="cart-container">

      <h2 className="cart-title">🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <p className="empty-text">No items in cart</p>
      ) : (
        cart.map((c) => (
          <div className="cart-item" key={c.id}>

            <div>
              <h4>{c.name}</h4>
              <p>₹ {c.price}</p>
            </div>

            <button
              className="remove-btn"
              onClick={() => removeFromCart(c.id)}
            >
              Remove
            </button>

          </div>
        ))
      )}

      <div className="cart-total">
        Total: ₹{total}
      </div>

      <button
        className="proceed-btn"
        onClick={handleProceed}
        disabled={cart.length === 0}
      >
        Proceed to Booking
      </button>

    </div>
  );
}

export default Cart;