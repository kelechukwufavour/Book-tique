import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductList = ({ organizationId, supplierId, categoryId, searchValue, sortingKey, startDt, endDt, page = 1, size = 50, currencyCode, reverseSort = true }) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {s
        const APP_ID = 'JM8ITG6XKCX5X3C'; // replace with your actual App ID
        const API_KEY = 'a2b3c82b119141f29f6eba3bee255df520240712163109353793'; // replace with your actual API Key
        const BASE_URL = 'https://api.timbu.cloud';

        const response = await axios.get(`${BASE_URL}/products`, {
          params: {
            organization_id: organizationId,
            supplier_id: supplierId,
            category_id: categoryId,
            search_value: searchValue,
            sorting_key: sortingKey,
            start_dt: startDt,
            end_dt: endDt,
            page: page,
            size: size,
            currency_code: currencyCode,
            reverse_sort: reverseSort,
            APP_ID: APP_ID,
            API_KEY: API_KEY
          }
        });

        setProducts(response.data.items);
      } catch (error) {
        console.error('Error fetching products:', error);
        setError(error);
      }
    };

    fetchProducts();
  }, [organizationId, supplierId, categoryId, searchValue, sortingKey, startDt, endDt, page, size, currencyCode, reverseSort]);

  if (error) {
    return <div>Error fetching products: {error.message}</div>;
  }

  if (!products.length) {
    return <div>No products available</div>;
  }

  return (
    <div className="product-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map(product => (
        <div key={product.id} className="bg-white p-4 shadow-md rounded-md">
          <img src={product.product_image[0]?.url || '/placeholder.png'} alt={product.name} className="w-full h-auto rounded-md mb-2" />
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <p className="text-gray-600">Price: ₦{product.selling_price}</p>
          {/* Add more product details as needed */}
          <button className="bg-[#6A5ACD] hover:bg-[#5245AD] text-white px-4 py-2 mt-2 rounded-md">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
