# Product Page App

A modern eCommerce product page built using React. This app allows users to view products, add them to a cart, and proceed to checkout.

## Features
- Product Listing: Display a grid of products fetched from an API.
- Product Details: View more information about a product when clicked.
- Cart Management: Add and remove products to/from the cart.
- Checkout: A basic checkout interface to simulate purchasing.

## Tech Stack
- **React**: For building the user interface.
- **React Router**: For handling navigation between pages.
- **Context API**: For managing global state, such as cart items.
- **CSS**: For styling the components and layout.

## Project Structure
```
/src
  /components
    /ProductCard           # Displays individual product information
    /ProductGrid           # Displays a grid of products
    /ProductDetails        # Displays detailed info for a selected product
    /Cart                  # Cart component for managing added products
    /Checkout              # Checkout page for reviewing cart and proceeding to checkout
    /api.js                # File to simulate fetching products from an API
  /App.js                   # Main component containing routing logic
  /App.css                  # Global styles
```

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/asearer/product-page-app.git
   cd product-page-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Visit `http://localhost:3000` in your browser.

## Available Scripts

- `npm start`: Runs the app in development mode.
- `npm test`: Runs the test suite.
- `npm run build`: Builds the app for production.
- `npm run eject`: Removes the create-react-app build setup (not recommended unless you know what you're doing).

## Future Features (Optional)
- User authentication for saving cart items.
- Product search and filtering.
- A real API to fetch products.
- Additional payment integration for checkout (e.g., Stripe, PayPal).
