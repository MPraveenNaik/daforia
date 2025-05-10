import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from '../theme';

const FooterContainer = styled.footer`
  background-color: ${theme.colors.white};
  color: ${theme.colors.darkBrown};
  padding: 3rem 2rem;
  margin-top: 4rem;
  border-top: 2px solid ${theme.colors.cream};
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
`;

const FooterSection = styled.div`
  h3 {
    color: ${theme.colors.burntOrange};
    margin-bottom: 1.5rem;
    font-size: 1.2rem;
    position: relative;
    padding-bottom: 8px;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 50px;
      height: 2px;
      background-color: ${theme.colors.lightOrange};
    }
  }
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  
  li {
    margin-bottom: 0.8rem;
  }
`;

const FooterLink = styled(Link)`
  color: ${theme.colors.darkBrown};
  text-decoration: none;
  transition: color 0.3s ease;
  position: relative;
  padding-bottom: 2px;
  
  &:hover {
    color: ${theme.colors.burntOrange};
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: ${theme.colors.burntOrange};
    }
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialIcon = styled.a`
  color: ${theme.colors.darkBrown};
  font-size: 1.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    color: ${theme.colors.burntOrange};
    transform: translateY(-2px);
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid ${theme.colors.cream};
  color: ${theme.colors.darkBrown};
`;

const NewsletterForm = styled.form`
  display: flex;
  margin-top: 1rem;
  
  input {
    flex: 1;
    padding: 0.5rem;
    border: 1px solid ${theme.colors.cream};
    border-radius: 4px 0 0 4px;
    font-size: 0.9rem;
  }
  
  button {
    padding: 0.5rem 1rem;
    background-color: ${theme.colors.darkBrown};
    color: ${theme.colors.white};
    border: none;
    border-radius: 0 4px 4px 0;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:hover {
      background-color: ${theme.colors.burntOrange};
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>Quick Links</h3>
          <FooterLinks>
            <li><FooterLink to="/">Home</FooterLink></li>
            <li><FooterLink to="/shop">Shop</FooterLink></li>
            <li><FooterLink to="/about">About Us</FooterLink></li>
            <li><FooterLink to="/contact">Contact</FooterLink></li>
          </FooterLinks>
        </FooterSection>

        <FooterSection>
          <h3>Our Products</h3>
          <FooterLinks>
            <li><FooterLink to="/shop/coffee-alternatives">Coffee Alternatives</FooterLink></li>
            <li><FooterLink to="/shop/bundles">Bundles</FooterLink></li>
            <li><FooterLink to="/shop/limited-editions">Limited Editions</FooterLink></li>
            <li><FooterLink to="/shop/gift-cards">Gift Cards</FooterLink></li>
          </FooterLinks>
        </FooterSection>

        <FooterSection>
          <h3>Support</h3>
          <FooterLinks>
            <li><FooterLink to="/faq">FAQs</FooterLink></li>
            <li><FooterLink to="/shipping">Shipping Policy</FooterLink></li>
            <li><FooterLink to="/returns">Returns & Refunds</FooterLink></li>
            <li><FooterLink to="/contact">Contact Support</FooterLink></li>
          </FooterLinks>
        </FooterSection>

        <FooterSection>
          <h3>Newsletter</h3>
          <p>Subscribe for updates and special offers</p>
          <NewsletterForm>
            <input type="email" placeholder="Your email" />
            <button type="submit">Join</button>
          </NewsletterForm>
          <SocialIcons>
            <SocialIcon href="#"><i className="fab fa-instagram"></i></SocialIcon>
            <SocialIcon href="#"><i className="fab fa-facebook"></i></SocialIcon>
            <SocialIcon href="#"><i className="fab fa-twitter"></i></SocialIcon>
          </SocialIcons>
        </FooterSection>
      </FooterContent>

      <Copyright>
        &copy; {new Date().getFullYear()} Daforia Coffee Co. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;