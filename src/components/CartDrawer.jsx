import { useState } from 'react';

export default function CartDrawer({
  isOpen,
  onClose,
  cart,
  onUpdateQty,
  onRemove,
  onClearCart
}) {
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);

  if (!isOpen) return null;

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = (e) => {
    e.preventDefault();
    if (!customerName.trim() || !customerEmail.trim()) return;
    setOrderPlaced(true);
    onClearCart();
  };

  const handleCloseAll = () => {
    setOrderPlaced(false);
    setCustomerName('');
    setCustomerEmail('');
    onClose();
  };

  return (
    <div className="drawer-overlay" onClick={handleCloseAll}>
      <aside className="cart-drawer" onClick={(e) => e.stopPropagation()}>
        <div className="drawer-header">
          <h2>Your Shopping Cart</h2>
          <button className="btn-close" onClick={handleCloseAll}>✕</button>
        </div>

        {orderPlaced ? (
          <div className="order-success">
            <h3>Tack för din beställning, {customerName}!</h3>
            <p>We have sent an order confirmation to <strong>{customerEmail}</strong>.</p>
            <button className="btn-primary" onClick={handleCloseAll}>
              Continue Shopping
            </button>
          </div>
        ) : cart.length === 0 ? (
          <div className="cart-empty">
            <p>Your cart is currently empty.</p>
            <button className="btn-outline" onClick={handleCloseAll}>
              Explore Products
            </button>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} />
                  <div className="cart-item-details">
                    <h4>{item.name}</h4>
                    <p>{item.price} SEK</p>
                    <div className="qty-controls">
                      <button onClick={() => onUpdateQty(item.id, -1)}>−</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => onUpdateQty(item.id, 1)}>+</button>
                      <button className="btn-remove" onClick={() => onRemove(item.id)}>
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="drawer-footer">
              <div className="cart-total">
                <span>Total:</span>
                <strong>{total} SEK</strong>
              </div>

              <form className="checkout-form" onSubmit={handleCheckout}>
                <h4>Quick Checkout</h4>
                <input
                  type="text"
                  placeholder="Your full name"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  required
                />
                <input
                  type="email"
                  placeholder="Email address"
                  value={customerEmail}
                  onChange={(e) => setCustomerEmail(e.target.value)}
                  required
                />
                <button type="submit" className="btn-primary">
                  Place Order ({total} SEK)
                </button>
              </form>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}
