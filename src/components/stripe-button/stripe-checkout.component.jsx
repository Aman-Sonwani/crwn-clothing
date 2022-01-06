import React from "react";
import StripeCheckout from "react-stripe-checkout";

const  StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishablekey = 'pk_test_51KEoTWSB3v6Y1WWHJS6aMhdj0YYkJ44TFohzWsJyq4X3J5hi1tfX6o7B4y6op7dSTqGCUJyLaCv5ls2urhJuMwg500nKd6qs7N';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }

    return (
        <StripeCheckout
            label="Pay Now"
            name="CRWN Clothing Ltd."
            billingAddress
            shippingAddress
            image="https://sendeyo.com/updownload/file/script/d/f3eb2117da"
            description={`Your Total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishablekey}
        />
    );
};

export default StripeCheckoutButton;