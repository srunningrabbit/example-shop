import './Search.css';
import { useSearchParams, Link } from 'react-router-dom';
import productsData from '../../data/products.json';
import formatPrice from '../../utils/formatPrice';

export default function Search() {
    const [searchParams] = useSearchParams();
    const query = searchParams.get("q") || "";
    const filteredProducts = productsData.filter(product => product.name.toLowerCase().includes(query));

    const itemAmnt = filteredProducts.length;
    const maxItems = itemAmnt; // will be 20 but need to add pages for overflow

    return (
        <div className="search-container">
            <h4>Showing {itemAmnt} of {maxItems} results for "{query}"</h4>
            <div className="search-items">
                {filteredProducts.map((product, index) => (
                    <div key={index} className="search-item">
                        <img src={product.image} alt={product.name} loading="lazy" />
                        <div>
                            <h3><Link to={`/product/${product.id}`}>{product.name}</Link></h3>
                            <span>{formatPrice(product.price)}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}