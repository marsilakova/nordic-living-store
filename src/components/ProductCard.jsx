import { Link } from 'react-router-dom';

export default function ProductCard({ product, onAddToCart }) {
  return (
    <article className="product-card">
      <Link to={`/product/${product.id}`} className="product-img-link">
        <div className="product-img-wrap">
          <img src={product.image} alt={product.name} />
          <span className="product-category">{product.category}</span>
        </div>
      </Link>

      <div className="product-info">
        <Link to={`/product/${product.id}`} className="product-title-link">
          <h3>{product.name}</h3>
        </Link>
        <p className="product-desc">{product.description}</p>

        <div className="product-footer">
          <span className="product-price">{product.price} SEK</span>
          <button
            className="btn-add"
            onClick={() => onAddToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
}
