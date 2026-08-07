import './Product.css';
import { useContext } from 'react';
import { CartContext } from '../../components/CartContext';
import { useParams } from 'react-router-dom';
import productsData from '../../data/products.json';
import formatPrice from '../../utils/formatPrice';

export default function Product() {
    const { id } = useParams();
    const product = productsData.find(item => item.id === parseInt(id));

    const { addToCart } = useContext(CartContext);

    return (
        <div className="product-container">
            <div className="product">
                <img src={product.image} alt={product.name} loading="lazy" />
                <div>
                    <h2>{product.name}</h2>
                    <span>{formatPrice(product.price)}</span>
                    <span>{product.description}</span>
                    <button onClick={() => addToCart(product)}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}