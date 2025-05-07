import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #eee;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  }
`;

const CardImage = styled.div`
  height: 200px;
  background: #f5f5f5;
  background-image: url(${props => props.image || '/placeholder-product.jpg'});
  background-size: cover;
  background-position: center;
`;

const CardContent = styled.div`
  padding: 1.5rem;
`;

const ProductName = styled.h3`
  margin-bottom: 0.5rem;
  color: #222;
`;

const ProductDescription = styled.p`
  margin-bottom: 1rem;
  color: #666;
  font-size: 0.9rem;
`;

const ProductPrice = styled.p`
  font-weight: bold;
  color: #4a6bff;
  margin-bottom: 1.5rem;
`;

const AddToCartButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: #4a6bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #3a5bef;
  }
`;

const ProductCard = ({ product }) => {
  return (
    <Card>
      <CardImage image={product.image} />
      <CardContent>
        <ProductName>{product.name}</ProductName>
        <ProductDescription>{product.description}</ProductDescription>
        <ProductPrice>${product.price.toFixed(2)}</ProductPrice>
        <AddToCartButton>Add to Cart</AddToCartButton>
      </CardContent>
    </Card>
  );
};

export default ProductCard;