const express = require('express');
const router = express.Router();
const authenticate = require('../middleware/authMiddleware');
const { addToCart, updateCartItem, removeFromCart } = require('../controllers/cartController');

router.post('/', addToCart);
// router.post('/', authenticate, addToCart);
router.put('/:id', authenticate, updateCartItem);
router.delete('/:id', authenticate, removeFromCart);

module.exports = router;
