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
    logoSrc: null,
    logoAlt: 'Team 1 서비스 로고',
    imageSrc: null,
    imageAlt: 'Team 1 서비스 대표 이미지',
    detailSections: [
      {
        title: '문제 정의',
        body: '팀이 해결하고 싶은 문제와 사용자의 불편함을 자세히 소개할 수 있는 영역입니다. 글이 길어져도 카드 안에 갇히지 않고 페이지 흐름 안에서 자연스럽게 읽히도록 구성했습니다.',
      },
      {
        title: '핵심 기능',
        body: '서비스의 주요 기능, 사용 흐름, 차별점, 기대 효과를 문단 단위로 충분히 설명할 수 있습니다.',
      },
      {
        title: '데모 링크',
        body: '배포 링크, GitHub 저장소, 발표 자료, QR 코드 등 실제 체험으로 이어지는 정보를 함께 배치할 수 있습니다.',
      },
    ],
  },
  {
    id: 'team-2',
    name: 'Team 2',
    tagline: '서비스 소개 준비 중',
    description: '팀별 컬러와 스크린샷은 추후 상세 소개 화면에서 확장할 수 있습니다.',
    logoSrc: null,
    logoAlt: 'Team 2 서비스 로고',
    imageSrc: null,
    imageAlt: 'Team 2 서비스 대표 이미지',
    detailSections: [
      {
        title: '문제 정의',
        body: '서비스가 출발한 배경과 사용자가 겪는 문제를 충분한 길이의 글로 소개할 수 있습니다.',
      },
      {
        title: '핵심 기능',
        body: '화면 이미지와 함께 기능을 설명하고, 필요하다면 기능별 장점을 긴 본문으로 이어서 보여줄 수 있습니다.',
      },
      {
        title: '데모 링크',
        body: '서비스 링크와 관련 자료를 연결할 준비 영역입니다.',
      },
    ],
  },
  {
    id: 'team-3',
    name: 'Team 3',
    tagline: '서비스 소개 준비 중',
    description: '해커톤 당일 관람객이 빠르게 이해할 수 있는 요약을 넣을 예정입니다.',
    logoSrc: null,
    logoAlt: 'Team 3 서비스 로고',
    imageSrc: null,
    imageAlt: 'Team 3 서비스 대표 이미지',
    detailSections: [
      {
        title: '문제 정의',
        body: '관람객이 서비스의 필요성을 빠르게 이해할 수 있도록 문제 상황을 설명합니다.',
      },
      {
        title: '핵심 기능',
        body: '사용자가 어떤 순서로 서비스를 경험하는지, 가장 중요한 기능은 무엇인지 길게 풀어쓸 수 있습니다.',
      },
      {
        title: '데모 링크',
        body: '시연 페이지나 발표 자료 링크를 추가할 수 있습니다.',
      },
    ],
  },
  {
    id: 'team-4',
    name: 'Team 4',
    tagline: '서비스 소개 준비 중',
    description: '문제, 솔루션, 사용 흐름을 카드 단위로 소개할 수 있습니다.',
    logoSrc: null,
    logoAlt: 'Team 4 서비스 로고',
    imageSrc: null,
    imageAlt: 'Team 4 서비스 대표 이미지',
    detailSections: [
      {
        title: '문제 정의',
        body: '문제 상황과 타깃 사용자를 소개하는 긴 본문 영역입니다.',
      },
      {
        title: '핵심 기능',
        body: '솔루션의 사용 흐름과 기능별 강점을 페이지 전체 폭 안에서 차분하게 설명할 수 있습니다.',
      },
      {
        title: '데모 링크',
        body: '서비스 링크와 발표 자료를 함께 보여줄 수 있습니다.',
      },
    ],
  },
  {
    id: 'team-5',
    name: 'Team 5',
    tagline: '서비스 소개 준비 중',
    description: '서비스 링크와 발표 자료를 함께 보여줄 수 있습니다.',
    logoSrc: null,
    logoAlt: 'Team 5 서비스 로고',
    imageSrc: null,
    imageAlt: 'Team 5 서비스 대표 이미지',
    detailSections: [
      {
        title: '문제 정의',
        body: '서비스가 해결하려는 문제와 사용자 니즈를 충분히 설명할 수 있습니다.',
      },
      {
        title: '핵심 기능',
        body: '대표 이미지, 로고, 긴 설명을 함께 배치해 서비스의 흐름을 한 화면에서 이어서 볼 수 있습니다.',
      },
      {
        title: '데모 링크',
        body: '배포 링크, QR 코드, 발표 자료 등의 정보를 연결할 수 있습니다.',
      },
    ],
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
      '피드백을 작성해주신 분께 럭키드로우 기회를 1회 제공합니다. 피드백을 남기지 않아도 시연에 참여해주신 분께 원형 스티커를 나눠드립니다.',
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
]

export const detailLabels = ['문제 정의', '핵심 기능', '데모 링크']

export const exhibitionSlots = [
  {
    teamId: 'team-1',
    time: '12:40 - 13:45',
  },
  {
    teamId: 'team-2',
    time: '13:45 - 14:50',
  },
  {
    teamId: 'team-3',
    time: '14:50 - 15:55',
  },
  {
    teamId: 'team-4',
    time: '15:55 - 17:00',
  },
  {
    teamId: 'team-5',
    time: '17:00 - 18:00',
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
