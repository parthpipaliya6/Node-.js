const Route = require('express');
const { getProducts, getProductId, postProduct, patchProduct, deleteProduct } = require('../Controller/Products.Control');

const ProductRoute = Route();

ProductRoute.get('/',getProducts);
ProductRoute.get('/:Productid',getProductId);
ProductRoute.post('/',postProduct);
ProductRoute.patch('/:Productid',patchProduct);
ProductRoute.delete('/:Productid',deleteProduct);

module.exports = ProductRoute;