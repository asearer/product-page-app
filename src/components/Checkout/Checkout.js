import React, { useState, useEffect } from "react";
import { useCart } from '../../context/CartContext';
import "./Checkout.css";

const Checkout = () => {
  const { cartItems, clearCart } = useCart();
  const [details, setDetails] = useState({ name: "", address: "", email: "", phone: "" });
  const [paymentMethod, setPaymentMethod] = useState("paystack");

  // Ensure cartItems is always an array (defaults to empty array if undefined)
  const items = cartItems || [];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handlePayment = () => {
    if (paymentMethod === "paystack") {
      initiatePaystackPayment();
    } else if (paymentMethod === "flutterwave") {
      initiateFlutterwavePayment();
    }
  };

  const initiatePaystackPayment = () => {
    const handler = window.PaystackPop.setup({
      key: "your-paystack-public-key", // Replace with your Paystack public key
      email: details.email,
      amount: total * 100, // Paystack requires the amount in kobo (100 kobo = 1 NGN)
      currency: "NGN", // Change this to your preferred currency
      callback: function (response) {
        // Handle successful payment here
        alert("Payment Successful! Reference: " + response.reference);
        clearCart(); // Clear cart after payment
      },
      onClose: function () {
        alert("Payment was cancelled.");
      },
    });
    handler.openIframe(); // Opens Paystack payment modal
  };

  const initiateFlutterwavePayment = () => {
    const handler = window.FlutterwaveCheckout({
      public_key: "your-flutterwave-public-key", // Replace with your Flutterwave public key
      tx_ref: new Date().getTime(), // Transaction reference, you can use any unique value
      amount: total,
      currency: "NGN", // Update this with your desired currency
      email: details.email,
      phone_number: details.phone, // Add a phone field to the details if required
      redirect_url: "your-redirect-url", // URL where user will be redirected after payment
      order_id: "unique_order_id", // Optional order ID to associate with the payment
      callback: function (data) {
        // Handle success callback
        if (data.status === "successful") {
          alert("Payment successful! Reference: " + data.tx_ref);
          clearCart(); // Clear cart after successful payment
        } else {
          alert("Payment failed or was cancelled.");
        }
      },
    });
    handler.open();
  };

  const handleCheckout = () => {
    if (details.name && details.address && details.email) {
      alert("Order placed successfully!");
      // Trigger payment processing here after collecting user details
      handlePayment();
    } else {
      alert("Please fill in all fields.");
    }
  };

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  useEffect(() => {
    const scriptPaystack = document.createElement("script");
    scriptPaystack.src = "https://js.paystack.co/v1/inline.js";
    scriptPaystack.async = true;
    document.body.appendChild(scriptPaystack);

    const scriptFlutterwave = document.createElement("script");
    scriptFlutterwave.src = "https://checkout.flutterwave.com/v3.js";
    scriptFlutterwave.async = true;
    document.body.appendChild(scriptFlutterwave);

    return () => {
      document.body.removeChild(scriptPaystack);
      document.body.removeChild(scriptFlutterwave);
    };
  }, []);

  return (
    <div className="checkout">
      <h1>Checkout</h1>
      <div className="cart-summary">
        <h2>Cart Summary</h2>
        {items.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          items.map((item) => (
            <div key={item.id}>
              <p>{item.name}</p>
              <p>${item.price.toFixed(2)} x {item.quantity}</p>
            </div>
          ))
        )}
        <h3>Total: ${total.toFixed(2)}</h3>
      </div>
      <div className="billing-details">
        <h2>Billing Details</h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={details.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={details.address}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={details.email}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={details.phone}
          onChange={handleInputChange}
        />
        <button onClick={handleCheckout}>Place Order</button>
      </div>
      <div className="payment-method">
        <h3>Select Payment Method</h3>
        <select onChange={(e) => setPaymentMethod(e.target.value)} value={paymentMethod}>
          <option value="paystack">Paystack</option>
          <option value="flutterwave">Flutterwave</option>
        </select>
      </div>
    </div>
  );
};

export default Checkout;





