/* 
    @param {Array} product
    @returns {numbre} totalPrice
*/

function totalPrice(products) {
    let totalPrice = 0;
    products.forEach(product => totalPrice += (product.price * product.cantidad) );
    return totalPrice;
}

function totalProductsInCart(products) {
    let totalProducts = 0;
    products.forEach(product => totalProducts += product.cantidad);
    return totalProducts;
}

export {totalPrice, totalProductsInCart};