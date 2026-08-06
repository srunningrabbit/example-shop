import './Items.css';
import React from 'react';
import parseProducts from '../../utils/parseProducts';
import formatPrice from '../../utils/formatPrice';
import { Link } from 'react-router-dom';

export default function Items({ itemType }) {
    const itemData = parseProducts()[itemType];

    const itemAmnt = itemData.length;
    const maxItems = itemAmnt; // will be 20 but need to add pages for overflow

    return (
        <div className="item-container">
            <div className="item-heading">
                <h2>{itemType.charAt(0).toUpperCase() + itemType.slice(1)}</h2>
                <h4>Showing {maxItems} of {itemAmnt}</h4>
            </div>
            <div className="items">
                {
                    itemData.map(item => {
                        return (
                            <div key={item["id"]} className="item">
                                <img src={item["image"]} alt={item["name"]}/>
                                <h4><Link to={`/product/${item["id"]}`}>{item["name"]}</Link></h4>
                                <span>{formatPrice(item["price"])}</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}