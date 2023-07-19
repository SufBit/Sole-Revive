let cartItems = [];

const addToCart = (item) => {
  cartItems.push(item);
};

const removeFromCart = (itemId) => {
  const index = cartItems.findIndex((item) => item.id === parseInt(itemId));
  if (index !== -1) {
    cartItems.splice(index, 1);
  }
};

const getCartItems = () => {
  return cartItems;
};

module.exports = { addToCart, removeFromCart, getCartItems };