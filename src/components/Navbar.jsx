import { Link } from 'react-router-dom';

export default function Navbar({ cartCount, onOpenCart }) {
  return (
    <header className="navbar">
      <div className="container nav-inner">
        <Link to="/" className="brand" style={{ textDecoration: 'none', color: 'inherit' }}>
          <span className="brand-dot"></span>
          <h1>Nordic Living</h1>
        </Link>

        <button className="cart-trigger" onClick={onOpenCart}>
          <span>Cart</span>
          <span className="cart-badge">{cartCount}</span>
        </button>
      </div>
    </header>
  );
}
