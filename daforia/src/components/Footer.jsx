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

const ContactInfo = styled.div`
  p {
    margin-bottom: 0.8rem;
    display: flex;
    align-items: center;
    
    svg, i {
      margin-right: 10px;
      color: ${theme.colors.burntOrange};
    }
  }
`;

const DistributorCallout = styled.div`
  background-color: ${theme.colors.cream};
  padding: 1rem;
  border-radius: 4px;
  margin-top: 1rem;
  
  h4 {
    color: ${theme.colors.burntOrange};
    margin-bottom: 0.5rem;
  }
  
  p {
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }
  
  a {
    color: ${theme.colors.darkBrown};
    font-weight: bold;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid ${theme.colors.cream};
  color: ${theme.colors.darkBrown};
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
            <li><FooterLink to="/blogs">Blogs</FooterLink></li>
          </FooterLinks>
        </FooterSection>

        <FooterSection>
          <h3>Support</h3>
          <FooterLinks>
            <li><FooterLink to="/faq">FAQs</FooterLink></li>
            <li><FooterLink to="/shipping">Shipping Policy</FooterLink></li>
            <li><FooterLink to="/returns">Returns & Refunds</FooterLink></li>
            <li><FooterLink to="/contact">Contact Us</FooterLink></li>
          </FooterLinks>
        </FooterSection>

        <FooterSection>
          <h3>Contact Us</h3>
          <ContactInfo>
            <p><i className="fas fa-map-marker-alt"></i> Hyderabad, Telangana</p>
            <p><i className="fas fa-phone-alt"></i> +91 8500 419 416</p>
            <p><i className="fas fa-envelope"></i>praveenworks416@gmail.com</p>
          </ContactInfo>
        </FooterSection>

        <FooterSection>
          <h3>Become a Distributor</h3>
          <DistributorCallout>
            <h4>We're Expanding!</h4>
            <p>Looking for distributors across Andhra Pradesh & Telangana</p>
            <p>Contact us at <a href="tel:+918500419416">+91 8500 419 416</a></p>
            <p>or email <a href="mailto:distributors@daforiacoffee.com">praveenworks416@gmail.com</a></p>
          </DistributorCallout>
        </FooterSection>
      </FooterContent>

      <Copyright>
        &copy; {new Date().getFullYear()} Daforia Coffee Co. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;