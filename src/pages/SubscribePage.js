import React from "react"

export const SubscribePage = () => {
    return (
        <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '80vh', // Adjust the height if needed
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
          <h4 style={{ textAlign: 'center' }}>Subcribe now for only 5$ a month 
          to receive exclusive deals on all releases and priority access to new shoe drops</h4>
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
      >
        Subscribe
      </button>
      </div>
)}