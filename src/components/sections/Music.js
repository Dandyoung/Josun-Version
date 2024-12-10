// src/components/sections/Music.js
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const Music = () => {
  return (
    <MusicSection id="music" className="music main">
      <Container>
        <SectionTitle>
          <h1 className="korean-font">음악</h1>
          <h5>LATEST RELEASES</h5>
        </SectionTitle>

        <AlbumGrid>
          {/* 앨범 아이템 1 */}
          <AlbumItem>
            <AlbumImage>
              <img src="/img/album1.jpg" alt="Album 1" />
              <Overlay>
                <PlayButton>
                  <FontAwesomeIcon icon={faPlay} />
                </PlayButton>
              </Overlay>
            </AlbumImage>
            <AlbumInfo>
              <h3>조선버전 1집</h3>
              <p>2024</p>
            </AlbumInfo>
          </AlbumItem>

          {/* 앨범 아이템 2 */}
          <AlbumItem>
            <AlbumImage>
              <img src="/img/album2.jpg" alt="Album 2" />
              <Overlay>
                <PlayButton>
                  <FontAwesomeIcon icon={faPlay} />
                </PlayButton>
              </Overlay>
            </AlbumImage>
            <AlbumInfo>
              <h3>조선버전 2집</h3>
              <p>2024</p>
            </AlbumInfo>
          </AlbumItem>

          {/* 앨범 아이템 3 */}
          <AlbumItem>
            <AlbumImage>
              <img src="/img/album3.jpg" alt="Album 3" />
              <Overlay>
                <PlayButton>
                  <FontAwesomeIcon icon={faPlay} />
                </PlayButton>
              </Overlay>
            </AlbumImage>
            <AlbumInfo>
              <h3>조선버전 3집</h3>
              <p>2024</p>
            </AlbumInfo>
          </AlbumItem>
        </AlbumGrid>
      </Container>
    </MusicSection>
  );
};

// Styled Components
const MusicSection = styled.section`
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

const AlbumGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  padding: 0 15px;
`;

const AlbumItem = styled.div`
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

const AlbumImage = styled.div`
  position: relative;
  padding-top: 100%; // 1:1 비율 유지
  overflow: hidden;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${AlbumItem}:hover & {
    opacity: 1;
  }
`;

const PlayButton = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.3s ease;

  svg {
    font-size: 20px;
    color: #000;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

const AlbumInfo = styled.div`
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
  }
`;

export default Music;