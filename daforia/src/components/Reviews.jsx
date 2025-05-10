import styled from 'styled-components';
import { theme } from '../theme';

const ReviewsContainer = styled.section`
  background-color: ${theme.colors.white};
  padding: 3rem 0;
  overflow: hidden;
  border-top: 1px solid ${theme.colors.cream};
`;

const ReviewsTitle = styled.h2`
  text-align: center;
  color: ${theme.colors.darkBrown};
  margin-bottom: 2rem;
  font-size: 1.8rem;
`;

const ReviewsTrack = styled.div`
  display: flex;
  animation: scroll 30s linear infinite;
  width: calc(250px * 10); /* Width of all cards combined */

  @keyframes scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(calc(-250px * 5)); /* Move half the width */
  }
`;

const ReviewCard = styled.div`
  flex: 0 0 250px;
  background: ${theme.colors.cream};
  border-radius: 8px;
  padding: 1.5rem;
  margin: 0 1rem;
  box-shadow: 0 3px 10px rgba(0,0,0,0.08);
`;

const ReviewText = styled.p`
  font-style: italic;
  color: ${theme.colors.darkBrown};
  margin-bottom: 1rem;
`;

const Reviewer = styled.div`
  display: flex;
  align-items: center;
`;

const ReviewerImage = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${theme.colors.burntOrange};
  margin-right: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.white};
  font-weight: bold;
`;

const ReviewerInfo = styled.div``;

const ReviewerName = styled.h4`
  color: ${theme.colors.darkBrown};
  margin: 0;
  font-size: 0.9rem;
`;

const ReviewerTag = styled.span`
  color: ${theme.colors.burntOrange};
  font-size: 0.7rem;
`;

const CustomerReviews = () => {
  const reviews = [
    {
      id: 1,
      text: "This coffee alternative changed my mornings completely!",
      name: "Priya D.",
      initials: "PD",
      tag: "Verified Customer"
    },
    {
      id: 2,
      text: "I was skeptical but now I'm converted. No more caffeine crashes!",
      name: "Ravi K.",
      initials: "RK",
      tag: "Yoga Instructor"
    },
    {
      id: 3,
      text: "I used to have instant coffee but I tried this.It actually cutdown the sugar I add to coffee due to enhanced taste",
      name: "Swarna Latha",
      initials: "SL",
      tag: "Home maker"
    },
    {
      id: 4,
      text: "I tend to have lot coffee in breaks , I tried this there is no much difference then a normal coffee",
      name: "Lenka Pikun",
      initials: "LP",
      tag: "Senior lecturer, Mathematics"
    },
    {
      id: 5,
      text: "Perfect for my sensitive stomach. No acidity issues anymore.",
      name: "Neha R.",
      initials: "NR",
      tag: "Teacher"
    },
    // Duplicate the array to create seamless looping
    {
      id: 6,
      text: "This coffee alternative changed my mornings completely!",
      name: "Priya D.",
      initials: "PD",
      tag: "Verified Customer"
    },
    {
      id: 7,
      text: "I was skeptical but now I'm converted. No more caffeine crashes!",
      name: "Ravi K.",
      initials: "RK",
      tag: "Gym Instructor"
    },
    {
      id: 8,
      text: "Same great taste without the jitters. Highly recommend!",
      name: "Sneha M.",
      initials: "SM",
      tag: "Nutritionist"
    },
    {
      id: 9,
      text: "My productivity improved without the caffeine anxiety.",
      name: "Arjun P.",
      initials: "AP",
      tag: "Software Engineer"
    },
    {
      id: 10,
      text: "Perfect for my sensitive stomach. No acidity issues anymore.",
      name: "Neha R.",
      initials: "NR",
      tag: "Teacher"
    }
  ];

  return (
    <ReviewsContainer>
      <ReviewsTitle>What Our Customers Say</ReviewsTitle>
      <ReviewsTrack>
        {reviews.map((review) => (
          <ReviewCard key={review.id}>
            <ReviewText>"{review.text}"</ReviewText>
            <Reviewer>
              <ReviewerImage>{review.initials}</ReviewerImage>
              <ReviewerInfo>
                <ReviewerName>{review.name}</ReviewerName>
                <ReviewerTag>{review.tag}</ReviewerTag>
              </ReviewerInfo>
            </Reviewer>
          </ReviewCard>
        ))}
      </ReviewsTrack>
    </ReviewsContainer>
  );
};

export default CustomerReviews;