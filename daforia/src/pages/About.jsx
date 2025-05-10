import styled from 'styled-components';
import { theme } from '../theme';

const AboutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 4rem 2rem;
  color: ${theme.colors.darkBrown};
`;

const AboutHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const AboutTitle = styled.h1`
  font-size: 2.5rem;
  color: ${theme.colors.darkBrown};
  position: relative;
  display: inline-block;
  
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

const AboutSubtitle = styled.p`
  font-size: 1.2rem;
  color: ${theme.colors.darkBrown};
  margin-top: 1rem;
`;

const StorySection = styled.section`
  background-color: ${theme.colors.white};
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  margin-bottom: 3rem;
`;

const StoryParagraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const Highlight = styled.span`
  color: ${theme.colors.burntOrange};
  font-weight: 500;
`;

const MissionSection = styled.section`
  background-color: ${theme.colors.cream};
  padding: 2rem;
  border-radius: 8px;
`;

const MissionTitle = styled.h2`
  color: ${theme.colors.darkBrown};
  text-align: center;
  margin-bottom: 1.5rem;
`;

const MissionList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const MissionItem = styled.li`
  position: relative;
  padding-left: 2rem;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  
  &::before {
    content: '•';
    color: ${theme.colors.burntOrange};
    font-size: 2rem;
    position: absolute;
    left: 0;
    top: -0.5rem;
  }
`;

const AboutPage = () => {
  return (
    <AboutContainer>
      <AboutHeader>
        <AboutTitle>Our Story</AboutTitle>
        <AboutSubtitle>From personal struggle to sustainable solution</AboutSubtitle>
      </AboutHeader>

      <StorySection>
        <StoryParagraph>
          <Highlight>"I wanted to do something sustainable, healthy, and solve something real."</Highlight>
        </StoryParagraph>
        
        <StoryParagraph>
          The idea for Daforia was born from watching my mother struggle with her tea habit despite doctor's warnings, and later experiencing similar issues myself. When she occasionally switched to coffee, she would lose sleep - a problem I recognized all too well during my time as a software developer at Microland.
        </StoryParagraph>
        
        <StoryParagraph>
          Drinking black coffee to power through long coding sessions, I found myself lying awake night after night, victim to caffeine's lingering effects. I noticed this pattern everywhere - people reaching for coffee or tea not because they wanted to, but because there were no better alternatives for that <Highlight>much-needed sip of relaxation</Highlight> during work sessions.
        </StoryParagraph>
        
        <StoryParagraph>
          These conventional options came with unwanted side effects: sleeplessness, lost appetite, and dependency. My search for a balanced alternative led me to date seed coffee - a revelation that could provide <Highlight>genuine relaxation without compromising health or natural rhythms</Highlight>.
        </StoryParagraph>
        
        <StoryParagraph>
          Daforia was created to solve this very real problem - to offer that comforting ritual of a warm drink without the negative consequences. It's the <Highlight>sustainable, healthy alternative</Highlight> we all deserved but didn't have.
        </StoryParagraph>
      </StorySection>

      <MissionSection>
        <MissionTitle>Our Mission</MissionTitle>
        <MissionList>
          <MissionItem>Create healthy alternatives to conventional caffeine drinks</MissionItem>
          <MissionItem>Preserve the coffee ritual without the side effects</MissionItem>
          <MissionItem>Promote sustainable consumption practices</MissionItem>
          <MissionItem>Improve work-life balance through better beverage choices</MissionItem>
          <MissionItem>Make wellness accessible in everyday habits</MissionItem>
        </MissionList>
      </MissionSection>
    </AboutContainer>
  );
};

export default AboutPage;