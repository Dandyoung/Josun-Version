import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Band = () => {
  const [currentIndex, setCurrentIndex] = useState(2);

  const members = [
    {
      id: 1,
      name: "Kim Young-ho",
      role: "Leader & Promoter",
      image: "/img/KYH.jpg",
      social: {
        instagram: "https://instagram.com/",
        youtube: "https://youtube.com/"
      }
    },
    {
      id: 2,
      name: "Kim Chae-rin",
      role: "Geomungo",
      image: "/img/KCL.jpg",
      social: {
        instagram: "https://instagram.com/",
        youtube: "https://youtube.com/"
      }
    },
    {
      id: 3,
      name: "Lee So-yeong",
      role: "Daegeum",
      image: "/img/LSY.jpg",
      social: {
        instagram: "https://instagram.com/",
        youtube: "https://youtube.com/"
      }
    },
    {
      id: 4,
      name: "Hwang Yoo-kyung",
      role: "Haegeum",
      image: "/img/HYK.png",
      social: {
        instagram: "https://instagram.com/",
        youtube: "https://youtube.com/"
      }
    },
    {
      id: 5,
      name: "Byeon Jae-byeok",
      role: "Synthesizer",
      subRole: "Composer & Arranger",
      image: "/img/BJB.jpg",
      social: {
        instagram: "https://instagram.com/",
        youtube: "https://youtube.com/"
      }
    },
    {
      id: 6,
      name: "Jeon Jung-hyun",
      role: "Percussion",
      image: "/img/JJH.jpg",
      social: {
        instagram: "https://instagram.com/",
        youtube: "https://youtube.com/"
      }
    }
  ];

  const getAdjacentIndexes = (index) => {
    const prevIndex = index === 0 ? members.length - 1 : index - 1;
    const nextIndex = index === members.length - 1 ? 0 : index + 1;
    return [prevIndex, index, nextIndex];
  };

  const handleCardClick = (clickedIndex) => {
    // 현재 인덱스가 아닐 때만 작동
    if (clickedIndex !== currentIndex) {
      // 오른쪽 카드를 클릭했을 때
      if (clickedIndex === (currentIndex === members.length - 1 ? 0 : currentIndex + 1)) {
        setCurrentIndex(currentIndex === members.length - 1 ? 0 : currentIndex + 1);
      }
      // 왼쪽 카드를 클릭했을 때
      else if (clickedIndex === (currentIndex === 0 ? members.length - 1 : currentIndex - 1)) {
        setCurrentIndex(currentIndex === 0 ? members.length - 1 : currentIndex - 1);
      }
    }
  };

  return (
    <BandSection id="band">
      <Container>
        <SectionTitle>
          <h1 className="korean-font">TEAM MEMBERS</h1>
        </SectionTitle>

        <CarouselContainer>
          <ArrowButton left onClick={() => {
            setCurrentIndex(currentIndex === 0 ? members.length - 1 : currentIndex - 1);
          }}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </ArrowButton>

          <CarouselTrack>
            {getAdjacentIndexes(currentIndex).map((index, i) => {
              const member = members[index];
              const isActive = i === 1; // 중앙 카드
              
              return (
                <MemberCard 
                  key={`${member.id}-${index}`}
                  isActive={isActive}
                  onClick={() => handleCardClick(index)}
                  style={{
                    transform: `
                      translateX(${(i - 1) * 80}%) 
                      translateZ(${isActive ? 0 : -150}px)
                      scale(${isActive ? 1 : 0.8})
                    `,
                    opacity: 1 - (Math.abs(i - 1) * 0.2),
                    zIndex: 3 - Math.abs(i - 1)
                  }}
                >
                  <MemberImage>
                    <img src={member.image} alt={member.name} />
                    {isActive && (
                      <Overlay>
                        <SocialLinks>
                          <SocialLink href={member.social.instagram} target="_blank">
                            <FontAwesomeIcon icon={faInstagram} />
                          </SocialLink>
                          <SocialLink href={member.social.youtube} target="_blank">
                            <FontAwesomeIcon icon={faYoutube} />
                          </SocialLink>
                        </SocialLinks>
                      </Overlay>
                    )}
                  </MemberImage>
                  <MemberInfo>
                    <h3>{member.name}</h3>
                    <p>{member.role}</p>
                    {member.subRole && <p>{member.subRole}</p>}
                  </MemberInfo>
                </MemberCard>
              );
            })}
          </CarouselTrack>

          <ArrowButton right onClick={() => {
            setCurrentIndex(currentIndex === members.length - 1 ? 0 : currentIndex + 1);
          }}>
            <FontAwesomeIcon icon={faChevronRight} />
          </ArrowButton>
        </CarouselContainer>

        <DotsContainer>
          {members.map((_, index) => (
            <Dot 
              key={index} 
              isActive={currentIndex === index}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </DotsContainer>
      </Container>
    </BandSection>
  );
};

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const BandSection = styled.section`
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
`;

const CarouselContainer = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
  overflow: hidden;
  perspective: 1000px;
`;

const CarouselTrack = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 600px;
  padding: 40px 0;
  transform-style: preserve-3d;
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${props => props.left ? 'left: 20px;' : 'right: 20px;'}
  background: rgba(255, 255, 255, 0.8);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s ease;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);

  &:hover {
    background: white;
    transform: translateY(-50%) scale(1.1);
  }

  svg {
    font-size: 20px;
    color: #333;
  }
`;

const MemberCard = styled.div`
  position: absolute;
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  transition: all 0.5s ease;
  width: 350px;
  cursor: pointer;

  ${props => props.isActive && `
    &:hover {
      transform: translateY(-10px) !important;
    }
  `}
`;

const MemberImage = styled.div`
  position: relative;
  aspect-ratio: 3/4;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  &:hover img {
    transform: scale(1.1);
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.3s ease;

  ${MemberCard}:hover & {
    opacity: 1;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const SocialLink = styled.a`
  color: white;
  font-size: 1.8rem;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.2);
    color: #ffd700;
  }
`;

const MemberInfo = styled.div`
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
    font-size: 1.1rem;
  }
`;

const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
`;

const Dot = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background-color: ${props => props.isActive ? '#ffd700' : '#ccc'};
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ffd700;
  }
`;

export default Band;