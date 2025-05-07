import styled from 'styled-components';
import ProductCard from '../../src/components/ProductCard';

const ShopContainer = styled.div`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ShopTitle = styled.h1`
  text-align: center;
  margin-bottom: 3rem;
  color: #222;
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const Shop = () => {
  const products = [
    {
      id: 1,
      name: 'Tastes Alike Coffee',
      description: 'Our signature caffeine-free alternative',
      price: 19.99,
    },
    // Add more products
  ];

  return (
    <ShopContainer>
      <ShopTitle>Our Products</ShopTitle>
      <ProductsGrid>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductsGrid>
    </ShopContainer>
  );
};

export default Shop;