// src/components/layout/Preloader.js
import React from 'react';
import styled, { keyframes } from 'styled-components';

const Preloader = () => {
  return (
    <PreloaderWrapper>
      <LogoContainer>
        <LogoImage src="/img/channel_profile.jpg" alt="조선버전" />
        <LoadingText>JOSUN VERSION</LoadingText>
      </LogoContainer>
    </PreloaderWrapper>
  );
};

// 페이드인 애니메이션
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

// 글로우 효과
const glow = keyframes`
  0% {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  }
  50% {
    box-shadow: 0 0 40px rgba(0, 0, 0, 0.3);
  }
  100% {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  }
`;

// 텍스트 페이드인
const textFadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const PreloaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #ffffff;  // 배경색을 흰색으로 변경
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${fadeIn} 0.5s ease-out;
`;

const LogoImage = styled.img`
  width: 200px;
  height: 200px;
  margin-bottom: 20px;
  animation: ${glow} 2s ease-in-out infinite;
  object-fit: cover;
`;

const LoadingText = styled.div`
  color: #000000;  // 텍스트 색상을 검정으로 변경
  font-size: 2rem;
  letter-spacing: 5px;
  animation: ${textFadeIn} 1s ease-out;
  font-family: 'YeojuCeramic', sans-serif;
  font-weight: 500;  // 텍스트를 조금 더 굵게
`;

export default Preloader;