import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import bandData from '../../assets/band/band.json';
import BandModal from '../modals/Band_modal';

const Band = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const { members } = bandData;

  // 이미지 경로를 처리하는 함수
  const getPublicImagePath = (path) => {
    return process.env.PUBLIC_URL + path;
  };

  return (
    <BandSection id="band">
      <Container>
        <SectionTitle>
          <h1 className="korean-font">TEAM MEMBERS</h1>
        </SectionTitle>

        <MembersGrid>
          {members.map(member => (
            <MemberCard key={member.id} onClick={() => setSelectedMember(member)}>
              <MemberImage>
                <img 
                  src={getPublicImagePath(member.img_path)} 
                  alt={member.name} 
                  style={{ 
                    objectPosition: member.imagePosition,
                    transform: `scale(${member.imageScale})`
                  }} 
                />
              </MemberImage>
              <TagContainer>
                <PositionTag onClick={(e) => {
                  e.stopPropagation();
                  setSelectedMember(member);
                }}>
                  <span className="default">{member.position}</span>
                  <span className="hover">Read bio →</span>
                </PositionTag>
                <SocialLink 
                  href={member.social.instagram} 
                  target="_blank"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </SocialLink>
              </TagContainer>
              <MemberInfo>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
                {member.subRole && <p>{member.subRole}</p>}
              </MemberInfo>
            </MemberCard>
          ))}
        </MembersGrid>
      </Container>

      <BandModal 
        member={selectedMember ? {
          ...selectedMember,
          modal_img_paths: selectedMember.modal_img_paths.map(path => getPublicImagePath(path))
        } : null}
        onClose={() => setSelectedMember(null)} 
      />
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
  gap: 30px;
  padding: 0 15px;
  max-width: 1000px;
  margin: 0 auto;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    max-width: 700px;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    max-width: 350px;
  }
`;

const MemberCard = styled.div`
  background: white;
  border-radius: 24px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  
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

const MemberImage = styled.div`
  width: 100%;
  aspect-ratio: 1;
  border-radius: 20px;
  overflow: hidden;
  margin-bottom: 20px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
    transition: transform 0.3s ease;
  }
`;

const TagContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  margin-bottom: 16px;
`;

const PositionTag = styled.div`
  display: inline-block;
  padding: 8px 16px;
  border-radius: 50px;
  border: 1px solid #000;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  .default, .hover {
    display: block;
    transition: all 0.3s ease;
  }

  .hover {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    transform: translateY(100%);
    color: #FF6B6B;
  }

  &:hover {
    .default {
      transform: translateY(-100%);
    }
    .hover {
      transform: translateY(0);
    }
  }
`;

const SocialLink = styled.a`
  color: #E1306C;
  font-size: 1.5rem;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: scale(1.2);
    opacity: 0.8;
  }
`;

const MemberInfo = styled.div`
  text-align: left;
  padding: 0 20px;

  h3 {
    font-size: 24px;
    font-weight: 600;
    color: #333;
    margin: 0 0 8px 0;
    font-family: 'YeojuCeramic', sans-serif;
  }

  p {
    font-size: 18px;
    color: #666;
    margin: 0;
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 30px;
  border-radius: 20px;
  max-width: 800px;
  width: 90%;
  position: relative;
  display: flex;
  gap: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ModalImage = styled.div`
  flex: 1;
  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }
`;

const ModalInfo = styled.div`
  flex: 1;
  h2 {
    margin: 0 0 15px;
    font-size: 2rem;
    font-family: 'YeojuCeramic', sans-serif;
  }
  p {
    margin: 0 0 10px;
    font-size: 1.1rem;
    color: #666;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #333;
  
  &:hover {
    color: #FF6B6B;
  }
`;

export default Band;