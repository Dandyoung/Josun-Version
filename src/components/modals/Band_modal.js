import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const BandModal = ({ member, onClose }) => {
  if (!member) return null;

  return (
    <Modal onClick={onClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <CloseButton onClick={onClose}>×</CloseButton>
        
        <ImageContainer>
          <ImageWrapper first>
            <img src={member.modal_img_paths[0]} alt={member.name} />
          </ImageWrapper>
          <ImageWrapper second>
            <img src={member.modal_img_paths[1]} alt={member.name} />
          </ImageWrapper>
        </ImageContainer>
  
        <InfoSection>
        <TagSection>
    <PositionTag>{member.position}</PositionTag>
    <SocialLink 
      href={member.social.instagram} 
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faInstagram} />
    </SocialLink>
  </TagSection>
        
        <NameSection>
          <Name>{member.name}</Name>
          <KoreanName>{member.ko_name}</KoreanName>
        </NameSection>
        
        <RoleSection>
          <Role>{member.role}</Role>
        </RoleSection>
        
        <Divider />
        
        <ContentList>
          {member.contents.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ContentList>
      </InfoSection>
      </ModalContent>
    </Modal>
  );
};
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
  padding: 40px;
  border-radius: 20px;
  max-width: 1200px;
  width: 95%;
  position: relative;
`;
const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  margin-bottom: 40px;
`;

const ImageWrapper = styled.div`
  position: absolute;
  width: 60%;
  height: 350px;
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;  /* 마우스 오버시 포인터 표시 */
  
  &:hover {
    transform: scale(1.02);  /* hover시 이미지 확대 */
    z-index: 3;  /* hover된 이미지가 항상 위에 오도록 .. z-index: 3을 제거하면 원래의 겹침 순서를 유지*/
  }
  
  mask-image: linear-gradient(
    to right,
    transparent,
    black 5%,
    black 95%,
    transparent
  ),
  linear-gradient(
    to bottom,
    transparent,
    black 5%,
    black 95%,
    transparent
  );
  -webkit-mask-image: linear-gradient(
    to right,
    transparent,
    black 5%,
    black 95%,
    transparent
  ),
  linear-gradient(
    to bottom,
    transparent,
    black 5%,
    black 95%,
    transparent
  );
  -webkit-mask-composite: source-in;
  mask-composite: intersect;
  
  ${props => props.first && `
    top: 0;
    left: 0;
    z-index: 1;
  `}
  
  ${props => props.second && `
    top: 30px;
    right: 0;
    z-index: 2;
  `}
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const InfoSection = styled.div`
  padding: 0 40px;
`;

const PositionTag = styled.div`
  display: inline-block;
  padding: 8px 16px;
  border-radius: 50px;
  border: 1px solid #666;
  color: #666;
  font-size: 25px;
  text-transform: uppercase;
  line-height: 1;  /* 텍스트 수직 중앙 정렬을 위해 */
`;

const NameSection = styled.div`
  margin-bottom: 20px;
`;

const Name = styled.h2`
  font-size: 3rem;
  margin: 0;
  color: #333;
  font-weight: 600;
`;

const KoreanName = styled.div`
  font-size: 3rem;
  color: #666;
  margin-top: 2px;
`;

const RoleSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Role = styled.div`
  font-size: 1.4rem;
  color: #666;
`;

const TagSection = styled.div`
  display: flex;
  align-items: center;  /* 수직 중앙 정렬 */
  gap: 8px;  /* 간격 줄임 */
  margin-bottom: 20px;
`;



const SocialLink = styled.a`
  color: #E4405F;
  font-size: 30px;  /* PositionTag와 동일한 크기 */
  display: flex;  /* 아이콘 정렬을 위해 */
  align-items: center;  /* 아이콘 수직 중앙 정렬 */
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
    opacity: 0.8;
  }
`;

const Divider = styled.hr`
  border: none;
  border-top: 3px solid #ccc;
  margin: 30px 0;
`;

const ContentList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  
  li {
    font-size: 1.1rem;
    color: #666;
    margin-bottom: 15px;
    line-height: 1.6;
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

export default BandModal;