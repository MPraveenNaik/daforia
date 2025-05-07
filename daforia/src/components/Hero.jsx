import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeroSection = styled.section`
  display: flex;
  min-height: 80vh;
  align-items: center;
  padding: 6rem 2rem 2rem;
  background: linear-gradient(to right, #f9f9f9 50%, #eaeaea 50%);
  
  @media (max-width: 768px) {
    flex-direction: column;
    background: #f9f9f9;
  }
`;

const HeroContent = styled.div`
  flex: 1;
  padding: 2rem;
`;

const HeroTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #222;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: #555;
`;

const HeroButton = styled(Link)`
  display: inline-block;
  background: #4a6bff;
  color: white;
  padding: 12px 30px;
  border-radius: 30px;
  font-weight: bold;
  transition: all 0.3s ease;
  
  &:hover {
    background: #3a5bef;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(58, 91, 239, 0.3);
  }
`;

const HeroImage = styled.div`
  flex: 1;
  min-height: 400px;
  background: url('/hero-image.jpg') center/cover;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  
  @media (max-width: 768px) {
    width: 100%;
    min-height: 300px;
    margin-top: 2rem;
  }
`;

const Hero = () => {
  return (
    <HeroSection>
      <HeroContent>
        <HeroTitle>Ditch the caffeine guilt</HeroTitle>
        <HeroSubtitle>Which tastes alike, stimulates alike and much more</HeroSubtitle>
        <HeroButton to="/sample">Book a Free Sample</HeroButton>
      </HeroContent>
      <HeroImage />
    </HeroSection>
  );
};

export default Hero;