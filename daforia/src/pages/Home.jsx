import styled from 'styled-components';
import Hero from '../components/Hero';
import CustomerReviews from '../components/Reviews';
const HomeContainer = styled.main`
  padding-top: 70px;
`;

const Home = () => {
  return (
    <HomeContainer>
      <Hero />
      <CustomerReviews />

    </HomeContainer>
  );
};

export default Home;    