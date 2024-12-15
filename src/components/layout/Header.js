import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import headerLogo from '../../assets/img/logo/header_logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <TopBar>
        <ContactInfo>
          <a href="tel:+82-010-4794-1822">
            <FontAwesomeIcon icon={faPhone} />
            (+82) 010 4794 1822
          </a>
          <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLocationDot} />
            62-1, Haegwan-ro, Jung-gu, Busan, 48929, Rep. of KOREA
          </a>
          <a href="mailto:rhlanf96248@naver.com">
            <FontAwesomeIcon icon={faEnvelope} />
            rhlanf96248@naver.com
          </a>
        </ContactInfo>
        <SocialLinks>
  <div className="social-link-group">
    <a href="https://www.youtube.com/@%EC%A1%B0%EC%84%A0%EB%B2%84%EC%A0%84" target="_blank" rel="noopener noreferrer">
      Official YouTube  
    </a>
    <a href="https://www.youtube.com/@%EC%A1%B0%EC%84%A0%EB%B2%84%EC%A0%84" target="_blank" rel="noopener noreferrer" className="youtube-icon">
      <FontAwesomeIcon icon={faYoutube} size="4x" />
    </a>
  </div>
  
  <div className="social-link-group">
    <a href="https://www.instagram.com/josun_ver?igsh=a2lidHQzenVueWs0" target="_blank" rel="noopener noreferrer">
      Official Instagram  
    </a>
    <a href="https://www.instagram.com/josun_ver?igsh=a2lidHQzenVueWs0" target="_blank" rel="noopener noreferrer" className="instagram-icon">
      <FontAwesomeIcon icon={faInstagram} size="4x" />
    </a>
  </div>
</SocialLinks>
      </TopBar>

      <HeaderWrapper>
        <LeftPart>
          <Logo href="#wrapper">
            <img src={headerLogo} alt="Josun Version Logo" />
          </Logo>
        </LeftPart>
        
        <RightPart>
          <MenuIcon onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </MenuIcon>
        </RightPart>

        {isMenuOpen && <Navigation toggleMenu={toggleMenu} />}
      </HeaderWrapper>
    </>
  );
};

// Navigation 컴포넌트 분리
const Navigation = ({ toggleMenu }) => (
  <NavigationOverlay>
    <NavContainer>
      <NavSection>
        <NavTitle>조선버전</NavTitle>
        <NavList>
          <NavItem>조선버전 소개</NavItem>
          <NavItem>주요연혁</NavItem>
          <NavItem>보컬채용</NavItem>
          <NavItem>오시는 길</NavItem>
        </NavList>
      </NavSection>

      <NavSection>
        <NavTitle>홍보자료</NavTitle>
        <NavList>
          <NavItem>조선버전 소식</NavItem>
          <NavItem>공연영상</NavItem>
        </NavList>
      </NavSection>

      <NavSection>
        <NavTitle>문의하기</NavTitle>
        <NavList>
          <NavItem>Contact Us</NavItem>
        </NavList>
      </NavSection>
    </NavContainer>
    <CloseButton onClick={toggleMenu}>×</CloseButton>
  </NavigationOverlay>
);

// Styled Components는 그대로 유지...
const TopBar = styled.div`
  background: #f8f9fa;
  padding: 12px 50px; // 패딩 증가
  font-size: 15px; // 폰트 사이즈 30% 증가
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ContactInfo = styled.div`
  display: flex;
  gap: 26px; // gap 30% 증가
  align-items: center;
  
  a {
    color: #666;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 7px; // gap 30% 증가
    
    &:hover {
      color: #333;
    }
  }
`;
const SocialLinks = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  
  .social-link-group {
    display: flex;
    align-items: center;
    gap: 5px;
    margin-right: 10px;
    
    a {
      text-decoration: none;
      color: #666;
      display: flex;
      align-items: center;
      
      &:hover {
        color: #333;
      }
      
      &.youtube-icon, &.instagram-icon {
        font-size: 24px; // 아이콘 크기 직접 지정
        
        svg {
          width: 30px; // SVG 크기 지정
          height: 30px;
        }
      }
      
      &.youtube-icon {
        color: #FF0000;
      }
      
      &.instagram-icon {
        color: #E4405F;
      }
    }
  }
`;

// HeaderWrapper 수정 (top 위치 조정)
const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 80px;
  z-index: 999;
  padding: 0 50px;
  background: transparent;
  overflow: hidden;
  top: 36px;  // TopBar 높이만큼 아래로
`;

const LeftPart = styled.div`
  display: flex;
  align-items: center;
  margin-left: -35px;  // 왼쪽으로 더 이동
`;

const Logo = styled.a`
  text-decoration: none;
  color: var(--color-primary);
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;  // 위치 조정을 위해 추가
  left: 0;  // 왼쪽으로 정렬
  
  h2 {
    font-family: 'YeojuCeramic', sans-serif !important;
    font-size: 24px;
    margin: 0;
    letter-spacing: 1px;
  }

  img {
    height: 200px;
    width: auto;
    object-fit: contain;
  }
`;

const RightPart = styled.div`
  display: flex;
  align-items: center;
`;

const MenuIcon = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 6px;
  
  span {
    display: block;
    width: 25px;
    height: 2px;
    background-color: var(--color-primary);
  }
`;
// 1. 먼저 NavList와 NavItem 선언
const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-family: 'YeojuCeramic', sans-serif !important;
  position: absolute;
  top: 100%;
  left: 0;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.3s ease-in-out;
  background: white;
  min-width: 200px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  z-index: 1000;
`;

const NavItem = styled.li`
  margin: 15px 0;
  color: var(--color-primary);
  cursor: pointer;
  font-size: 18px;
  font-weight: 400;
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--color-secondary);
  }
`;

// 2. 그 다음 나머지 컴포넌트들 선언
const NavigationOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: white;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 100px;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 0;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  padding: 0 50px;
`;

const NavSection = styled.div`
  flex: 1;
  max-width: 300px;
  text-align: left;
  position: relative;
  padding: 30px;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  
  &:last-child {
    border-right: none;
  }
  
  &:hover {
    ${NavList} {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }
  }
`;

const NavTitle = styled.h3`
  font-family: 'YeojuCeramic', sans-serif !important;
  font-size: 32px;
  color: var(--color-primary);
  margin-bottom: 30px;
  font-weight: bold;
  cursor: pointer;
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--color-secondary);
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 40px;
  right: 40px;
  background: none;
  border: none;
  font-size: 40px;
  color: var(--color-primary);
  cursor: pointer;
  padding: 10px;
  
  &:hover {
    color: var(--color-secondary);
  }
`;


export default Header;