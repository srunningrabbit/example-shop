import '../Items/Items.css';
import './Patterns.css';
import parseProducts from "../../utils/parseProducts";
import { Link } from 'react-router-dom';
import formatPrice from '../../utils/formatPrice';

export default function Patterns() {
    const patternData = parseProducts()['patterns'];

    const itemAmnt = patternData.length;
    const maxItems = itemAmnt; // will be 20 but need to add pages for overflow

    return (
        <div className="item-container">
            <div className="item-heading">
                <h2>Patterns</h2>
                <h4>Showing {maxItems} of {itemAmnt}</h4>
            </div>
            <div className="pattern-items">
                {
                    patternData.map(pattern => {
                        return (
                            <div key={pattern["id"]} className="pattern-item">
                                <img src={pattern["image"]} alt={pattern["name"]}/>
                                <div>
                                    <h4><Link to={`/product/${pattern["id"]}`}>{pattern["name"]}</Link></h4>
                                    <span>{formatPrice(pattern["price"])}</span>
                                    <span>{pattern["description"]}</span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}