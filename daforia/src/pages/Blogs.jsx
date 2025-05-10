import styled from 'styled-components';
import { useState } from 'react';
import { theme } from '../theme';

const BlogsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
`;

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const PageTitle = styled.h1`
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

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const BlogCard = styled.div`
  background: ${theme.colors.white};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const BlogImage = styled.div`
  height: 200px;
  background: ${props => `url(${props.bgImage}) center/cover`};
`;

const BlogContent = styled.div`
  padding: 1.5rem;
`;

const BlogTitle = styled.h3`
  color: ${theme.colors.darkBrown};
  margin-top: 0;
  margin-bottom: 0.5rem;
`;

const BlogMeta = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  color: ${theme.colors.burntOrange};
  font-size: 0.9rem;
`;

const BlogExcerpt = styled.p`
  color: ${theme.colors.darkBrown};
  line-height: 1.6;
`;

const ReadMoreButton = styled.button`
  background: transparent;
  color: ${theme.colors.burntOrange};
  border: none;
  font-weight: bold;
  cursor: pointer;
  padding: 0.5rem 0;
  margin-top: 1rem;
  display: inline-flex;
  align-items: center;
  
  &::after {
    content: '→';
    margin-left: 0.5rem;
    transition: transform 0.3s ease;
  }
  
  &:hover::after {
    transform: translateX(3px);
  }
`;

const FullArticle = styled.div`
  background: ${theme.colors.white};
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  margin-bottom: 2rem;
`;

const BackButton = styled.button`
  background: ${theme.colors.darkBrown};
  color: ${theme.colors.white};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  
  &::before {
    content: '←';
    margin-right: 0.5rem;
  }
  
  &:hover {
    background: ${theme.colors.burntOrange};
  }
`;

const BlogsPage = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const blogs = [
    {
      id: 1,
      title: "The Hidden Costs of Your Morning Coffee",
      image: "/blog-coffee-effects.jpg",
      date: "May 15, 2023",
      readTime: "5 min read",
      excerpt: "Discover how your daily caffeine habit might be affecting more than just your sleep cycle.",
      content: `
        <p>Most of us can't imagine starting our day without that cup of coffee. But what if your morning ritual is secretly working against you?</p>
        
        <h3>The Caffeine Rollercoaster</h3>
        <p>Traditional coffee creates spikes and crashes in your energy levels that can...</p>
        
        <h3>Digestive Disruptions</h3>
        <p>The acidity in coffee can irritate your stomach lining, leading to...</p>
        
        <h3>A Better Alternative</h3>
        <p>Date seed coffee provides the same comforting ritual without these hidden costs...</p>
      `
    },
    {
      id: 2,
      title: "5 Signs You Should Switch to Caffeine-Free Alternatives",
      image: "/blog-signs-to-switch.jpg",
      date: "June 2, 2023",
      readTime: "4 min read",
      excerpt: "Your body might be telling you it's time for a change. Are you listening?",
      content: `
        <p>Persistent fatigue, sleep troubles, and other subtle signs your body needs a break from caffeine...</p>
        
        <h3>1. Afternoon Energy Crashes</h3>
        <p>If you're consistently hitting a wall at 3pm, your coffee habit might be to blame...</p>
        
        <h3>2. Increased Anxiety</h3>
        <p>Caffeine stimulates your nervous system in ways that can exacerbate stress...</p>
      `
    },
    {
      id: 3,
      title: "The Sustainable Choice: How Date Seeds Reduce Waste",
      image: "/blog-sustainability.jpg",
      date: "June 18, 2023",
      readTime: "6 min read",
      excerpt: "Discover how choosing date seed coffee helps the planet with every sip.",
      content: `
        <p>In a world of single-use coffee pods and deforestation for coffee plantations, date seeds offer...</p>
        
        <h3>From Waste to Wonder</h3>
        <p>Date seeds are typically discarded after fruit processing. By repurposing them...</p>
        
        <h3>Lower Carbon Footprint</h3>
        <p>Traditional coffee travels thousands of miles to reach your cup, while date seeds...</p>
      `
    }
  ];

  return (
    <BlogsContainer>
      {!selectedBlog ? (
        <>
          <PageHeader>
            <PageTitle>Daforia Blog</PageTitle>
            <p>Thoughts on wellness, sustainability, and better living</p>
          </PageHeader>
          
          <BlogGrid>
            {blogs.map(blog => (
              <BlogCard key={blog.id} onClick={() => setSelectedBlog(blog)}>
                <BlogImage bgImage={blog.image} />
                <BlogContent>
                  <BlogTitle>{blog.title}</BlogTitle>
                  <BlogMeta>
                    <span>{blog.date}</span> • <span>{blog.readTime}</span>
                  </BlogMeta>
                  <BlogExcerpt>{blog.excerpt}</BlogExcerpt>
                  <ReadMoreButton>Read more</ReadMoreButton>
                </BlogContent>
              </BlogCard>
            ))}
          </BlogGrid>
        </>
      ) : (
        <>
          <BackButton onClick={() => setSelectedBlog(null)}>Back to blogs</BackButton>
          
          <FullArticle>
            <BlogTitle>{selectedBlog.title}</BlogTitle>
            <BlogMeta>
              <span>{selectedBlog.date}</span> • <span>{selectedBlog.readTime}</span>
            </BlogMeta>
            <div dangerouslySetInnerHTML={{ __html: selectedBlog.content }} />
          </FullArticle>
        </>
      )}
    </BlogsContainer>
  );
};

export default BlogsPage;