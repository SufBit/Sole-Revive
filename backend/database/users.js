const users = new Map(); // Use a Map to store user data

function addUser(username, password) {
  users.set(username, { username, password, subscribe: false, sellArray: [] });
}

function getUser(username) {
  return users.get(username);
}

function updateUserSubscription(username, isSubscribed) {
  const user = users.get(username);
  if (user) {
    user.subscribe = isSubscribed;
  }
}

function getAllSubscriptions() {
  // Filter and return users who are subscribed
  return Array.from(users.values()).filter(user => user.subscribe);
}

module.exports = {
  users,  
  addUser,
  getUser,
  updateUserSubscription,
  getAllSubscriptions,
};
