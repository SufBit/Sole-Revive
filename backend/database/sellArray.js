const { users } = require('./users');

// Function to add a new item to the user's sellArray
function addItem(username, name, price, condition, image) {
  const newItem = {
    name: name,
    price: price,
    condition: condition,
    image: image,
  };

  console.log('Users map:', users);

  const user = users.get(username);
  if (user) {
    // Check if the user exists in the users map
    const existingUser = users.get(username);
    if (existingUser) {
      existingUser.sellArray.push(newItem);
      console.log('Added item to sellArray:', newItem);
    } else {
      console.log('User not found:', username);
    }
  } else {
    console.log('User not found:', username);
  }
}

// Function to get all items for a specific user
function getAllItemsForUser(username) {
  const user = users.get(username);
  return user ? user.sellArray : [];
}

module.exports = {
  addItem,
  getAllItemsForUser,
};
