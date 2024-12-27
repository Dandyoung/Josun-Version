// 화면 크기 기준점 설정
const size = {
    mobile: '320px',
    tablet: '768px',
    laptop: '1024px'
  };
  
  // 실제 사용할 미디어 쿼리 설정
  const device = {
    mobile: `@media screen and (max-width: ${size.tablet})`,  // 768px 미만 = 모바일
    tablet: `@media screen and (min-width: ${size.tablet})`,  // 768px 이상 = 태블릿
    laptop: `@media screen and (min-width: ${size.laptop})`   // 1024px 이상 = 노트북/데스크톱
  };
  
  export default device;