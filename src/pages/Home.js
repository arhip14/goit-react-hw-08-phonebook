import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #4169E1;
  color: #FFDAB9;
  text-align: center;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 30px;
  text-decoration: underline;
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  font-style: italic;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const FeatureItem = styled.li`
  margin: 20px;
  font-size: 1.5rem;
`;

const PhoneIcon = styled.span`
  font-size: 3rem;
  margin-right: 20px;
`;

const HighlightedText = styled.span`
  background-color: #FFDAB9; /* Peach */
  color: #4169E1; /* Royal blue */
  padding: 5px;
  border-radius: 10px;
`;

const Home = () => {
  return (
    <Container>
      <Title>
        <HighlightedText>Phonebook</HighlightedText>
      </Title>
      <Subtitle>Your Go-To Contact Management Solution</Subtitle>
      <FeatureList>
        <FeatureItem>
          <PhoneIcon role="img" aria-label="Phone icon">
            📞
          </PhoneIcon>
          Easy Contact Management
        </FeatureItem>
        <FeatureItem>
          <PhoneIcon role="img" aria-label="Phone icon">
            📞
          </PhoneIcon>
          Quick Access to Contacts
        </FeatureItem>
      </FeatureList>
    </Container>
  );
};

export default Home;
