import '../Home.css';
import React from 'react';
import parseProducts from '../../../utils/parseProducts';
import { Link } from 'react-router-dom';
import formatPrice from '../../../utils/formatPrice';

export default function CategoryPreview() {
    const productData = parseProducts();

    const itemLimit = 6;

    return (
        <div className="categories">
            {Object.entries(productData).map(([type, products], index) => {
                return (
                    <section key={index} className="category-preview">
                        <div className="category">
                            <h2><Link to={"/" + type}>{type.charAt(0).toUpperCase() + type.slice(1)}</Link></h2>
                            <div className="line"></div>
                            <h3><Link to={"/" + type}>See More &gt;</Link></h3>
                        </div>
                        <div className="preview-items">
                            {products.slice(0, itemLimit).map(product => {
                                return (
                                    <div key={product.id} className="preview-item">
                                        <img src={product.image} alt={product.name}/>
                                        <h4><Link to={`/product/${product.id}`}>{product.name}</Link></h4>
                                        <span>{formatPrice(product.price)}</span>
                                    </div>
                                )
                            })}
                        </div>
                    </section>
                )
            })}
        </div>
    )
}