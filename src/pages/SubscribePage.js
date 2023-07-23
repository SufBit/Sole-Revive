// import React from "react";

// export const SubscribePage = ({ authToken }) => {
//   const handleSubscribe = () => {
//     // Perform subscribe API call using the authToken
//     fetch('http://localhost:3001/subscribers', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${authToken}`,
//       },
//       body: JSON.stringify({}),
//     })
//       .then((response) => {
//         if (response.ok) {
//           // Display success message
//           alert('Successfully subscribed!');
//         } else {
//           // Handle subscribe error, display error message
//           alert('Failed to subscribe');
//         }
//       })
//       .catch((error) => {
//         // Handle error
//         console.error(error);
//       });
//   };

//   return (
//     <div
//       style={{
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//         height: '80vh', // Adjust the height if needed
//       }}
//     >
//       <div
//         style={{
//           width: '200px',
//           height: '200px',
//           border: '1px solid black',
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//         }}
//       >
//         <h4 style={{ textAlign: 'center' }}>
//           Subscribe now for only 5$ a month to receive exclusive deals on all releases and priority access to new shoe drops
//         </h4>
//       </div>
//       <button
//         style={{
//           marginTop: '20px',
//           padding: '10px 20px',
//           backgroundColor: 'blue',
//           color: 'white',
//           border: 'none',
//           borderRadius: '5px',
//           cursor: 'pointer',
//         }}
//         onClick={handleSubscribe}
//       >
//         Subscribe
//       </button>
//     </div>
//   );
// };

import React from "react";

export const SubscribePage = ({ authToken, isSubscribed, setIsSubscribed }) => {
  const token = localStorage.getItem('authToken');
  console.log('AuthToken:', token);
  
  const handleSubscribe = () => {
    // Determine the action based on the current subscription status
    const action = isSubscribed ? 'unsubscribe' : 'subscribe';
    
    // Perform subscribe/unsubscribe API call using the authToken
    fetch('http://localhost:3001/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`, // Include the authToken in the request header
      },
      body: JSON.stringify({ action }), // Include the action in the request body
    })
      .then((response) => {
        if (response.ok) {
          // Display success message
          setIsSubscribed(!isSubscribed); // Toggle the isSubscribed state
          alert(`Successfully ${isSubscribed ? 'unsubscribed' : 'subscribed'}!`);
        } else {
          // Handle subscription/unsubscription error, display error message
          alert(`Failed to ${isSubscribed ? 'unsubscribe' : 'subscribe'}`);
        }
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80vh',
      }}
    >
      <div
        style={{
          width: '200px',
          height: '200px',
          border: '1px solid black',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h4 style={{ textAlign: 'center' }}>
          Subscribe now for only 5$ a month to receive exclusive deals on all releases and priority access to new shoe drops
        </h4>
      </div>
      <button
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: 'blue',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
        onClick={handleSubscribe}
      >
        {isSubscribed ? 'Unsubscribe' : 'Subscribe'}
      </button>
    </div>
  );
};
