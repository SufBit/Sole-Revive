const users = new Map(); // Use a Map to store user data

function addUser(username, password) {
  users.set(username, { username, password, subscribe: false });
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
  addUser,
  getUser,
  updateUserSubscription,
  getAllSubscriptions,
};
