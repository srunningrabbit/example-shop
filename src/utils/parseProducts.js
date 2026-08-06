import productsData from '../data/products.json';

export default function parseProducts() {
    const parsedProducts = productsData.reduce((accumulator, currentProduct) => {
        const type = currentProduct.type;
        if (!accumulator[type]) {
            accumulator[type] = [];
        }
        accumulator[type].push(currentProduct);
        return accumulator;
    }, {});

    return parsedProducts;
}