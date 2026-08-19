import team1Logo from '../assets/team1/team1_logo.png'
import team1Thumbnail from '../assets/team1/team1_thumbnail.png'
import team1Thumbnail2 from '../assets/team1/team1_thumbnail2.png'
import team1Thumbnail3 from '../assets/team1/team1_thumbnail3.png'
import team1Thumbnail4 from '../assets/team1/team1_thumbnail4.png'
import team1Thumbnail5 from '../assets/team1/team1_thumbnail5.png'
import team2Logo from '../assets/team2/team2_logo.png'
import team2Thumbnail from '../assets/team2/team2_thumbnail.png'
import team3Logo from '../assets/team3/team3_logo.png'
import team3Thumbnail from '../assets/team3/team3_thumbnail.png'
import team4Logo from '../assets/team4/team4_logo.png'
import team4Thumbnail from '../assets/team4/team4_thumbnail.png'
import team5Logo from '../assets/team5/team5_logo.png'
import team5Thumbnail from '../assets/team5/team5_thumbnail.png'
import cleanerPrizeImage from '../assets/goods/cleaner.jpg'
import keyringPrizeImage from '../assets/goods/keyring.jpg'

export const navItems = [
  { to: '/', label: '소개', end: true },
  { to: '/event', label: '이벤트' },
  { to: '/teams', label: '팀 소개' },
]

export const teams = [
  {
    id: 'team-1',
    name: '성주 탐정사무소',
    mobileDetailTitleLines: ['성주', '탐정사무소'],
    tagline: '팀명: 껐다켜봐',
    description: '1976년 MCM 뮌헨 아틀리에의 수습 디자이너가 되어, AI 증언과 오프라인 QR 단서를 조합해 사라진 시안을 복원하는 온, 오프라인 추리 웹게임',
    logoSrc: team1Logo,
    logoAlt: '껐다켜봐 서비스 로고',
    imageSrc: team1Thumbnail,
    imageAlt: '껐다켜봐 서비스 대표 이미지',
    imageGallery: [
      { src: team1Thumbnail, alt: '껐다켜봐 서비스 대표 이미지 1' },
      { src: team1Thumbnail2, alt: '껐다켜봐 서비스 대표 이미지 2' },
      { src: team1Thumbnail3, alt: '껐다켜봐 서비스 대표 이미지 3' },
      { src: team1Thumbnail4, alt: '껐다켜봐 서비스 대표 이미지 4' },
      { src: team1Thumbnail5, alt: '껐다켜봐 서비스 대표 이미지 5' },
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
  {
    id: 'team-2',
    name: '레주밍',
    tagline: '팀명: 밤새조',
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
    name: '이쁠날',
    tagline: '팀명 : 파라파라나춰야지',
    description: '다들 살다보면 이런 생각을 해본 적 있지 않나요? \"이번 여행 전까지 꼭 살도 빼고 일찍 자고 인스턴스 줄여서 더 나은 모습으로 가야겠다!\" 본 서비스는 결혼식, 졸업식, 면접 등 \'특별한 D-Day\'를 앞둔 사용자를 위해 AI 피부 진단부터 기간별 맞춤 루틴, 실시간 고민 대응, D-Day 리포트까지 제공하는 D-Day 맞춤형 피부 웰니스 솔루션입니다.',
    logoSrc: team3Logo,
    logoAlt: 'Team 3 서비스 로고',
    imageSrc: team3Thumbnail,
    imageAlt: 'Team 3 서비스 대표 이미지',
    imageOrientation: 'natural',
    imageSize: 'mobile-app',
    detailSections: [
      {
        title: '문제 정의',
        body: `특별한 날을 앞둔 사람들은 피부 관리의 필요성을 크게 느끼지만,
기존 방식에서는 다음과 같은 3가지 한계에 직면합니다.

1. 정보 과잉 및 혼란:
   블로그와 유튜브의 무분별한 콘텐츠는 오히려 불확실성을 키웁니다.
   사용자는 자신의 정확한 피부 타입을 알지 못한 채
   유행하는 성분이나 제품을 무작위로 사용해 부작용을 겪습니다.

2. 획일적 조언과 기간 고려 부재:
   개인의 피부 상태와 D-Day까지 남은 기간을 전혀 고려하지 않는
   일률적인 루틴이 제공됩니다.
   (예: 중요한 행사를 불과 7일 앞두고 자극이 강한 레티놀을
   사용했다가 피부 트러블이 발생하는 사례)

3. 지속성 및 사후 관리 부재:
   루틴을 시작하더라도 중간에 트러블이나 고민이 생겼을 때
   즉각적인 피드백을 받지 못해 관리를 중간에 포기하게 됩니다`,
        mobileBody: `특별한 날을 앞둔 사람들은 피부 관리의 필요성을 크게 느끼지만, 기존 방식에서는 다음과 같은 3가지 한계에 직면합니다.

1. 정보 과잉 및 혼란:
블로그와 유튜브의 무분별한 콘텐츠는 오히려 불확실성을 키웁니다.
사용자는 자신의 정확한 피부 타입을 알지 못한 채 유행하는 성분이나 제품을 무작위로 사용해 부작용을 겪습니다.

2. 획일적 조언과 기간 고려 부재:
개인의 피부 상태와 D-Day까지 남은 기간을 전혀 고려하지 않는 일률적인 루틴이 제공됩니다.
(예: 중요한 행사를 불과 7일 앞두고 자극이 강한 레티놀을 사용했다가 피부 트러블이 발생하는 사례)

3. 지속성 및 사후 관리 부재:
루틴을 시작하더라도 중간에 트러블이나 고민이 생겼을 때 즉각적인 피드백을 받지 못해 관리를 중간에 포기하게 됩니다`,
      },
      {
        title: '핵심 기능',
        body: '18문항 설문으로 피부를 정량 진단하고, D-Day에 맞춰 AI가 루틴·성분을 추천합니다. 매일 TODO 리스트로 관리 지속성을 유지하며, 고민 발생 시 AI가 즉시 대응 지침을 제공합니다.',
      },
      {
        title: '데모 링크',
        body: 'https://www.d-dayskincare.cloud/',
      },
      {
        title: '피드백 폼',
        body: '피드백 폼 링크 준비 중입니다.',
      },
    ],
  },
  {
    id: 'team-4',
    name: 'Memory Atelier',
    tagline: '팀명: 포미닛',
    description: '포미닛은 사연이 있는 옷을 AI로 분석해서 MCM 감성이 들어간 3D 럭셔리 에디션으로 바꿔주는 서비스이다. 만든 결과물은 디지털 컬렉션으로 보존하고 공유할 수 있으며 원하면 실물 제작까지 신청받는다. 사연 있는 옷 사진과 사연을 적어서 올리면 된다. AI는 vision기술을 통해 옷의 색감·패턴·질감 같은 시각적 특징과 nlp기술로 사용자의 이야기에 담긴 감정·상황을 함께 이해해, 새로운 제품을 만드는 것에서 나아가 한 사람만의 추억을 럭셔리한 디지털 자산으로 다시 해석한다.',
    logoSrc: team4Logo,
    logoAlt: 'Team 4 서비스 로고',
    imageSrc: team4Thumbnail,
    imageAlt: 'Team 4 서비스 대표 이미지',
    imageOrientation: 'natural',
    detailSections: [
      {
        title: '문제 정의',
        body: '낡거나 작아진 옷을 쉽게 헌옷수거함에 넣지 못하는 순간이 있다. 멀어진 가족의 옷이거나 첫 출근날의 떨림이 베인 양복, 소중한 사람한테 받은 선물처럼 단순한 옷이 아니라 개인의 소중한 순간과 관계를 증명하는 매개체 역할을 하기 때문이다. 문제는 이것을 옷장에 쌓아두면 공간만 차지하고 세월에 따라 상할수있다. 버리자니 마음에 걸리고 놔두자니 방치되는 상황 속에서 많은 이들이 적절한 해답을 찾지 못하고 있다. 단순히 갖고 있거나 버리는 방식 말고, 그 옷이 가진 서사와 가치를 이어갈 현실적인 대안이 나와야 한다.',
      },
      {
        title: '핵심 기능',
        body: `- 입력 및 서사 분석 (Stage 1)
        옷 사진과 사연을 올리면 LLM이 시각 특징(색감·패턴·세월의 흔적)과 감정을 분석해 에디션명과 보증서 문구를 생성한다.

- 디자인 스펙 및 2D 컨셉 (Stage 2~3)
        MCM 브랜드 자산 RAG를 결합해 세 가지안의 디자인 스펙을 도출하고, Gemini 이미지 모델의 다중 이미지 융합으로 2D 컨셉 이미지를 만든다.

- Image-to-3D 변환 (Stage 4)
        검증을 통과한 후보 중 사용자가 선택한 2D 이미지 1장만 Meshy API로 전달해 PBR 텍스처의 3D GLB 모델을 생성한다.

- 럭셔리 큐레이션 (Stage 5)
        MCM 정품 카탈로그 기반으로 에디션과 어울리는 제품을 추천하고 그 이유를 사연과 연결해 설명한다. 각 단계의 산출물은 3D 상세보기가 포함된 디지털 보증서와 개인 컬렉션으로 조합되어 제공된다.

- 기술적 신뢰성
        경량 언어모델이 검증 게이트로 컨셉 이미지 3장을 병렬 채점해 불합격 컷은 제외하고 통과 컷만 제시하며, 전원 불합격 시에만 사유를 피드백해 1회 자동 재생성한다. 스키마 강제와 카탈로그 주입으로 존재하지 않는 제품을 지어내는 환각을 구조적으로 차단한다.`
      },
      {
        title: '데모 링크',
        body: 'https://www.memory-atelier.store',
      },
      {
        title: '피드백 폼',
        body: '피드백 폼 링크 준비 중입니다.',
      },
    ],
  },
  {
    id: 'team-5',
    name: 'K-Buddy',
    mobileDetailTitleSize: 'compact',
    tagline: '팀명: 한바퀴반',
    description: 'K-Buddy는 한국에 체류 중인 외국인 유학생·워킹홀리데이·신규 거주자를 위한 AI 기반 생활 정착 지원 서비스입니다. 비자, 체류 행정, TOPIK 일정, 대입 정보처럼 \"놓치면 불이익으로 이어지는\" 행정 절차를 한 곳에서 확인하고, 본인 상황에 맞는 정보를 놓치지 않도록 캘린더와 알림으로 미리 챙겨줍니다.',
    logoSrc: team5Logo,
    logoAlt: 'Team 5 서비스 로고',
    imageSrc: team5Thumbnail,
    imageAlt: 'Team 5 서비스 대표 이미지',
    imageOrientation: 'natural',
    detailSections: [
      {
        title: '문제 정의',
        body: `1. 정보가 여러 정부기관 사이트에 흩어져 있음
- 비자/외국인등록: 하이코리아
- 시험 일정: topik.go.kr
- 법령 원문: 국가법령정보센터(law.go.kr)
- 대입 정보: Study in Korea
각 사이트마다 UI, 용어, 최신성이 달라 본인에게 필요한 정보를 종합적으로 파악하기 어렵습니다.

2. 정보 대부분이 한국어 중심으로 제공됨
외국인 입장에서 법령 원문이나 행정 공지를 이해하기 쉽지 않습니다.

3. 기한을 놓치면 실제 불이익으로 이어짐
- 외국인등록: 입국 후 90일 이내 (출입국관리법 제31조)
- 체류지 변경신고: 이사 후 15일 이내 (출입국관리법 제36조)
- 체류기간 연장: 만료일 이전에만 신청 가능
위 절차들은 단순 "참고사항"이 아니라 법적 의무이며, 지연 시 과태료 등 불이익이 발생할 수 있습니다.

4. 개인 상황에 맞는 정보만 선별해서 알려주는 서비스가 없음
대부분의 정보 제공 채널은 모든 사용자에게 동일한 정보를 나열할 뿐, "나는 D-2 비자고 체류기간이 곧 만료되는데 뭘 먼저 해야 하지?"에 답 해주지 않습니다.`,
      },
      {
        title: '핵심 기능',
        body: `1. 캘린더 — 공통 일정 + 개인 일정 통합 조회
- 월별/임박(7일 이내) 일정 조회
- TOPIK 접수기간·시험일 등 공통 일정을 신청기간/시험기간으로 명확히 구분
- 체류기간 만료 30일 전(D-30) 개인 알림을 캘린더에 자동으로 끼워 보여줌(별도 입력 없이, 본인 프로필의 체류만료일 기준으로 자동 계산)

2. 세부정보(가이드) — 카테고리별 실전 가이드
- 비자 / TOPIK / 법률·행정 / 대입 4대 카테고리
- 요약 → 핵심 주의사항 → 단계별 방법 → 주의사항 → 팁 → FAQ 구조로, "지금 이 상황에서 뭘 해야 하는지" 행동 중심으로 정리
- 법률 관련 항목은 법령 원문(출입국관리법)을 근거로 작성해 신뢰도 확보

3. AI 기반 맞춤 알림 (개발 중)
- 사용자 프로필(비자 종류, 체류기간, 입국일, 외국인등록 여부 등)을 기반으로 매일 자동으로 "지금 이 사용자에게 필요한 알림"을 AI가 우선순위와 함께 추천
- 체류기간 만료 임박, 외국인등록 미등록 등 조건을 자동 감지해 알림 생성
- 사용자의 알림 수신 설정(전체/중요만/받지 않음)에 따라 노출 여부 조절`,
      },
      {
        title: '데모 링크',
        body: 'https://frontend-chi-pied-78.vercel.app/language',
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
    imageSrc: cleanerPrizeImage,
  },
  {
    name: '키링',
    imageAlt: '키링 상품 이미지',
    imageSrc: keyringPrizeImage,
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
    teamId: 'team-2',
    time: '12:40 - 13:45',
  },
  {
    teamId: 'team-4',
    time: '13:45 - 14:50',
  },
  {
    teamId: 'team-1',
    time: '14:50 - 15:55',
  },
  {
    teamId: 'team-3',
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
