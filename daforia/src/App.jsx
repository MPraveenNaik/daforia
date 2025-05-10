import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from './theme';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Learn from './pages/Learn';
import Blogs from './pages/Blogs';
import About from './pages/About';
import SampleForm from './components/SampleFrorm';

// Global app container with theme colors
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: ${theme.fonts.primary};
  color: ${theme.colors.darkBrown};
  background-color: ${theme.colors.cream};
`;

// Main content wrapper that pushes footer down
const MainContent = styled.main`
  flex: 1;
  padding-top: 80px; // Accounts for fixed header
  padding-bottom: 2rem;
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <Header />
        
        <MainContent>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/about" element={<About />} />
            <Route path="/sample" element={<SampleForm />} />
          </Routes>
        </MainContent>
        
        <Footer />
      </AppContainer>
    </Router>
  );
}

export default App;