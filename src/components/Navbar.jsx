export default function Navbar({ cartCount, onOpenCart }) {
  return (
    <header className="navbar">
      <div className="container nav-inner">
        <div className="brand">
          <span className="brand-dot"></span>
          <h1>Nordic Living</h1>
        </div>
        <button className="cart-trigger" onClick={onOpenCart}>
          <span>Cart</span>
          <span className="cart-badge">{cartCount}</span>
        </button>
      </div>
    </header>
  );
}
