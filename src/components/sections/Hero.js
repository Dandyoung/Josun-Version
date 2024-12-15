import React, { useState } from 'react';
import styled from 'styled-components';
import main1 from '../../assets/img/main/main_1.jpg';

const Hero = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [currentVideo, setCurrentVideo] = useState('');

  const videos = [
    'K5C9GjfZ6PQ',
    'r68h093zflw',
    '65BqfKslsdc'
  ];

  const getRandomVideo = () => {
    const randomIndex = Math.floor(Math.random() * videos.length);
    return videos[randomIndex];
  };

  const handleWatchClick = (e) => {
    e.preventDefault();
    const newVideo = getRandomVideo();
    setCurrentVideo(newVideo);
    setShowVideo(true);
  };

  return (
    <HeroSection>
      <BackgroundImage src={main1} alt="background" />
      <HeroContent contentPaddingTop="100px">
        <LeftContent marginTop="170px" marginLeft="20px">
          <Title>'<HighlightText>조선음악의</HighlightText> 현대버전'<br />'현대음악의 <HighlightText>조선버전</HighlightText>'</Title>
          <Description>
          조선의 소리를 현대의 언어로, 모두가 공감하는 국악
          </Description>
          <WatchButton 
            href="#"
            onClick={handleWatchClick}
          >
            Watch Our Performance
            <Arrow>→</Arrow>
          </WatchButton>
        </LeftContent>
        <RightContent marginTop="-10px" marginRight="50px">
          {showVideo && (
            <VideoWrapper width="750px" height="450px">
              <iframe
                key={currentVideo} // 키 추가로 동영상 변경 시 리렌더링 보장
                src={`https://www.youtube.com/embed/${currentVideo}?autoplay=1`}
                title="Josun Version Performance"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </VideoWrapper>
          )}
        </RightContent>
      </HeroContent>
    </HeroSection>
  );
};

const HighlightText = styled.span`
  color: #1a1a1a;  // 원하는 색상으로 변경
  font-weight: 700;  // 필요한 경우 글자 굵기도 조절 가능
`;

const VideoOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 30%;
  opacity: 0.8;
  z-index: 0;
`;

const HeroSection = styled.section`
  height: 650px;
  background-color: #f8f9fa;
  display: flex;
  align-items: center;
  padding: 30px 0;
  position: relative;
  overflow: hidden;
  
  @media (max-width: 1024px) {
    height: 500px;
  }
  
  @media (max-width: 768px) {
    height: 400px;
  }
`;

const HeroContent = styled.div`
  max-width: 1920px;
  width: 95%;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 4rem;
  position: relative;
  z-index: 1;
  padding-top: ${props => props.contentPaddingTop || '80px'};
`;

const LeftContent = styled.div`
  flex: 0 0 50%;
  max-width: 600px;
  margin-top: ${props => props.marginTop || '0'};
  margin-left: ${props => props.marginLeft || '0'};
`;

const RightContent = styled.div`
  flex: 0 0 50%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: ${props => props.marginTop || '0'};
  margin-right: ${props => props.marginRight || '0'};
`;

const VideoWrapper = styled.div`
  position: relative;
  width: ${props => props.width || '800px'};
  height: ${props => props.height || '450px'};
  border-radius: 20px;
  overflow: hidden;
  background: #000;
  box-shadow: 0 20px 40px rgba(0,0,0,0.3);
  animation: fadeIn 0.3s ease-out forwards;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 20px;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;


const Title = styled.h1`
  font-size: 3rem;
  font-weight: 500;
  color: #464646;
  margin-top: 1.5rem;
  margin-bottom: 0.2rem;  // Description과의 간격 조절
  line-height: 1.2;
  font-family: 'YeojuCeramic', sans-serif;
  white-space: pre-line;
`;

const Description = styled.p`
  font-size: 1.5rem;
  color: #1a1a1a;
  margin-top: 0;
  margin-bottom: 2rem;  // 버튼과의 간격 조절
  line-height: 1.6;
  max-width: 500px;
`;


const Category = styled.span`
  font-size: 1.2rem;
  color: #666;
  letter-spacing: 2px;
  margin-bottom: 1rem;
  display: block;
`;

const Arrow = styled.span`
  font-size: 1.2rem;
  position: relative;
  z-index: 1;
`;

const WatchButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  background-color: var(--white-color, #ffffff);
  color: var(--theme-color, #1a1a1a);
  padding: 20px 40px;
  font-size: 1.1rem;
  border-radius: 0;
  text-decoration: none;
  font-weight: 700;
  position: relative;
  z-index: 1;
  overflow: hidden;

  &:before, &:after {
    content: "";
    position: absolute;
    z-index: -1;
    background-color: var(--theme-color, #1a1a1a);
    transition: all 0.3s ease-out;
  }

  &:before {
    width: 0;
    height: 100%;
    left: 0;
    top: 0;
  }

  &:after {
    width: 100%;
    height: 0;
    left: 0;
    bottom: 0;
  }

  &:hover {
    color: var(--white-color, #ffffff);

    &:before {
      width: 100%;
    }

    &:after {
      height: 100%;
    }
  }
`;

export default Hero;