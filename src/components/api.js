// src/api.js
export const fetchProducts = async () => {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    const data = await response.json();
    return data.map((product) => ({
      id: product.id,
      name: product.title,
      description: product.description,
      price: product.price,
      image: product.image
    }));
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

