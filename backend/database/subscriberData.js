const subscriptionsArray = [];

function addSubscription(subscription) {
    subscriptionsArray.push(subscription);
  }
  
  // Function to get all subscriptions
  function getAllSubscriptions() {
    return subscriptionsArray;
  }
  
  module.exports = {
    addSubscription,
    getAllSubscriptions,
  };
