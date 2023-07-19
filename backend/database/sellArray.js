// sellArray.js

// Initialize an empty array to store the items
const items = [];

// Function to add a new item to the array
function addItem(name, price, condition, image) {
  const newItem = {
    name: name,
    price: price,
    condition: condition,
    image: image,
  };

  items.push(newItem);
}

// Function to get all items
function getAllItems() {
  return items;
}

module.exports = {
  addItem,
  getAllItems,
};
