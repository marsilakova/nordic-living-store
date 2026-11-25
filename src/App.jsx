import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { products } from './data/products';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import ProductDetails from './components/ProductDetails';
import CartDrawer from './components/CartDrawer';
import './App.css';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isCartOpen, setIsCartOpen] = useState(false);

  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('nordic_living_cart');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('nordic_living_cart', JSON.stringify(cart));
  }, [cart]);

  const categories = ['All', 'Ceramics', 'Lighting', 'Textiles', 'Accessories'];

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const handleUpdateQty = (id, delta) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + delta } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const handleRemove = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <BrowserRouter>
      <div className="app">
        <Navbar cartCount={totalItems} onOpenCart={() => setIsCartOpen(true)} />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <section className="hero">
                  <div className="container">
                    <span className="hero-tag">Scandinavian Home & Decor</span>
                    <h2>Timeless Nordic Craftsmanship for Everyday Living</h2>
                    <p>
                      Curated ceramics, warm ambient lighting, and natural Baltic textiles
                      designed for calm, minimalist interiors.
                    </p>
                  </div>
                </section>

                <main className="container main-content">
                  <div className="controls-bar">
                    <div className="category-filters">
                      {categories.map((category) => (
                        <button
                          key={category}
                          className={`filter-btn ${
                            selectedCategory === category ? 'active' : ''
                          }`}
                          onClick={() => setSelectedCategory(category)}
                        >
                          {category}
                        </button>
                      ))}
                    </div>

                    <input
                      type="text"
                      className="search-input"
                      placeholder="Search products..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>

                  {filteredProducts.length === 0 ? (
                    <div className="no-results">
                      <p>No products found matching your filter.</p>
                      <button
                        className="btn-outline"
                        onClick={() => {
                          setSelectedCategory('All');
                          setSearchQuery('');
                        }}
                      >
                        Reset Filters
                      </button>
                    </div>
                  ) : (
                    <div className="products-grid">
                      {filteredProducts.map((product) => (
                        <ProductCard
                          key={product.id}
                          product={product}
                          onAddToCart={handleAddToCart}
                        />
                      ))}
                    </div>
                  )}
                </main>
              </>
            }
          />

          <Route
            path="/product/:id"
            element={<ProductDetails onAddToCart={handleAddToCart} />}
          />
        </Routes>

        <footer className="footer">
          <div className="container">
            <p>© 2026 Nordic Living Store • Malmö, Sweden</p>
          </div>
        </footer>

        <CartDrawer
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          cart={cart}
          onUpdateQty={handleUpdateQty}
          onRemove={handleRemove}
          onClearCart={handleClearCart}
        />
      </div>
    </BrowserRouter>
  );
}
