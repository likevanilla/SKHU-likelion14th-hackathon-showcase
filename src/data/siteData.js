import team2Logo from '../assets/team2/team2_logo.png'
import team2Thumbnail from '../assets/team2/team2_thumbnail.png'
import team5Logo from '../assets/team5/team5_logo.png'
import team5Thumbnail from '../assets/team5/team5_thumbnail.png'
import team5Thumbnail2 from '../assets/team5/team5_thumbnail2.png'
import team5Thumbnail3 from '../assets/team5/team5_thumbnail3.png'
import team5Thumbnail4 from '../assets/team5/team5_thumbnail4.png'
import team5Thumbnail5 from '../assets/team5/team5_thumbnail5.png'

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
      {
        title: '피드백 폼',
        body: '피드백 폼 링크 준비 중입니다.',
      },
    ],
  },
  {
    id: 'team-2',
    name: '밤새조',
    tagline: '레주밍',
    description: 'AI가 이력서와 채용공고를 분석해, 지원 국가에 맞는 형식과 표현으로 이력서를 개선해주는 해외 취업 이력서 로컬라이징 서비스',
    logoSrc: team2Logo,
    logoAlt: '레주밍 서비스 로고',
    imageSrc: team2Thumbnail,
    imageAlt: '레주밍 서비스 대표 이미지',
    imageOrientation: 'wide',
    detailSections: [
      {
        title: '문제 정의',
        body: '한국 학생들이 해외 인턴·취업에 지원할 때, 국가마다 다른 이력서 형식과 채용 문화의 차이로 어려움을 겪는 경우가 많다. 같은 경험과 역량도 현지 기준에 맞게 표현하지 못하면 서류 단계에서 경쟁력을 충분히 보여주기 어렵다.',
      },
      {
        title: '핵심 기능',
        body: `- 이력서·채용공고 입력
사용자가 이력서 텍스트와 이미지 텍스트, 지원 기업명, 채용공고, 목표 국가를 입력할 수 있다.

- 국가별 이력서 관습 분석
미국, 일본, 독일, 한국 등 국가별로 다른 사진, 개인정보, 지원동기, 경력 표현 방식을 분석한다.

- AI 기반 강점 분석
사용자의 경험과 채용공고를 비교해 직무와 연결되는 핵심 강점을 요약해준다.

- 보완 필요 영역 제안
지원 국가의 형식에 맞지 않는 부분이나 부족한 역량 표현, 근거가 약한 내용을 알려준다.

- 맞춤형 코칭 인사이트 제공
지원 기업과 국가에 맞춰 어떤 표현을 강화해야 하는지 구체적인 작성 방향을 제안한다.

- AI 추천 이력서 본문 생성
분석 결과를 바탕으로 바로 참고할 수 있는 현지화된 이력서 문장을 생성한다`,
      },
      {
        title: '데모 링크',
        body: 'https://front-blush-tau.vercel.app/',
      },
      {
        title: '피드백 폼',
        body: '피드백 폼 링크 준비 중입니다.',
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
      {
        title: '피드백 폼',
        body: '피드백 폼 링크 준비 중입니다.',
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
      {
        title: '피드백 폼',
        body: '피드백 폼 링크 준비 중입니다.',
      },
    ],
  },
  {
    id: 'team-5',
    name: '껐다켜봐',
    tagline: '성주 탐정사무소',
    description: '1976년 MCM 뮌헨 아틀리에의 수습 디자이너가 되어, AI 증언과 오프라인 QR 단서를 조합해 사라진 시안을 복원하는 온, 오프라인 추리 웹게임',
    logoSrc: team5Logo,
    logoAlt: '껐다켜봐 서비스 로고',
    imageSrc: team5Thumbnail,
    imageAlt: '껐다켜봐 서비스 대표 이미지',
    imageGallery: [
      { src: team5Thumbnail, alt: '껐다켜봐 서비스 대표 이미지 1' },
      { src: team5Thumbnail2, alt: '껐다켜봐 서비스 대표 이미지 2' },
      { src: team5Thumbnail3, alt: '껐다켜봐 서비스 대표 이미지 3' },
      { src: team5Thumbnail4, alt: '껐다켜봐 서비스 대표 이미지 4' },
      { src: team5Thumbnail5, alt: '껐다켜봐 서비스 대표 이미지 5' },
    ],
    detailSections: [
      {
        title: '문제 정의',
        body: ' MCM은 1976년 뮌헨에서 시작해 여행과 이동성, 비세토스 패턴, 기능 중심의 디자인 철학을 발전시켜 왔다. 하지만 이러한 헤리티지는 주로 전시 설명처럼 수동적인 정보로 전달돼 젊은 고객이 흥미를 느끼고 기억하기 어렵다. 그 결과 젊은 고객은 브랜드 역사를 어렵게 느끼고, 가방의 외형은 보지만 패턴·스트랩·수납 구조에 담긴 설계 의도까지 이해하지 못하며, 오프라인 방문 역시 제품 감상에 그쳐 개인화된 경험이 남지 않는다. ‘성주 탐정사무소’는 실제 역사와 제품 철학을 고객이 직접 탐색하고 기억할 수 있는 참여형 브랜드 경험이 필요하다는 생각에서 제작되었다.',
      },
      {
        title: '핵심 기능',
        body: ' 사용자는 MCM의 수습 디자이너가 되어 여행·핸즈프리·데일리 중 가방 스타일을 선택하고 실제 MCM 제품을 레퍼런스로 받는다. 비세토스 패턴과 외관을 복원하는 SIGNATURE, 스트랩·손잡이·수납 구조를 복원하는 FUNCTION 사건을 진행한다. 사건마다 용의자 2명과 대화하며, 한 사람당 최대 3번 질문한다. AI는 정해진 사실과 인물 성격을 유지하며 유동적으로 답변한다. 대화 후 오프라인 공간의 QR을 스캔해 반납 기록, 촬영 사진, 출입·반입 기록 등의 현장 단서를 획득한다. 사용자는 AI 증언과 QR 증거를 비교해 용의자와 사건의 결론을 선택한다. 두 사건을 해결하면 완성된 제품과 구매 링크가 공개되며, 결과 보상으로 1인 1개의 디지털 Designer Pass를 발급한다.',
      },
      {
        title: '데모 링크',
        body: 'https://seongju-detective.vercel.app/',
      },
      {
        title: '피드백 폼',
        body: '피드백 폼 링크 준비 중입니다.',
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
]

export const detailLabels = ['문제 정의', '핵심 기능', '데모 링크', '피드백 폼']

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
