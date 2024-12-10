// src/components/sections/Hero.js
import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Hero = () => {
  const [isAutoplay, setIsAutoplay] = useState(true);
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: isAutoplay ? 500 : 0,  // autoplay일 때만 페이드 효과 사용
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 20000,
    fade: isAutoplay,             // autoplay일 때만 페이드 효과 사용
    pauseOnHover: false,
    cssEase: "linear",
    beforeChange: () => {
      setIsAutoplay(true);        // 슬라이드 전환 전에 페이드 효과 활성화
    },
    customPaging: function(i) {
      return (
        <button
          onClick={() => {
            setIsAutoplay(false);  // 점 클릭시 페이드 효과 비활성화
          }}
        >
          •
        </button>
      );
    }
  };

  return (
    <HeroSection className="hero">
      <MainSlider ref={sliderRef} {...settings}>
        <SlideItem>
        <BackgroundImg className="overlay zoom">
          <img className="main-image" src="/img/JOSUN_2.jpg" alt="조선버전" />
          <img className="secondary-image" src="/img/JOSUN_3.jpg" alt="조선버전 배경" />
        </BackgroundImg>
          <Container>
            <Row>
              <Col>
                <InnerHero>
                  <BackRect />
                  <Title className="korean-font">조선버전</Title>
                  <SubTitle>JOSUN VERSION</SubTitle>
                  <FrontRect />
                </InnerHero>
              </Col>
            </Row>
          </Container>
        </SlideItem>

        <SlideItem>
          <BackgroundImg className="overlay zoom">
            <img src="/img/2.jpg" alt="limitless" />
          </BackgroundImg>
          <Container>
            <Row>
              <Col>
                <InnerHero>
                  <Title>latest performance</Title>
                  <SubTitle>더 높이, 더 멀리</SubTitle>
                    <VideoButton 
                      href="https://www.youtube.com/watch?v=sEYpWYS8un0" 
                      target="_blank"
                      rel="noopener noreferrer"
                    />
                  </InnerHero>
              </Col>
            </Row>
          </Container>
        </SlideItem>
      </MainSlider>
    </HeroSection>
  );
};

const HeroSection = styled.section`
  position: relative;
  height: 100vh;
  overflow: hidden;
`;

const MainSlider = styled(Slider)`
  height: 100%;

  .slick-list, .slick-track {
    height: 100%;
  }

  .slick-dots {
    bottom: 30px;
    
    li button:before {
      color: white;
    }
  }
`;

const SlideItem = styled.div`
  position: relative;
  height: 100vh;
`;



const BackgroundImg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 120%;
  height: 120%;
  z-index: 1;  // 낮은 z-index 추가
  
  
  &.overlay::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }

  img {
    width: 120%;
    height: 120%;
    object-fit: contain;
    object-position: center center;
    position: relative;
    margin: 0 auto;
    display: block;
  }

  .secondary-image {
    position: absolute;
    width: 60%;
    height: 60%;
    top: 10%;
    left: 0%;
    transform: translate(-50%, -50%);
    z-index: 2;    // 메인 이미지보다 위에, 로고보다 아래에 투명도 조절은 opacity
  }

  &.zoom img {
    animation: zoomEffect 20s linear infinite;
    transform-origin: center center;
  }

  @keyframes zoomEffect {
    from {
      transform: scale(0.85);
    }
    to {
      transform: scale(1.1);
    }
  }
`;

const Container = styled.div`
  position: relative;
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
`;

const Row = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Col = styled.div`
  text-align: center;
`;

const InnerHero = styled.div`
  position: relative;
  padding: 40px;
  z-index: 10;  // z-index를 더 높게 설정
`;

// 테두리 색 변경
const BackRect = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 100%;
  border: 2px solid rgba(0, 0, 0, 0.2);  // 검은색 20% 투명도
`;

const FrontRect = styled(BackRect)`
  transform: translateX(-50%) scale(0.95);
  border-color: rgba(0, 0, 0, 0.4);  // 검은색 40% 투명도
`;

const Title = styled.h1`
  font-size: 5rem;
  color: Black;
  margin: 0;
  text-transform: uppercase;
  
  &.korean-font {
    font-family: 'YeojuCeramic', sans-serif;
  }
`;

const SubTitle = styled.h5`
  font-size: 1.5rem;
  color: Black;
  margin: 20px 0 0;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const VideoButton = styled.a`
  display: inline-block;
  width: 70px;
  height: 70px;
  margin-top: 30px;
  border: 2px solid white;
  border-radius: 50%;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-40%, -50%);
    border-style: solid;
    border-width: 15px 0 15px 25px;
    border-color: transparent transparent transparent white;
  }
`;

export default Hero;