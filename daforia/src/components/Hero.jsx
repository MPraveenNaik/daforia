import styled from 'styled-components';
import { theme } from '../theme';

const BannerContainer = styled.div`
  background-color: ${theme.colors.cream};
  padding: 5rem 2rem;
  text-align: center;
  position: relative;
  margin-top: 80px; /* Account for fixed header */
`;

const BannerContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const BannerTitle = styled.h1`
  font-size: 2.2rem;
  margin-bottom: 1rem;
  color: ${theme.colors.darkBrown};
  line-height: 1.3;
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 1.8rem;
  }
`;

const BannerSubtitle = styled.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  color: ${theme.colors.darkBrown};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const BannerButton = styled.a`  // Changed from styled(Link) to styled.a
  display: inline-block;
  background: ${theme.colors.darkBrown};
  color: ${theme.colors.white};
  padding: 12px 30px;
  border-radius: 30px;
  font-weight: bold;
  text-decoration: none;
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
    background: ${theme.colors.burntOrange};
    transition: height 0.4s ease;
    z-index: -1;
  }
  
  &:hover {
    color: ${theme.colors.white};
    
    &::before {
      height: 100%;
    }
  }
`;

const Hero = () => {
  return (
    <BannerContainer>
      <BannerContent>
        <BannerTitle>Ditch the Caffeine Guilt</BannerTitle>
        <BannerSubtitle>
          Experience our rich, full-bodied alternative that tastes like coffee but without the jitters
        </BannerSubtitle>
        <BannerButton 
          href="https://docs.google.com/forms/d/e/1FAIpQLSclPZWzV1qDtGe8kamSDut1xFXSW5WsowFN5UHSx9XwzXR-xA/viewform"
          target="_blank"
          rel="noopener noreferrer"
        >
          Book a Free Sample
        </BannerButton>
      </BannerContent>
    </BannerContainer>
  );
};

export default Hero;