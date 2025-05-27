const CartItem = require('../models/CartItem');

exports.addToCart = async (req, res) => {
  const { productId, quantity } = req.body;
  const cartItem = new CartItem({ userId: req.user.id, productId, quantity });
  await cartItem.save();
  res.status(201).json(cartItem);
};

exports.updateCartItem = async (req, res) => {
  const updated = await CartItem.findOneAndUpdate(
    { userId: req.user.id, productId: req.params.id },
    { quantity: req.body.quantity },
    { new: true }
  );
  if (!updated) return res.status(404).json({ message: 'Item not found' });
  res.json(updated);
};

exports.removeFromCart = async (req, res) => {
  await CartItem.findOneAndDelete({ userId: req.user.id, productId: req.params.id });
  res.json({ message: 'Item removed' });
};
