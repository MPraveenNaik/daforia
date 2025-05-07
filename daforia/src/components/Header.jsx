import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #ffffff;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
  &.hidden {
    transform: translateY(-100%);
  }
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
  a {
    color: #333333;
    margin: 0 1rem;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;
    &:hover {
      color: #4a6bff;
    }
  }
`;

const CtaButton = styled.button`
  padding: 0.5rem 1.5rem;
  background-color: #4a6bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: #3a5bef;
    transform: translateY(-2px);
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    width: 25px;
    height: 3px;
    background-color: #333;
    margin: 3px 0;
    transition: all 0.3s ease;
  }
`;

const MobileMenu = styled.div`
  display: none;
  position: fixed;
  top: 70px;
  right: 0;
  width: 200px;
  background-color: white;
  box-shadow: -2px 2px 10px rgba(0,0,0,0.1);
  border-radius: 0 0 0 8px;
  overflow: hidden;
  z-index: 999;
  a {
    display: block;
    padding: 1rem;
    color: #333;
    text-decoration: none;
    border-bottom: 1px solid #eee;
    &:hover {
      background-color: #f5f5f5;
    }
  }
  button {
    width: 100%;
    padding: 1rem;
    background-color: #4a6bff;
    color: white;
    border: none;
    cursor: pointer;
  }
`;

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <Nav className={isVisible ? '' : 'hidden'}>
      <NavLinks>
        <Link to="/shop">Shop</Link>
        <Link to="/learn">Learn</Link>
      </NavLinks>
      
      <LogoContainer>
        <Link to="/">
          <Logo src="/logo192.png" alt="Company Logo" />
        </Link>
      </LogoContainer>
      
      <NavLinks>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <CtaButton as={Link} to="/sample">Free Sample</CtaButton>
      </NavLinks>
      
      <Hamburger onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </Hamburger>
      
      <MobileMenu style={{ display: isMobileMenuOpen ? 'block' : 'none' }}>
        <Link to="/shop">Shop</Link>
        <Link to="/learn">Learn</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <button as={Link} to="/sample">Free Sample</button>
      </MobileMenu>
    </Nav>
  );
};

export default Header;