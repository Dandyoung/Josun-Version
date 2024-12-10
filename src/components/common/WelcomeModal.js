// src/components/common/WelcomeModal.js
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const WelcomeModal = ({ onClose }) => {
  const handleDontShowAgain = () => {
    localStorage.setItem('dontShowWelcomeModal', 'true');
    onClose();
  };

  // 오버레이 클릭 시 모달 닫기
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {  // 오버레이를 직접 클릭했을 때만
      handleDontShowAgain();  // 다시 보지 않기 처리
    }
  };

  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <ModalContent>
        <TopCloseButton onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} />
        </TopCloseButton>
        
        <ModalImage src="/img/modal.jpg" alt="KBS 국악대경연 동상" />
        
        <DontShowAgainButton onClick={handleDontShowAgain}>
          다시 보지 않기 <FontAwesomeIcon icon={faTimes} />
        </DontShowAgainButton>
      </ModalContent>
    </ModalOverlay>
  );
};

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 0;  // 모서리 각지게
  overflow: hidden;
  max-width: 800px;
  width: 90%;
  position: relative;
`;

const TopCloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
  z-index: 10;
  padding: 5px;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
  
  &:hover {
    color: #ddd;
  }
`;

const ModalImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const DontShowAgainButton = styled.button`
  position: absolute;
  bottom: 15px;
  right: 15px;
  background: none;
  border: none;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 5px;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
  
  &:hover {
    color: #ddd;
  }
  
  svg {
    font-size: 12px;
  }
`;

export default WelcomeModal;