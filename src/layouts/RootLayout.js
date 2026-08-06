import { Outlet, Link } from 'react-router-dom';
import CartProvider from '../components/CartContext';
import SearchBar from '../components/SearchBar';
import CheckoutCart from '../components/CheckoutCart';

export default function RootLayout() {
    return (
        <div>
            <CartProvider>
                <header>
                    <SearchBar />
                    <h1><Link to="/">Example Shop</Link></h1>
                    <CheckoutCart />
                </header>

                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/patterns">Patterns</Link></li>
                        <li><Link to="/yarn">Yarn</Link></li>
                        <li><Link to="/tools">Tools</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>

                <main>
                    <Outlet />
                </main>

                <footer>
                    <p>&copy; 2026 Example Shop</p>
                    <a rel="noreferrer" href="https://www.flaticon.com/icons/" target="_blank">Icons found on Flaticon</a>
                </footer>
            </CartProvider>
        </div>
    )
}