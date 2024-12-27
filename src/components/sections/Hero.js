import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import main1 from '../../assets/img/main/main_1.jpg';
import device from '../../styles/breakpoints';

const Hero = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [currentVideo, setCurrentVideo] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
    setIsAnimating(true);
    const newVideo = getRandomVideo();
    setCurrentVideo(newVideo);
    setShowVideo(true);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 10);
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
          {showVideo && isMobile && (
            <MobileVideoWrapper>
              <iframe
                key={currentVideo}
                src={`https://www.youtube.com/embed/${currentVideo}?autoplay=1`}
                title="Josun Version Performance"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </MobileVideoWrapper>
          )}
          <WatchButton 
            href="#"
            onClick={handleWatchClick}
            className={isAnimating ? 'animate' : ''}
            showVideo={showVideo}
          >
            {showVideo ? 'See More' : 'Watch Our Performance'}
            <Arrow>→</Arrow>
          </WatchButton>
        </LeftContent>
        {showVideo && !isMobile && (
          <RightContent marginTop="-10px" marginRight="50px">
            <VideoWrapper>
              <iframe
                key={currentVideo}
                src={`https://www.youtube.com/embed/${currentVideo}?autoplay=1`}
                title="Josun Version Performance"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </VideoWrapper>
          </RightContent>
        )}
      </HeroContent>
    </HeroSection>
  );
};

const HeroSection = styled.section`
  height: 650px;
  background-color: #f8f9fa;
  display: flex;
  align-items: center;
  padding: 30px 0;
  position: relative;
  overflow: hidden;
  
  ${device.mobile} {
    height: auto;
    min-height: auto;  // 100vh에서 auto로 수정
    padding: 20px 0;
  }
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

  ${device.mobile} {
    object-fit: cover;
    object-position: center center;
    width: 100vw;  // 100vw에서 90vw로 줄임
    height: 40vh;  // 100%에서 90vh로 줄임
    margin: 0 auto;
    left: 50%;
    top: 60px;  
    transform: translateX(-50%);  // 중앙 정렬
  }
`;

const MobileVideoWrapper = styled.div`
  display: none;

  ${device.mobile} {
    display: block;
    width: 100%;
    height: 200px;
    margin: 20px 0 10px;  // 하단 마진 줄임
    position: relative;
  }

  iframe {
    width: 100%;
    height: 100%;
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

  ${device.mobile} {
    flex-direction: column;
    gap: 2rem;
    padding-top: 300px;  // 80px에서 40px로 수정
    width: 100%;
    align-items: center;
    min-height: auto;
    justify-content: flex-start;
  }
`;


const LeftContent = styled.div`
  flex: 0 0 50%;
  max-width: 600px;
  margin-top: ${props => props.marginTop || '0'};
  margin-left: ${props => props.marginLeft || '0'};

  ${device.mobile} {
    flex: 1;
    max-width: 90%;
    margin: 0 auto;
    padding: 0;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const RightContent = styled.div`
  flex: 0 0 50%;
  margin-top: ${props => props.marginTop || '0'};
  margin-right: ${props => props.marginRight || '0'};
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 500;
  color: #464646;
  margin-top: 1.5rem;
  margin-bottom: 0.2rem;
  line-height: 1.2;
  font-family: 'YeojuCeramic', sans-serif;
  white-space: pre-line;
  position: relative;

  ${device.mobile} {
    font-size: 2rem;
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 130%;
      height: 130%;
      background: rgba(255, 255, 255, 0.7);
      backdrop-filter: blur(5px);
      z-index: -1;
      mask-image: linear-gradient(
        to right,
        transparent,
        black 20%,
        black 80%,
        transparent
      ),
      linear-gradient(
        to bottom,
        transparent,
        black 20%,
        black 80%,
        transparent
      );
      -webkit-mask-image: linear-gradient(
        to right,
        transparent,
        black 20%,
        black 80%,
        transparent
      ),
      linear-gradient(
        to bottom,
        transparent,
        black 20%,
        black 80%,
        transparent
      );
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }
  }
`;

const Description = styled.p`
  font-size: 1.5rem;
  color: #1a1a1a;
  margin-top: 0;
  margin-bottom: 2rem;
  line-height: 1.6;
  max-width: 500px;

  ${device.mobile} {
    font-size: 1rem;
    margin-bottom: 1.5rem;
    word-break: keep-all;
    letter-spacing: -0.5px;
  }
`;

const HighlightText = styled.span`
  color: var(--theme-color, #1a1a1a);
  font-weight: 700;
`;

const VideoWrapper = styled.div`
  width: 750px;
  height: 450px;

  iframe {
    width: 100%;
    height: 100%;
  }
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

  &.animate {
    &:before {
      width: 0;
    }
    &:after {
      height: 0;
    }
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

  ${device.mobile} {
    padding: 15px 30px;
    font-size: 1rem;
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
    justify-content: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    transition: margin-top 0.3s ease;
    margin-top: ${props => props.showVideo ? '20px' : '0'};  // 마진 값 수정
  }
`;
export default Hero;