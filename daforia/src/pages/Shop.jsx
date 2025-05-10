import React from 'react';
import styled from 'styled-components';
import { FiCalendar, FiCoffee, FiMail } from 'react-icons/fi';

const PageWrapper = styled.div`
  min-height: 100vh;
  background-color: #f9f5f0;
  padding: 40px 20px;
`;

const ContentContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  padding: 40px;
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(139, 69, 19, 0.1);
`;

const BrandHeader = styled.div`
  margin-bottom: 30px;
`;

const BrandName = styled.h1`
  font-size: 2.8rem;
  color: #5d4037;
  margin-bottom: 10px;
  font-weight: 700;
  letter-spacing: 1px;
`;

const BrandTagline = styled.p`
  font-size: 1.1rem;
  color: #8d6e63;
  font-style: italic;
`;

const MainMessage = styled.h2`
  font-size: 2.2rem;
  color: #5d4037;
  margin: 30px 0;
  font-weight: 600;
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #5d4037;
  margin-bottom: 30px;
`;

const FeatureHighlights = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 40px 0;
  flex-wrap: wrap;
`;

const FeatureCard = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 25px;
  background-color: #fff8f0;
  border-radius: 8px;
  gap: 12px;
  
  svg {
    color: #8b4513;
    font-size: 1.5rem;
  }
  
  span {
    font-weight: 500;
    color: #5d4037;
  }
`;

const SignupForm = styled.div`
  margin-top: 40px;
  
  h3 {
    color: #5d4037;
    margin-bottom: 15px;
    font-size: 1.3rem;
  }
  
  .input-group {
    display: flex;
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;
  }
  
  input {
    padding: 12px 15px;
    border: 1px solid #d7ccc8;
    border-radius: 6px;
    min-width: 250px;
    font-size: 1rem;
  }
  
  button {
    padding: 0.8rem 2rem;
    background-color: #5d4037;
    color: white;
    border: none;
    border-radius: 30px;
    font-weight: bold;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.4s ease;
    position: relative;
    overflow: hidden;
    
    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 0;
      background: #8b4513;
      transition: height 0.4s ease;
      z-index: -1;
    }
    
    &:hover {
      color: white;
      transform: translateY(-2px);
      
      &::before {
        height: 100%;
      }
    }
  }
`;

const LaunchDate = styled.div`
  margin-top: 30px;
  font-weight: 500;
  color: #8b4513;
  font-size: 1.2rem;
`;

const Shop = () => {
  return (
    <PageWrapper>
      <ContentContainer>
        <BrandHeader>
          <BrandName>Daforia</BrandName>
          <BrandTagline>Where Dates meet specialty coffee</BrandTagline>
        </BrandHeader>
        
        <MainMessage>Something Extraordinary is Brewing</MainMessage>
        
        <Description>
          We're crafting unique coffee blends infused with premium Dates, 
          combining centuries-old traditions with modern coffee craftsmanship.
        </Description>
        
        <FeatureHighlights>
          <FeatureCard>
            <FiCalendar />
            <span>Launching June 2025</span>
          </FeatureCard>
        </FeatureHighlights>
        
        <SignupForm>
          <h3>Join our waiting list for early access</h3>
          <div className="input-group">
            <input type="email" placeholder="Your best email" />
            <button>Notify Me</button>
          </div>
        </SignupForm>

      </ContentContainer>
    </PageWrapper>
  );
};

export default Shop;