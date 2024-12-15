import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes, css } from 'styled-components';
import backgroundMusic from '../../assets/audio/2024 11 29 2024 JUMP UP 조선버전 빛나는 밤, 횃불.mp3';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef(new Audio(backgroundMusic));

  useEffect(() => {
    const audio = audioRef.current;
    audio.loop = true;
    audio.volume = 0.1;

    const playAudio = async () => {
      try {
        await audio.play();
      } catch (error) {
        console.log("자동재생이 차단되었습니다:", error);
        setIsPlaying(false);
      }
    };

    playAudio();

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  const togglePlay = async () => {
    const audio = audioRef.current;
    
    if (isPlaying) {
      audio.pause();
    } else {
      try {
        await audio.play();
      } catch (error) {
        console.log("재생 오류:", error);
      }
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <PlayerWrapper>
      <MusicTitle isPlaying={isPlaying}>
        2024 JUMP UP 조선버전 빛나는 밤, 횃불
      </MusicTitle>
      <PlayButton onClick={togglePlay}>
        {isPlaying ? "II" : "▶"} {/* 유니코드 이모지로 변경 */}
      </PlayButton>
    </PlayerWrapper>
  );
};

const scrollText = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const PlayerWrapper = styled.div`
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 9999;
  display: flex;
  align-items: center;
  padding: 12px 25px;
  border-radius: 10px; // 더 네모낳게 조정
  background: var(--color-secondary);
  min-width: 450px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const MusicTitle = styled.div`
  color: var(--color-primary);
  font-size: 18px; // 글자 크기 증가
  white-space: nowrap;
  overflow: hidden;
  position: relative;
  flex: 1;
  padding-right: 70px;
  font-weight: 500;
  
  ${props => props.isPlaying && css`
    animation: ${scrollText} 15s linear infinite;
  `}
`;

const PlayButton = styled.button`
  position: absolute;
  right: 20px;
  width: 45px;
  height: 45px;
  border-radius: 8px;
  background: var(--color-primary);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: var(--color-secondary);
  transition: all 0.2s ease;
  padding: 0;

  &:hover {
    transform: scale(1.05);
    opacity: 0.9;
  }

  &:active {
    transform: scale(0.95);
  }
`;

export default MusicPlayer;