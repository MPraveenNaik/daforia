import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Learn from './pages/Learn';
import Contact from './pages/Contact';
import About from './pages/About';
import SampleForm from './components/SampleFrorm';

const AppContainer = styled.div`
  font-family: 'Arial', sans-serif;
  color: #333;
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/sample" element={<SampleForm />} />
        </Routes>
      </AppContainer>
    </Router>
  );
}

export default App;