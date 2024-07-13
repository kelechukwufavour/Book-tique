import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Product = ({ productId }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const API_KEY = 'a2b3c82b119141f29f6eba3bee255df520240712163109353793';
        const BASE_URL = 'https://api.timbu.cloud';

        const response = await axios.get(`${BASE_URL}/products/${productId}`, {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
          },
        });

        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [productId]);

  if (!product) {
    return null; 
  }

  return (
    <div className="bg-white p-4 shadow-md rounded-md">
      <img src={product.image} alt={product.title} className="w-full h-auto rounded-md mb-2" />
      <h3 className="text-lg font-semibold">{product.title}</h3>
      <p className="text-gray-600">Price: ₦{product.price}</p>
      {/* Add more product details as needed */}
      <button className="bg-[#6A5ACD] hover:bg-[#5245AD] text-white px-4 py-2 mt-2 rounded-md">
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
