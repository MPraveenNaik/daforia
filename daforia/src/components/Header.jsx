import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from '../theme';
const HeaderContainer = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
`;
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${theme.colors.white};
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
`;

const LogoContainer = styled.div`
  flex-grow: 1;
  text-align: center;
`;

const Logo = styled.img`
  height: 50px;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const NavLink = styled(Link)`
  color: ${theme.colors.darkBrown};
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 0;
  transition: color 0.3s ease;
  
  &:hover {
    color: ${theme.colors.lightOrange};
  }
`;

const CtaButton = styled.a`
  padding: 0.5rem 1.5rem;
  background-color: ${theme.colors.darkBrown};
  color: ${theme.colors.white};
  border: none;
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
    transform: translateY(-2px);
    
    &::before {
      height: 100%;
    }
  }
`;

const Header = () => {
  return (
    <Nav>
      <NavLinks>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/learn">Learn</NavLink>
      </NavLinks>
      
      <LogoContainer>
        <Link to="/">
          <Logo src="/logo192.png" alt="Daforia Logo" />
        </Link>
      </LogoContainer>
      
      <NavLinks>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/blogs">Blogs</NavLink>
        <CtaButton 
          href="https://docs.google.com/forms/d/e/1FAIpQLSclPZWzV1qDtGe8kamSDut1xFXSW5WsowFN5UHSx9XwzXR-xA/viewform"
          target="_blank"
          rel="noopener noreferrer"
        >
          Free Sample
        </CtaButton>
      </NavLinks>
    </Nav>
  );
};

export default Header;