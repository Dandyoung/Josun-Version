// src/components/sections/About.js
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

const About = () => {
  return (
    <AboutSection id="about" className="about overlay main">
      <BackgroundImage>
        <img src="/img/25.jpg" alt="background" />
      </BackgroundImage>
      
      <Container>
        <Row>
          <LeftColumn>
            <div className="front-p">
              <Title>A different<br/>kind of music</Title>
              <Description>
                Melbourne is the coastal capital of the southeastern Australian state of Victoria. 
                At the city's centre is the modern Federation Square development, with plazas, 
                bars, and restaurants by the Yarra River.
              </Description>
              <SocialLinks>
                <SocialItem><a href="#"><i className="socicon-apple"></i></a></SocialItem>
                <SocialItem><a href="#"><i className="socicon-play"></i></a></SocialItem>
                <SocialItem><a href="#"><i className="socicon-amazon"></i></a></SocialItem>
                <SocialItem><a href="#"><i className="socicon-spotify"></i></a></SocialItem>
                <SocialItem><a href="#"><i className="socicon-soundcloud"></i></a></SocialItem>
              </SocialLinks>
            </div>
          </LeftColumn>
          
          <RightColumn>
            <Row>
              <InfoBox className="red">
                <h3>upcoming tour</h3>
                <span>Fort Mason Center<br/>San Francisco, CA</span>
              </InfoBox>
              
              <InfoBox className="dark-blue">
                <h3>location</h3>
                <span>Sunday to Wednesday<br/>July 23 to 26, 2017</span>
              </InfoBox>
              
              <InfoBox>
                <YoutubeButton 
                  href="https://www.youtube.com/@%EC%A1%B0%EC%84%A0%EB%B2%84%EC%A0%84" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faYoutube} />
                  Watch Our Performance
                </YoutubeButton>
              </InfoBox>
            </Row>
          </RightColumn>
        </Row>
      </Container>
    </AboutSection>
  );
};

// Styled Components
const AboutSection = styled.section`
  position: relative;
  padding: 100px 0;
  color: white;
  
  &.overlay::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    z-index: 1;
  }
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Container = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftColumn = styled.div`
  flex: 0 0 41.666667%;
  max-width: 41.666667%;
  padding: 0 15px;
  
  @media (max-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
    margin-bottom: 30px;
  }
`;

const RightColumn = styled.div`
  flex: 0 0 58.333333%;
  max-width: 58.333333%;
  padding: 0 15px;
  
  @media (max-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
  }
`;

const Title = styled.h1`
  font-family: 'YeojuCeramic', sans-serif;
  font-size: 3.5rem;
  margin-bottom: 30px;
  text-transform: uppercase;
  line-height: 1.2;
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 30px;
  opacity: 0.8;
`;

const SocialLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 15px;
`;

const SocialItem = styled.li`
  a {
    color: white;
    font-size: 1.5rem;
    opacity: 0.8;
    transition: opacity 0.3s;
    
    &:hover {
      opacity: 1;
    }
  }
`;

const InfoBox = styled.div`
  flex: 0 0 33.333333%;
  max-width: 33.333333%;
  padding: 30px;
  text-align: center;
  background: ${props => props.className === 'red' ? '#ff0000' : 
                        props.className === 'dark-blue' ? '#000080' : 'transparent'};
  
  h3 {
    font-size: 1.5rem;
    text-transform: uppercase;
    margin-bottom: 15px;
  }
  
  span {
    font-size: 1rem;
    opacity: 0.8;
  }
  
  @media (max-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
    margin-bottom: 15px;
  }
`;

const YoutubeButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;  // 아이콘과 텍스트 사이 간격 조정
  padding: 15px 30px;
  background: transparent;
  border: 2px solid white;
  color: white;
  text-transform: uppercase;
  text-decoration: none;
  transition: all 0.3s;
  font-size: 1rem;
  
  svg {
    font-size: 1.8rem;  // 아이콘 크기 증가
    color: #FF0000;     // YouTube 빨간색
  }
  
  &:hover {
    background: white;
    color: black;
    
    svg {
      color: #FF0000;  // hover 상태에서도 YouTube 빨간색 유지
    }
  }
`;
export default About;