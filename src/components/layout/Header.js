import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faTimes } from '@fortawesome/free-solid-svg-icons';
// 상단에 import 변경
import headerLogo from '../../assets/img/logo/josun_version_logo.svg';

import device from '../../styles/breakpoints';

const Header = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <GlobalStyle />
      <HeaderWrapper>
        {/* 데스크톱용 ContactBar */}
        <DesktopContactBar>
          <ContactInfo>
            <a href="tel:+82-010-4794-1822">
              <FontAwesomeIcon icon={faPhone} /> (+82) 010-4794-1822
            </a>
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
              <img src="https://maps.gstatic.com/favicon3.ico" alt="Google Maps" />
              62-1, Haegwan-ro, Jung-gu, Busan
            </a>
            <a href="mailto:rhlanf96248@naver.com">
              <img src="https://www.naver.com/favicon.ico" alt="Naver" />
              rhlanf96248@naver.com
            </a>
          </ContactInfo>
          <SocialLinks>
            <a href="https://www.youtube.com/@%EC%A1%B0%EC%84%A0%EB%B2%84%EC%A0%84" target="_blank" rel="noopener noreferrer">
              <span className="text">YouTube</span>
              <img src="https://www.youtube.com/favicon.ico" alt="YouTube" />
            </a>
            <a href="https://www.instagram.com/josun_ver?igsh=a2lidHQzenVueWs0" target="_blank" rel="noopener noreferrer">
              <span className="text">Instagram</span>
              <img src="https://static.cdninstagram.com/rsrc.php/v3/yR/r/lam-fZmwmvn.png" alt="Instagram" />
            </a>
          </SocialLinks>
        </DesktopContactBar>

        {/* 모바일용 Contact Us 버튼 */}
        <ContactButton onClick={() => setIsContactOpen(true)}>
          Contact Us
        </ContactButton>

        {/* 모바일용 슬라이딩 메뉴 */}
        <MobileContactBar isOpen={isContactOpen}>
          <CloseButton onClick={() => setIsContactOpen(false)}>
            <FontAwesomeIcon icon={faTimes} />
          </CloseButton>
          <MobileContactInfo>
            <a href="tel:+82-010-4794-1822">
              <FontAwesomeIcon icon={faPhone} /> (+82) 010 4794 1822
            </a>
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
              <img src="https://maps.gstatic.com/favicon3.ico" alt="Google Maps" />
              62-1, Haegwan-ro, Jung-gu, Busan
            </a>
            <a href="mailto:rhlanf96248@naver.com">
              <img src="https://www.naver.com/favicon.ico" alt="Naver" />
              rhlanf96248@naver.com
            </a>
            <div className="social-links">
              <span>Official</span>
              <a href="https://www.youtube.com/@%EC%A1%B0%EC%84%A0%EB%B2%84%EC%A0%84" target="_blank" rel="noopener noreferrer">
                <img src="https://www.youtube.com/favicon.ico" alt="YouTube" className="youtube-icon" />
              </a>
              <a href="https://www.instagram.com/josun_ver?igsh=a2lidHQzenVueWs0" target="_blank" rel="noopener noreferrer">
                <img src="https://static.cdninstagram.com/rsrc.php/v3/yR/r/lam-fZmwmvn.png" alt="Instagram" className="insta-icon" />
              </a>
            </div>
          </MobileContactInfo>
        </MobileContactBar>

        <MainHeader>
          <Logo href="#wrapper">
            <img src={headerLogo} alt="Josun Version Logo" />
          </Logo>
        </MainHeader>
      </HeaderWrapper>
    </>
  );
};

const GlobalStyle = createGlobalStyle`
  body {
    overflow-x: hidden;
  }
`;

const HeaderWrapper = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background: white;
  
  ${device.mobile} {
    width: 100vw;  // viewport width로 설정
    overflow-x: hidden;  // 가로 스크롤 방지
  }
`;

const DesktopContactBar = styled.div`
  width: 100%;
  background: #f8f9fa;
  padding: 8px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);

  ${device.mobile} {
    display: none;
  }
`;

const ContactButton = styled.button`
  display: none;
  
  ${device.mobile} {
    display: block;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 15px;
    z-index: 1001;
    background: #4CAF50;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 20px;
    font-size: 14px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  }
`;


const MobileContactBar = styled.div`
  display: none;
  
  ${device.mobile} {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: auto;  // 100vh에서 auto로 변경
    max-height: ${props => props.isOpen ? '400px' : '0'};  // 최대 높이 제한
    background: white;
    z-index: 1002;
    padding: ${props => props.isOpen ? '20px' : '0'};  // 열릴 때만 패딩 적용
    transition: all 0.3s ease;  // 부드러운 애니메이션
    overflow: hidden;  // 내용이 넘치지 않도록
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    opacity: ${props => props.isOpen ? '1' : '0'};  // 페이드 효과
  }
`;

const MobileContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 40px;  // 상단 여백 조정

  a {
    color: #666;
    text-decoration: none;
    font-size: 16px;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 0;
    border-bottom: 1px solid #eee;

    img {
      height: 20px;
      width: 20px;
    }
  }

    .social-links {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-top: 10px;
    padding-bottom: 10px;
    
    span {
      color: #666;
      font-size: 16px;
    }

    a {
      border: none;
      padding: 0;
      display: flex;
      align-items: center;
    }

    .youtube-icon {
      height: 28px;  // 유튜브 아이콘 크기
      width: auto;
    }

    .insta-icon {
      height: 24px;  // 인스타 아이콘 크기
      width: auto;
    }
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 20px;
  color: #666;
  cursor: pointer;
  z-index: 1003;
  padding: 5px;
`;
const ContactInfo = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  
  a {
    color: #666;
    text-decoration: none;
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 5px;
    
    &:hover {
      color: #333;
    }

    img {
      height: 16px;
      width: 16px;
      object-fit: contain;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  
  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 5px;
    
    img {
      height: 16px;
      width: auto;
      object-fit: contain;
    }

    .text {
      color: #666;
      font-size: 14px;
    }
  }
`;
const MainHeader = styled.div`
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  ${device.mobile} {
    padding: 1px;
    height: 80px;  // 고정된 높이 설정
  }
`;

const Logo = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  
  img {
    height: 40px;
    width: auto;
    object-fit: contain;

    ${device.mobile} {
      height: 180px;  // 로고 크기 조정
      margin-left: 0;  // 여백 제거
    }
  }
`;

export default Header;