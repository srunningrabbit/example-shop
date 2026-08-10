import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useContext } from "react";
import { CartContext } from './CartContext';
import formatPrice from '../utils/formatPrice';

export default function CheckoutCart() {
    const { cart } = useContext(CartContext);
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const itemTotal = cart.reduce((accumulator, current) => accumulator + current.price, 0);

    if (pathname === "/checkout") {
        return <div style={{ flex: "1" }}></div>;
    }

    return (
        <div className="cart-container">
            <div className="cart">
                <Link to="/checkout"><i className="fi fi-rs-shopping-cart"></i></Link>
                <div className="mini-checkout-container">
                    <div className="mini-checkout">
                        <div className="mini-checkout-items">
                            {cart.length === 0 ? <h3>Cart is empty</h3> : null}
                            {cart.map((product, index) => (
                                <div key={index} className="mini-checkout-item">
                                    <img src={product.image} alt={product.name} loading="lazy" />
                                    <div>
                                        <h4>{product.name}</h4>
                                        <span>{formatPrice(product.price)}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="item-total">
                            <h3>Item Total:</h3>
                            <h3>{formatPrice(itemTotal)}</h3>
                        </div>
                        <button onClick={() => navigate("/checkout")}>Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}