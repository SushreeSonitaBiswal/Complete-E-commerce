// /* eslint-disable no-unused-vars */
// import React from 'react';

// const ProductsPage = () => {
//   const products = [
//     { id: 1, name: 'Product 1', price: '$10', description: 'Description of Product 1' },
//     { id: 2, name: 'Product 2', price: '$20', description: 'Description of Product 2' },
//     { id: 3, name: 'Product 3', price: '$30', description: 'Description of Product 3' },
//   ];

//   return (
//     <div>
//       <h1>Our Products</h1>
//       <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
//         {products.map((product) => (
//           <div
//             key={product.id}
//             style={{
//               border: '1px solid #ddd',
//               padding: '1rem',
//               borderRadius: '8px',
//               maxWidth: '200px',
//             }}
//           >
//             <h2>{product.name}</h2>
//             <p>{product.description}</p>
//             <p>{product.price}</p>
//             <button >Add to Cart</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductsPage;

/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const ProductsPage = () => {
  // Product data
  const products = [
    { id: 1, name: 'Product 1', price: '$10', description: 'Description of Product 1' },
    { id: 2, name: 'Product 2', price: '$20', description: 'Description of Product 2' },
    { id: 3, name: 'Product 3', price: '$30', description: 'Description of Product 3' },
  ];

  // State for cart
  const [cart, setCart] = useState([]);

  // Handle add to cart
  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <div>
      <h1>Our Products</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: '1px solid #ddd',
              padding: '1rem',
              borderRadius: '8px',
              maxWidth: '200px',
            }}
          >
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '2rem' }}>
        <h2>Cart</h2>
        <p>Total Items in Cart: {cart.length}</p>
        {cart.length > 0 && (
          <div>
            <ul>
              {cart.map((item, index) => (
                <li key={index}>
                  {item.name} - {item.price}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;

