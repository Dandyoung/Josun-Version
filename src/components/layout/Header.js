import React, { useState } from 'react';
import styled from 'styled-components';
import '../../styles/fonts.css';  // 경로 수정

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderWrapper>
      <LeftPart>
        <Logo href="#wrapper">
          <h2 className="mb-0 uppercase">JOSUN VERSION</h2>
        </Logo>
      </LeftPart>
      
      <RightPart>
        <MenuIcon onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </MenuIcon>
      </RightPart>

      {isMenuOpen && (
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

            {/* <NavSection>
              <NavTitle>사업소개</NavTitle>
              <NavList>
                <NavItem>DX 서비스</NavItem>
                <NavItem>항만물류 DX 서비스</NavItem>
                <NavItem>항만물류 DX 컨설팅</NavItem>
                <NavItem>항만물류 지능화 구현</NavItem>
                <NavItem>공공 민간 정보화 구현</NavItem>
              </NavList>
            </NavSection> */}

            {/* <NavSection>
              <NavTitle>기술 맛집</NavTitle>
              <NavList>
                <NavItem>연구개발</NavItem>
                <NavItem>AI 특별 강의</NavItem>
              </NavList>
            </NavSection> */}

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
      )}
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  z-index: 999;
  padding: 20px 50px;
  background: transparent;
`;

const LeftPart = styled.div``;

const RightPart = styled.div``;

const Logo = styled.a`
  text-decoration: none;
  color: var(--color-primary);
  
  h2 {
    font-family: 'YeojuCeramic', sans-serif !important;  // !important 추가
    font-size: 24px;
    margin: 0;
    letter-spacing: 1px;
  }
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