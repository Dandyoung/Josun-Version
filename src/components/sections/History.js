import React, { useState } from 'react';
import styled, { css, createGlobalStyle,keyframes } from 'styled-components';
import YeojuCeramic from '/Users/yw/Desktop/josun/Josun-Version/src/fonts/YeojuCeramic_TTF.ttf';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'YeojuCeramic';
    src: url(${YeojuCeramic}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'YeojuCeramic', sans-serif;
  }
`;

const TimelineSection = styled.section`
  padding: 100px 0;
  background: #fff;
  position: relative;
`;

const TimelineContainer = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 50px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.08);
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const SectionTitle = styled.div`
  text-align: center;
  margin-bottom: 60px;
  animation: ${fadeIn} 1s ease;

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


const TimelineItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  margin-bottom: 35px;
  position: relative;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeIn 0.5s ease forwards;
  
  @keyframes fadeIn {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  ${props => css`
    animation-delay: ${props.index * 0.1}s;
  `}
  
  &::before {
    content: '';
    position: absolute;
    left: 8px;
    top: 35px;
    width: 2px;
    height: calc(100% + 9px);
    background-color: var(--color-secondary);  // 모든 선은 secondary 색상
  }
  
  &:last-child::before {
    display: none;
  }
`;
// 태그별 색상 정의
const tagColors = {
  PERFORMANCE: '#FFD700',  // 기존 노란색
  COMPOSITION: '#4CAF50',  // 초록색
  COLLABORATION: '#2196F3',  // 파란색
  DEBUT_CONCERT: '#9C27B0',  // 보라색
  FOUNDATION: '#FF5722',  // 주황색
  ONLINE: '#607D8B'  // 회색빛 파란색
};

// TimelineDot 컴포넌트 - 태그별 색상 적용
const TimelineDot = styled.div`
  width: 18px;
  height: 18px;
  border: 2px solid ${props => tagColors[props.tag] || '#FFD700'};
  background: #fff;
  border-radius: 50%;
  flex-shrink: 0;
  margin-top: 13px;
  position: relative;
  z-index: 1;
`;


const TimelineDate = styled.div`
  width: 220px;
  font-size: 1.6rem;
  color: #666;
  font-weight: 500;
  flex-shrink: 0;
  white-space: nowrap;
  margin-top: 6px;  // 살짝 아래로 조정
`;

const TimelineContent = styled.div`
  flex: 1;
`;

const TimelineContentTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 1.6rem;
  font-weight: 500;
  color: #333;
  line-height: 1.5;
`;

const TimelineDescription = styled.p`
  margin: 8px 0 0;
  color: #666;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 1.5;
`;

const Tag = styled.span`
  display: inline-block;
  padding: 5px 18px;
  color: ${props => tagColors[props.tagType] || '#666'};  // 텍스트 색상
  border: 1px solid ${props => tagColors[props.tagType] || '#ddd'};  // 테두리 색상
  border-radius: 20px;
  font-size: 1.6rem;
  font-weight: normal;
  letter-spacing: 0.5px;
  font-family: 'YeojuCeramic', sans-serif;
`;

const ActionButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 40px auto 0;
  padding: 12px 30px;
  background: transparent;
  border: 1px solid #ddd;
  border-radius: 25px;
  font-size: 1.4rem;
  color: #666;
  cursor: pointer;
  transition: all 0.3s ease;

  span {
    font-size: 0.9rem;
    transition: transform 0.3s ease;
  }

  &:hover {
    background: #f5f5f5;
    border-color: #999;
  }
`;


const Timeline = () => {
  const [visibleItems, setVisibleItems] = useState(10);
  const [isExpanded, setIsExpanded] = useState(false);

    // date: 날짜
    // title: 행사명
    // description: 상세 설명
    // tag: 이벤트 유형 태그
  const timelineData = [
    {
      date: "2023.10.21-23",
      title: "2023 원도심 창작 공간 부산예술축제",
      description: "국악 공연",
      tag: "PERFORMANCE"
    },
    {
      date: "2023.10.21", 
      title: "2023 통도사 개산대재 영축문화축제",
      description: "국악공연",
      tag: "PERFORMANCE"
    },
    {
      date: "2023.10.14",
      title: "해양 경찰 문화 탐방 행사",
      description: "국악공연",
      tag: "PERFORMANCE"
    },
    {
      date: "2023.09.27",
      title: "밀락더 마켓X이세현 작가 전시회",
      description: "국악 공연",
      tag: "PERFORMANCE"
    },
    {
      date: "2023.09.25",
      title: "부산창작음악연구회 제 2회 작곡발표회",
      description: "\"안개숲\" 작품 발표 및 공연",
      tag: "COMPOSITION"
    },
    {
      date: "2023.09.02",
      title: "부산 서면 젊음의 거리",
      description: "연결을 통한 참여 '굿'이로구나 국악 공연",
      tag: "PERFORMANCE"
    },
    {
      date: "2023.07.16",
      title: "부산 광안리 밀락 더 마켓X조선버전",
      description: "도저히 그냥 지나칠 수가 없네 창단연주회",
      tag: "DEBUT_CONCERT"
    },
    {
      date: "2023.06.09",
      title: "금정문화재단 2023년 상설공연 멋부림",
      description: "금정버스킹 국악공연",
      tag: "PERFORMANCE"
    },
    {
      date: "2023.05.20",
      title: "2023년 한국 정형외 협회 주체 학회",
      description: "외국인 컨퍼런스 국악공연",
      tag: "PERFORMANCE"
    },
    {
      date: "2023.04.07",
      title: "부산국악협회",
      description: "2030엑스포 유치 대설단 국악공연",
      tag: "PERFORMANCE"
    },
    {
      date: "2023.04.05",
      title: "부산국악협회 2030엑스포 유치 대설단",
      description: "국악공연",
      tag: "PERFORMANCE"
    },
    {
      date: "2022.11.22",
      title: "2022년 원도심 창작공간 예술축제",
      description: "공감시대 국악X스트릿댄스 공연",
      tag: "COLLABORATION"
    },
    {
      date: "2022.10.21/23",
      title: "부산대학교",
      description: "국제컨퍼런스 국악공연",
      tag: "PERFORMANCE"
    },
    {
      date: "2022.10.12",
      title: "금정문화재단",
      description: "똑똑문화드림 국악공연",
      tag: "PERFORMANCE"
    },
    {
      date: "2022.10.01/15",
      title: "부산대역",
      description: "가족영화콘서트 오프닝 국악공연",
      tag: "PERFORMANCE"
    },
    {
      date: "2022.09.22",
      title: "구 해운대역",
      description: "청춘난장 청년의 날 기념 온라인 국악공연",
      tag: "ONLINE"
    },
    {
      date: "2022.09.16",
      title: "대구 중구청",
      description: "청년이 꿈꾸는 중구 청년의 날 국악공연",
      tag: "PERFORMANCE"
    },
    {
      date: "2022.08.26-27",
      title: "부산문화회관",
      description: "Super Tiger 출연",
      tag: "PERFORMANCE"
    },
    {
      date: "2022.07.23",
      title: "부산문화재단",
      description: "칠팔버스킹 국악공연",
      tag: "PERFORMANCE"
    },
    {
      date: "2022.07.23",
      title: "부산진성 한복문화관 개관기념",
      description: "래추고 도시재생뉴딜사업 국악공연",
      tag: "PERFORMANCE"
    },
    {
      date: "2022.07.08",
      title: "금정고등학교",
      description: "틈새음악회 국악공연",
      tag: "PERFORMANCE"
    },
    {
      date: "2022.06.17",
      title: "금정문화재단 2022년 상설공연 멋부림",
      description: "금정버스킹 국악공연",
      tag: "PERFORMANCE"
    },
    {
      date: "2022.03.22",
      title: "불가사리 프로젝트",
      description: "피아노와 국악의 아름다운 조우 국악공연",
      tag: "COLLABORATION"
    },
    {
      date: "2022.03.14",
      title: "조선버전 창단",
      description: "조선버전의 시작",
      tag: "FOUNDATION"
    }
  ];

  const loadMore = () => {
    setVisibleItems(prev => prev + 10);
    if (visibleItems + 10 >= timelineData.length) {
      setIsExpanded(true);
    }
  };

  const collapse = () => {
    setVisibleItems(10);
    setIsExpanded(false);
    window.scrollTo({
      top: document.getElementById('timeline-section').offsetTop,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <GlobalStyle />
      <TimelineSection id="timeline-section">
        <SectionTitle>
          <h1 className="korean-font">HISTORY</h1>
        </SectionTitle>
        <TimelineContainer>
          {timelineData.slice(0, visibleItems).map((item, index) => (
            <TimelineItem key={index} index={index}>
              <TimelineDot tag={item.tag} />  {/* tag prop 추가 */}
              <TimelineDate>{item.date}</TimelineDate>
              <TimelineContent>
                <TimelineContentTitle>
                  <Title>{item.title}</Title>
                  <Tag tagType={item.tag}>{item.tag}</Tag>
                </TimelineContentTitle>
                <TimelineDescription>{item.description}</TimelineDescription>
              </TimelineContent>
            </TimelineItem>
          ))}
          
          <div style={{ textAlign: 'center' }}>
            {!isExpanded && visibleItems < timelineData.length && (
              <ActionButton onClick={loadMore}>
                See more <span>▼</span>
              </ActionButton>
            )}
            {isExpanded && visibleItems > 10 && (
              <ActionButton onClick={collapse}>
                Collapse <span>▲</span>
              </ActionButton>
            )}
          </div>
        </TimelineContainer>
      </TimelineSection>
    </>
  );
};

export default Timeline;