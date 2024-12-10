// src/components/layout/Header.js
import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderWrapper className="header default">
      <LeftPart>
        <Logo href="#wrapper">
          <h2 className="mb-0 uppercase">JOSUN VERSION</h2>
        </Logo>
      </LeftPart>
      
      <RightPart>
        <MainNav>
          <MobileButton href="#" className="mobile-but">
            <div className="lines"></div>
          </MobileButton>
          
          <MainMenu className="main-menu list-inline">
            <MenuItem><a className="scroll list-inline-item" href="#wrapper">Home</a></MenuItem>
            <MenuItem><a className="scroll list-inline-item" href="#about">about</a></MenuItem>
            <MenuItem><a className="scroll list-inline-item" href="#discography">discography</a></MenuItem>
            <MenuItem><a className="scroll list-inline-item" href="#band">Band</a></MenuItem>
            <MenuItem><a className="scroll list-inline-item" href="#tour">Tours</a></MenuItem>
            <MenuItem><a className="scroll list-inline-item" href="#gallery">Gallery</a></MenuItem>
            <MenuItem><a className="scroll list-inline-item" href="#news">News</a></MenuItem>
            <MenuItem><a className="scroll list-inline-item" href="#contact">Contact</a></MenuItem>
            
            <MenuItem className="block-helper">
              <a href="#album" className="scroll">
                <span><i className="icon-cd-2"></i></span>
              </a>
            </MenuItem>
            <MenuItem className="block-helper">
              <span className="icon search-ico">
                <i className="icon-search"></i>
              </span>
            </MenuItem>
          </MainMenu>
        </MainNav>
      </RightPart>
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

const Logo = styled.a`
  text-decoration: none;
  color: black;
  h2 {
    font-size: 24px;
    margin: 0;
  }
`;

const RightPart = styled.div``;

const MainNav = styled.nav``;

const MobileButton = styled.a`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;

const MainMenu = styled.ul`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const MenuItem = styled.li`
  margin: 0 15px;
  
  a {
    color: black;  // white -> black 으로 변경
    text-decoration: none;
    text-transform: uppercase;
    font-size: 14px;
    
    &:hover {
      color: #FF007F;  // 밝은 핑크  // hover 색상도 필요하다면 변경
    }
  }
  
  &.block-helper {
    span {
      color: black;  // white -> black 으로 변경
      font-size: 18px;
    }
  }
`;

export default Header;