import '../../index.css'; 

const Exercise19 = () => {
  const products = [
    {
      name: 'Product 1',
      description: 'Description of product 1',
      price: '$10.99',
    },
    {
      name: 'Product 2',
      description: 'Description of product 2',
      price: '$24.99',
    },
    {
      name: 'Product 3',
      description: 'Description of product 3',
      price: '$15.49',
    },
  ];

  return (
    <div>
      {products.map((product, index) => (
        <div className="product-container" key={index}>
          <div className="product-name">{product.name}</div>
          <div className="product-description">{product.description}</div>
          <div className="product-price">{product.price}</div>
        </div>
      ))}
    </div>
  );
};

export default Exercise19;