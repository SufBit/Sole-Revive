let cartItems = [];

const addToCart = (item) => {
  cartItems.push(item);
};

const removeFromCart = (itemId) => {
    cartItems = cartItems.filter((item) => item.id !== itemId);
  };

const getCartItems = () => {
  return cartItems;
};

module.exports = { addToCart, removeFromCart, getCartItems };
