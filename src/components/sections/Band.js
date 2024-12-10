// src/components/sections/Band.js
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Band = () => {
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

  return (
    <BandSection id="band">
      <Container>
        <SectionTitle>
          <h1 className="korean-font">TEAM MEMBERES</h1>
        </SectionTitle>

        <MembersGrid>
          {members.map(member => (
            <MemberCard key={member.id}>
              <MemberImage>
                <img src={member.image} alt={member.name} />
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
              </MemberImage>
              <MemberInfo>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </MemberInfo>
            </MemberCard>
          ))}
        </MembersGrid>
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

  h5 {
    font-size: 1.2rem;
    color: #666;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
`;

const MembersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  padding: 0 15px;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const MemberCard = styled.div`
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  animation: ${fadeIn} 1s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(0,0,0,0.2);
  }
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

  ${MemberCard}:hover img {
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

export default Band;