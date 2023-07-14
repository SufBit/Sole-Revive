import React from "react"; 

export const OrderConformation = () => {
    return (
        <div style = {{display: 'grid',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        padding: '5rem'
        }}>
            <h2 style={{fontWeight: 'bold'}}>Thank you for shopping with us!</h2>
            <h4 style = {{marginTop: '1rem', marginBottom: '3rem'}}>A conformation email has been sent to <i>email</i></h4>
            <div style={{padding: '15px', border: '1px solid black', lineHeight: '2.5'}}>
                <p>Order Number: <i>######</i></p>
                <p>Order Total: <i>$$.$$</i></p>
                <p>Shipping To: <i>Address</i></p>
                <p>Delivered By: <i>Date</i></p>
            </div>
        </div>
    )
}