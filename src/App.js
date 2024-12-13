// src/App.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from './components/layout/Header';
import Preloader from './components/layout/Preloader';
import WelcomeModal from './components/common/WelcomeModal';  // 모달 import 확인
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Music from './components/sections/Music';
import Band from './components/sections/Band';
import Footer from './components/layout/Footer';
import './styles/globalstyles.css';
import MusicPlayer from './components/common/MusicPlayer';



function App() {
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(true);  // 초기값을 true로 설정

  useEffect(() => {
    // 프리로더 타이머
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // 모달 표시 여부 확인
    const dontShow = localStorage.getItem('dontShowWelcomeModal');
    if (dontShow !== 'true') {
      setShowModal(true);
    }

    return () => clearTimeout(timer);
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <AppWrapper>
      {loading && <Preloader />}
      {showModal && <WelcomeModal onClose={handleCloseModal} />}
      <Header />
      <main>
        {/* <Hero /> */}
        <About />
        <Band /> 
        <Music />
      </main>
      <Footer />
      <MusicPlayer />
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  position: relative;
  min-height: 100vh;
`;

export default App;