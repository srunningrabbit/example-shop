import './Checkout.css';
import { useContext } from 'react';
import { CartContext } from "../../components/CartContext";
import formatPrice from '../../utils/formatPrice';

export default function Checkout() {
    const { cart, setCart } = useContext(CartContext);

    const itemTotal = cart.reduce((accumulator, current) => accumulator + current.price, 0);
    const shippingTotal = cart.some(item => (item.type === "yarn" || item.type === "tools")) ? 6.99 : 0;
    const grandTotal = itemTotal + shippingTotal;

    const handleItemRemove = (i) => {
        const updatedCart = cart.filter((item, index) => index !== i)
        setCart(updatedCart);
    }

    return (
        <div className="checkout-container">
            <div className="checkout-items">
                <h2>Checkout ({cart.length} items)</h2>
                {cart.map((item, index) => (
                    <div key={index} className="checkout-item">
                        <img src={item.image} alt={item.name} loading="lazy" />
                        <div className="checkout-item-info">
                            <h3>{item.name}</h3>
                            <span>{formatPrice(item.price)}</span>
                        </div>
                        <div className="remove-item" onClick={() => handleItemRemove(index)}>
                            <i class="fi fi-bs-cross-small"></i>
                            <h5>Remove</h5>
                        </div>
                    </div>
                ))}
            </div>
            <div className="checkout-info" style={{ display: cart.length === 0 ? "none" : "flex" }}>
                <div>
                    <span>Items:</span>
                    <span>{formatPrice(itemTotal)}</span>
                </div>
                <div>
                    <span>Shipping:</span>
                    <span>{formatPrice(shippingTotal)}</span>
                </div>
                <div>
                    <span>Estimated tax and fees:</span>
                    <span>-</span>
                </div>
                <div className="total-price">
                    <h3>Total:</h3>
                    <h3>{formatPrice(grandTotal)}</h3>
                </div>
                <button>Proceed to Checkout</button>
            </div>
        </div>
    );
}