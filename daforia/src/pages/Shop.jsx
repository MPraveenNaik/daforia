import styled from 'styled-components';
import { FiHeart, FiShoppingCart } from 'react-icons/fi';
import ProductCard from '../../src/components/ProductCard';

const ShopHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1.5rem;
  padding: 1rem 0;
  margin-bottom: 2rem;
  border-bottom: 1px solid #eee;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  color: #222;
  transition: all 0.2s ease;
  
  &:hover {
    color: #d35400; /* Changed from theme.colors.primary to a concrete color */
    transform: translateY(-1px);
  }
`;

const ShopContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ShopTitle = styled.h1`
  text-align: center;
  margin-bottom: 3rem;
  color: #222;
  font-weight: 600;
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
    <>
      <ShopHeader>
        <IconButton aria-label="Wishlist">
          <FiHeart size={20} />
          <span>Wishlist</span>
        </IconButton>
        <IconButton aria-label="Cart">
          <FiShoppingCart size={20} />
          <span>Cart</span>
        </IconButton>
      </ShopHeader>
      
      <ShopContainer>
        <ShopTitle>Our Products</ShopTitle>
        <ProductsGrid>
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductsGrid>
      </ShopContainer>
    </>
  );
};

export default Shop;