import React from 'react';
import styled, { keyframes } from 'styled-components';  // keyframes 추가
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import leafletData from '../../assets/leaflet/leaflet.json';  // leafletData 경로 수정
import '../../styles/globalstyles.css';

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
const Leaflet = () => {
  const { leaflet } = leafletData;

  const getPublicImagePath = (path) => {
    return process.env.PUBLIC_URL + path;
  };

  return (
    <StyledSection id="leaflet" className="leaflet main">
      <Container>
        <SectionTitle>
          <h1 className="korean-font">리플렛</h1>
          <h5>LATEST RELEASES</h5>
        </SectionTitle>

        <SliderArea className="slider-area">
          <StyledSwiper
            modules={[Navigation, Autoplay]}
            navigation={{
              prevEl: '.slider-prev',
              nextEl: '.slider-next'
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              576: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 2 },
              1200: { slidesPerView: 3 }
            }}
            spaceBetween={30}
            className="th-slider has-shadow"
          >
            {leaflet.map(item => (
              <SwiperSlide key={item.id}>
                <LeafletItem>
                  <LeafletImage>
                    <img 
                      src={getPublicImagePath(item.img_path)} 
                      alt={item.title}
                      draggable="false"
                    />
                  </LeafletImage>
                  <LeafletInfo>
                    <h3>{item.title}</h3>
                    <p>{item.year}</p>
                  </LeafletInfo>
                </LeafletItem>
              </SwiperSlide>
            ))}
          </StyledSwiper>
          <SliderArrow className="slider-arrow slider-prev">
            <FontAwesomeIcon icon={faArrowLeft} />
          </SliderArrow>
          <SliderArrow className="slider-arrow slider-next">
            <FontAwesomeIcon icon={faArrowRight} />
          </SliderArrow>
        </SliderArea>
      </Container>
    </StyledSection>
  );
};

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const StyledSection = styled.section`
  padding: 100px 0;
  background: #f8f9fa;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
`;

const SectionTitle = styled.div`
  text-align: center;
  margin-bottom: 60px;
  animation: ${fadeIn} 1s ease;

  h1 {
    font-size: 3.5rem;
    margin-bottom: 10px;
    
    &.korean-font {
      font-family: 'YeojuCeramic', sans-serif;
    }
  }

  h5 {
    font-size: 1.2rem;
    color: #666;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
`;

const SliderArea = styled.div`
  position: relative;
  padding: 0 50px;
`;

const StyledSwiper = styled(Swiper)`
  padding: 25px 0;
  
  .swiper-wrapper {
    align-items: stretch;
  }
`;

const LeafletItem = styled.div`
  background: white;
  border-radius: 24px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  height: 100%;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 50%;
    height: 100%;
    background: rgba(255,255,255,0.3);
    transform: skewX(25deg);
    z-index: 1;
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0,0,0,0.15);
    
    &:before {
      animation: shine 1.9s;
    }
  }

  @keyframes shine {
    100% {
      left: 150%;
    }
  }
`;

const LeafletImage = styled.div`
  position: relative;
  padding-top: 141.4%;
  overflow: hidden;
  background: white;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
    background: white;
  }
`;

const LeafletInfo = styled.div`
  padding: 20px;
  text-align: center;

  h3 {
    margin: 0 0 10px;
    font-size: 1.5rem;
    font-family: 'YeojuCeramic', sans-serif;
  }

  p {
    margin: 0;
    color: #666;
  }
`;
const SliderArrow = styled.button`
  display: inline-block;
  padding: 0;
  background-color: white;
  border: none;
  position: absolute;
  top: 50%;
  width: 66px;
  height: 66px;
  transform: translateY(-50%);
  z-index: 3;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 50%;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

  &.slider-prev {
    left: -20px;
  }

  &.slider-next {
    right: -20px;
  }

  svg {
    font-size: 24px;
    color: var(--primary);
  }

  &:hover {
    box-shadow: 0 6px 25px rgba(0, 0, 0, 0.2);
  }
`;
export default Leaflet;