function Cart({ cart, removeFromCart, setPage }) {
  const total = cart.reduce((a, b) => a + b.price, 0);

  return (
    <div className="cart">

      <h2>Your Cart</h2>

      {cart.map((c) => (
        <div className="item" key={c.id}>
          {c.name} - ₹{c.price}

          <button onClick={() => removeFromCart(c.id)}>
            Remove
          </button>
        </div>
      ))}

      <h3>Total: ₹{total}</h3>

      <button onClick={() => setPage("booking")}>
        Proceed Booking
      </button>

    </div>
  );
}

export default Cart;