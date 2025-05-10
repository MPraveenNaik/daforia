import styled from 'styled-components';
import { useState } from 'react';
import { theme } from '../theme';

const LearnContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const SectionTitle = styled.h2`
  color: ${theme.colors.darkBrown};
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background-color: ${theme.colors.burntOrange};
  }
`;

const RecipeCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const RecipeCard = styled.div`
  background: ${theme.colors.white};
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const RecipeImage = styled.div`
  height: 200px;
  background: ${props => `url(${props.bgImage}) center/cover`};
  position: relative;
  
  &::after {
    content: '${props => props.time}';
    position: absolute;
    bottom: 10px;
    right: 10px;
    background: ${theme.colors.burntOrange};
    color: white;
    padding: 0.3rem 0.8rem;
    border-radius: 20px;
    font-size: 0.8rem;
  }
`;

const RecipeContent = styled.div`
  padding: 1.5rem;
`;

const RecipeTitle = styled.h3`
  color: ${theme.colors.darkBrown};
  margin-top: 0;
`;

const RecipeIngredients = styled.ul`
  padding-left: 1.2rem;
  color: ${theme.colors.darkBrown};
`;

const RecipeSteps = styled.ol`
  padding-left: 1.2rem;
  color: ${theme.colors.darkBrown};
`;

const FaqSection = styled.div`
  margin-top: 4rem;
`;

const FaqItem = styled.div`
  margin-bottom: 1rem;
  border-bottom: 1px solid ${theme.colors.cream};
`;

const FaqQuestion = styled.button`
  width: 100%;
  text-align: left;
  padding: 1rem 0;
  background: none;
  border: none;
  color: ${theme.colors.darkBrown};
  font-weight: bold;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  &:focus {
    outline: none;
  }
`;

const FaqAnswer = styled.div`
  padding-bottom: 1rem;
  color: ${theme.colors.darkBrown};
  display: ${props => props.isOpen ? 'block' : 'none'};
`;

const LearnPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const recipes = [
    {
      id: 1,
      title: "Hot Daforia Coffee",
      time: "5 mins",
      image: "/hot-coffee.jpg",
      ingredients: [
        "1 cup milk",
        "10g Daforia coffee powder",
        "Sugar to taste (less than usual)"
      ],
      steps: [
        "Boil milk in a saucepan",
        "Add Daforia coffee powder",
        "Simmer for 2-3 minutes while stirring",
        "Add sugar (about 20% less than you'd normally use)",
        "Strain and serve hot"
      ]
    },
    {
      id: 2,
      title: "Black Daforia Coffee",
      time: "3 mins",
      image: "/black-coffee.jpg",
      ingredients: [
        "1 cup water",
        "10g Daforia coffee powder",
        "Sugar to taste (optional)"
      ],
      steps: [
        "Bring water to a boil",
        "Add Daforia coffee powder",
        "Simmer for 1 minute",
        "Add sugar if desired (much less than regular coffee)",
        "Strain and serve"
      ]
    },
    {
      id: 3,
      title: "Iced Daforia Coffee",
      time: "7 mins",
      image: "/cold-coffee.jpg",
      ingredients: [
        "1 cup milk",
        "10g Daforia coffee powder",
        "1 tsp sugar",
        "Ice cubes",
        "Vanilla ice cream (optional)"
      ],
      steps: [
        "Prepare hot Daforia coffee as above",
        "Let it cool to room temperature",
        "Add sugar and stir until dissolved",
        "Fill a glass with ice cubes",
        "Pour coffee over ice",
        "Top with a scoop of ice cream if desired"
      ]
    }
  ];

  const faqs = [
    {
      question: "Why use less sugar with Daforia?",
      answer: "Daforia coffee naturally has a sweeter, smoother taste profile compared to regular coffee, so you need less sugar to achieve the same level of sweetness."
    },
    {
      question: "Can I make Daforia in a coffee machine?",
      answer: "Yes! Use the same amount you would for regular coffee, but you may want to reduce the brewing time slightly as Daforia extracts faster."
    },
    {
      question: "Is Daforia suitable for cold brew?",
      answer: "Absolutely. Use 15g per cup of water and steep for 12-16 hours in the refrigerator for a delicious cold brew concentrate."
    },
    {
      question: "How does Daforia compare to decaf?",
      answer: "Daforia is naturally caffeine-free, unlike decaf which still contains trace amounts. It also retains more of coffee's original flavor compounds."
    }
  ];

  return (
    <LearnContainer>
      <SectionTitle>Daforia Coffee Recipes</SectionTitle>
      
      <RecipeCards>
        {recipes.map(recipe => (
          <RecipeCard key={recipe.id}>
            <RecipeImage bgImage={recipe.image} time={recipe.time} />
            <RecipeContent>
              <RecipeTitle>{recipe.title}</RecipeTitle>
              <h4>Ingredients:</h4>
              <RecipeIngredients>
                {recipe.ingredients.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </RecipeIngredients>
              <h4>Preparation:</h4>
              <RecipeSteps>
                {recipe.steps.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </RecipeSteps>
            </RecipeContent>
          </RecipeCard>
        ))}
      </RecipeCards>

      <FaqSection>
        <SectionTitle>FAQs</SectionTitle>
        {faqs.map((faq, index) => (
          <FaqItem key={index}>
            <FaqQuestion onClick={() => toggleFaq(index)}>
              {faq.question}
              <span>{activeFaq === index ? '−' : '+'}</span>
            </FaqQuestion>
            <FaqAnswer isOpen={activeFaq === index}>
              {faq.answer}
            </FaqAnswer>
          </FaqItem>
        ))}
      </FaqSection>
    </LearnContainer>
  );
};

export default LearnPage;