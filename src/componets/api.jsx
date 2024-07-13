import axios from 'axios';

const API_KEY = 'a2b3c82b119141f29f6eba3bee255df520240712163109353793';
const API_ID = 'JM8ITG6XKCX5X3C';
const BASE_URL = 'https://api.timbu.cloud';

// Function to fetch all products
export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/products`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

// Function to fetch product details by ID
export const fetchProductById = async (productId) => {
  try {
    const response = await axios.get(`${BASE_URL}/products/${productId}`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(`Error fetching product ${productId}:`, error);
    throw error;
  }
};

// Function to fetch categories
export const fetchCategories = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/categories`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};

// Function to add item to cart
export const addToCart = async (productId, quantity) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/cart`,
      {
        product_id: productId,
        quantity: quantity,
      },
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error adding to cart:', error);
    throw error;
  }
};

// Function to remove item from cart
export const removeFromCart = async (cartItemId) => {
  try {
    const response = await axios.delete(`${BASE_URL}/cart/${cartItemId}`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(`Error removing item ${cartItemId} from cart:`, error);
    throw error;
  }
};

// Function to clear all items from cart
export const clearCart = async () => {
  try {
    const response = await axios.delete(`${BASE_URL}/cart/all`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error clearing cart:', error);
    throw error;
  }
};

// Function to simulate checkout
export const checkout = async (billingDetails, cartItems) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/checkout`,
      {
        billing_details: billingDetails,
        cart_items: cartItems,
      },
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error in checkout:', error);
    throw error;
  }
};

// Function to process final checkout (simulated)
export const finalCheckout = async (orderDetails) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/final_checkout`,
      {
        order_details: orderDetails,
      },
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error in final checkout:', error);
    throw error;
  }
};

