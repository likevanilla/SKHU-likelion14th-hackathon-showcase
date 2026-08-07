export const navItems = [
  { to: '/', label: '소개', end: true },
  { to: '/event', label: '이벤트' },
  { to: '/teams', label: '팀 소개' },
]

export const teams = [
  {
    id: 'team-1',
    name: 'Team 1',
    tagline: '서비스 소개 준비 중',
    description: '문제 정의, 핵심 기능, 데모 링크를 연결할 자리입니다.',
  },
  {
    id: 'team-2',
    name: 'Team 2',
    tagline: '서비스 소개 준비 중',
    description: '팀별 컬러와 스크린샷은 추후 상세 소개 화면에서 확장할 수 있습니다.',
  },
  {
    id: 'team-3',
    name: 'Team 3',
    tagline: '서비스 소개 준비 중',
    description: '해커톤 당일 관람객이 빠르게 이해할 수 있는 요약을 넣을 예정입니다.',
  },
  {
    id: 'team-4',
    name: 'Team 4',
    tagline: '서비스 소개 준비 중',
    description: '문제, 솔루션, 사용 흐름을 카드 단위로 소개할 수 있습니다.',
  },
  {
    id: 'team-5',
    name: 'Team 5',
    tagline: '서비스 소개 준비 중',
    description: '서비스 링크와 발표 자료를 함께 보여줄 수 있습니다.',
  },
]

export const boothSteps = ['부스 방문', '팀 서비스 확인', '피드백 작성', '럭키드로우 참여']

export const eventCards = [
  {
    title: '참여 방법',
    description:
      '성공회대 부스에 방문해서 각 팀의 서비스를 확인하고, 팀에게 도움이 되는 피드백을 남겨주세요!',
  },
  {
    title: '참여 혜택',
    description:
      '피드백을 작성해주신 분께 럭키드로우 기회를 1회 제공합니다.',
  },
  {
    title: '현장 안내',
    description:
      '부스 담당자에게 피드백 완료를 인증하면 현장에서 바로 추첨에 참여할 수 있습니다.',
  },
]

export const luckyDrawPrizes = [
  {
    name: '키캡',
    imageAlt: '키캡 상품 이미지',
    imageSrc: null,
  },
  {
    name: '노트북 클리너',
    imageAlt: '노트북 클리너 상품 이미지',
    imageSrc: null,
  },
  {
    name: '키링',
    imageAlt: '키링 상품 이미지',
    imageSrc: null,
  },
  {
    name: '포스트잇',
    imageAlt: '포스트잇 상품 이미지',
    imageSrc: null,
  },
  {
    name: '스티커',
    imageAlt: '스티커 상품 이미지',
    imageSrc: null,
  },
  {
    name: '키캡 키링',
    imageAlt: '키캡 키링 상품 이미지',
    imageSrc: null,
  },
]

export const detailLabels = ['문제 정의', '핵심 기능', '데모 링크']

export const exhibitionSlots = [
  {
    teamId: 'team-1',
    time: '12:40 - 13:45',
    label: '1차 전시',
  },
  {
    teamId: 'team-2',
    time: '13:45 - 14:50',
    label: '2차 전시',
  },
  {
    teamId: 'team-3',
    time: '14:50 - 15:55',
    label: '3차 전시',
  },
  {
    teamId: 'team-4',
    time: '15:55 - 17:00',
    label: '4차 전시',
  },
  {
    teamId: 'team-5',
    time: '17:00 - 18:00',
    label: '5차 전시',
  },
]

export const fanCards = [
  {
    x: 'clamp(-220px, -26vw, -96px)',
    y: '38px',
    pullX: '-38px',
    pullY: '-84px',
    rotate: '-24deg',
    z: 5,
  },
  {
    x: 'clamp(-110px, -13vw, -48px)',
    y: '14px',
    pullX: '-20px',
    pullY: '-90px',
    rotate: '-12deg',
    z: 4,
  },
  {
    x: '0px',
    y: '0px',
    pullX: '0px',
    pullY: '-92px',
    rotate: '0deg',
    z: 3,
  },
  {
    x: 'clamp(48px, 13vw, 110px)',
    y: '14px',
    pullX: '20px',
    pullY: '-90px',
    rotate: '12deg',
    z: 2,
  },
  {
    x: 'clamp(96px, 26vw, 220px)',
    y: '38px',
    pullX: '38px',
    pullY: '-84px',
    rotate: '24deg',
    z: 1,
  },
]
