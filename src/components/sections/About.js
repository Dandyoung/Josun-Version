import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

const About = () => {
  return (
    <AboutSection id="about" className="about-area4 bg-white overflow-hidden space">
      <Container>
        <Row className="align-items-center">
          <LeftColumn>
            <ImageContainer className="img-box1">
                <MainImage className="img1 th-anim global-img">
                  <img src="/img/JOSUN_2.jpg" alt="Josun Version" />
                </MainImage>
                <FloatingImage className="img2 th-anim global-img jump">
                  <img src="/img/JOSUN_3.jpg" alt="Josun Version" />
                </FloatingImage>
              <ShapeBackground className="about-shape" />
            </ImageContainer>
          </LeftColumn>
          
          <RightColumn>
            <ContentArea className="about-content-area ps-xl-4 ms-xl-2">
              <TitleArea className="title-area mb-35">
                <SubTitle>More About Us</SubTitle>
                <Title>조선버전을 소개합니다.</Title>
                <Description>
                  국악그룹 &lt;조선버전&gt;은 국악 전공자들이 모인 팀으로, 한국의 문화유산, 정서가 담겨있는 한국음악을
                  문화산업의 대표적인 대중, 현대음악과 결합시켜 새로운 국악 장르의 작품을 창작하는 팀입니다.
                </Description>
              </TitleArea>

              <CounterWrapper className="about-counter-wrapper">
                <Experience className="th-experience style2">
                  <ExperienceContent className="th-experience_content">
                    <ExperienceYear className="experience-year">
                      <span className="counter-number">10</span>+
                    </ExperienceYear>
                    <ExperienceText className="experience-text">
                      Years Experience
                    </ExperienceText>
                  </ExperienceContent>
                </Experience>

                <CheckList className="checklist">
                  <ul>
                    <li>국악의 발전을 위해 국제 교류와 문화 다양성이 있는 공연을 통하여 문화교류의 촉진 및 이해를 높이는데 기여합니다.</li>
                    <li>다양한 악기와 보컬 스타일을 결합하여 창의적이고 다양한 음악 작품을 만들어냅니다.</li>
                    <li>전통 음악과 예술을 보존하고 전파함으로써 문화적 가치와 유산을 유지하고 발전시킵니다.</li>
                    <li>"문화적으로, 예술적으로, 그리고 사회적으로 가치 있는 활동"을 위해 노력합니다.</li>
                  </ul>
                </CheckList>
              </CounterWrapper>
            </ContentArea>
          </RightColumn>
        </Row>
      </Container>
    </AboutSection>
  );
};

const AboutSection = styled.section`
  position: relative;
  padding: 100px 0;
  background-color: var(--color-background);
  color: var(--color-primary);
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftColumn = styled.div`
  flex: 0 0 50%;
  max-width: 50%;
  padding: 0 15px;
  
  @media (max-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
    margin-bottom: 30px;
  }
`;

const RightColumn = styled.div`
  flex: 0 0 50%;
  max-width: 50%;
  padding: 0 15px;
  
  @media (max-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  
  &.img-box1 {
    .img1 {
      transition: all 0.4s ease;
    }
    
    &:hover {
      .img1 {
        transform: translateY(-10px);
      }
      ₩
      .img2.jump {
        animation: jump 2s ease infinite;
      }
    }
  }
`;

const MainImage = styled.div`
  position: relativ₩e;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  
  &.th-anim.global-img {
    img {
      width: 100%;
      height: auto;
      object-fit: cover;
      transition: all 0.4s ease;
    }
  }
`;

const FloatingImage = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  bottom: -30px;
  right: -30px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  
  &.th-anim.global-img {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: all 0.4s ease;
    }
  }
  
  &.jump {
    animation: jump 2s ease infinite;
  }
  
  @keyframes jump {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
`;

const ShapeBackground = styled.div`
  position: absolute;
  width: calc(100% + 40px);
  height: calc(100% + 40px);
  top: -20px;
  left: -20px;
  background: var(--color-secondary);
  z-index: -1;
  border-radius: 10px;
`;

const ContentArea = styled.div`
  padding-left: 2rem;
  margin-left: 0.5rem;
`;

const TitleArea = styled.div`
  margin-bottom: 2.5rem;
`;

const SubTitle = styled.span`
  display: block;
  font-size: 1rem;
  color: var(--color-primary);
  margin-bottom: 0.5rem;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: var(--color-primary);
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  color: var(--color-primary);
  word-break: keep-all;
`;

const CounterWrapper = styled.div`
  margin-top: 2rem;
`;

const Experience = styled.div`
  margin-bottom: 2rem;
`;

const ExperienceContent = styled.div`
  display: flex;
  align-items: baseline;
  gap: 1rem;
`;

const ExperienceYear = styled.h2`
  font-size: 3rem;
  color: var(--color-primary);
  
  span {
    font-weight: bold;
  }
`;

const ExperienceText = styled.p`
  font-size: 1.1rem;
  color: var(--color-primary);
`;

const CheckList = styled.div`
  ul {
    list-style: none;
    padding: 0;
    
    li {
      position: relative;
      padding-left: 2rem;
      margin-bottom: 1rem;
      font-size: 1rem;
      line-height: 1.6;
      color: var(--color-primary);
      
      &:before {
        content: '✓';
        position: absolute;
        left: 0;
        color: var(--color-primary);
      }
    }
  }
`;

export default About;