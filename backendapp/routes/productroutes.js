const ProductController = require('../controllers/ProductController');
const express = require('express');

const productRouter = express.Router();
productRouter.post('/listItems', ProductController.listItems);
module.exports = productRouter;