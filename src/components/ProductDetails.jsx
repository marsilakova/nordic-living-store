import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';

export default function ProductDetails({ onAddToCart }) {
  const { id } = useParams();
  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <div className="container product-not-found">
        <h2>Product not found</h2>
        <p>Sorry, we could not find the item you are looking for.</p>
        <Link to="/" className="btn-primary" style={{ display: 'inline-block', textDecoration: 'none', marginTop: '16px' }}>
          ← Back to Shop
        </Link>
      </div>
    );
  }

  return (
    <main className="container product-details-page">
      <Link to="/" className="back-link">
        ← Back to Catalog
      </Link>

      <div className="product-details-card">
        <div className="product-details-img">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="product-details-info">
          <span className="details-category">{product.category}</span>
          <h2>{product.name}</h2>
          <p className="details-price">{product.price} SEK</p>
          <p className="details-desc">{product.description}</p>

          <div className="details-specs">
            <p><strong>Design:</strong> Handcrafted Scandinavian Minimalism</p>
            <p><strong>Shipping:</strong> Free delivery in Sweden on orders over 1000 SEK</p>
            <p><strong>Availability:</strong> In stock • Ready to ship</p>
          </div>

          <button
            className="btn-primary details-add-btn"
            onClick={() => onAddToCart(product)}
          >
            Add to Cart — {product.price} SEK
          </button>
        </div>
      </div>
    </main>
  );
}
