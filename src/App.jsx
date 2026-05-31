import React from 'react';

const appUrl = 'https://new-jibsalife.vercel.app';
const competitiveIcons = {
  diary: 'https://www.figma.com/api/mcp/asset/081e0078-3a41-44a1-99a0-a59e334f78bc',
  dictionary: 'https://www.figma.com/api/mcp/asset/e6e6d5ac-bfa1-4348-a181-fd69400c899b',
  ttcare: 'https://www.figma.com/api/mcp/asset/5b21e3e6-9d6e-4120-bc2c-db11ccc2978a',
  televet: 'https://www.figma.com/api/mcp/asset/7f2e34c6-2cf8-4823-8ee9-4efe558b7cf1',
  fitpet: 'https://www.figma.com/api/mcp/asset/c2d5e04d-c091-4f0d-8fe9-2cae77fcc673',
  petfriends: 'https://www.figma.com/api/mcp/asset/188df977-9d99-445b-9dbc-f481a222426e',
  jibsalife: 'https://www.figma.com/api/mcp/asset/0687730c-3b20-4190-b687-57b84e35172a',
  hospital: 'https://www.figma.com/api/mcp/asset/f841d57a-7937-4335-a0d8-9bf6bf84ee5a',
  community: 'https://www.figma.com/api/mcp/asset/5047c531-4c8e-4b20-ba40-34b48974bffa',
  ai: 'https://www.figma.com/api/mcp/asset/a54745d0-60fd-44a0-b999-94b4392c2728',
};
const mvpImages = [
  'https://www.figma.com/api/mcp/asset/2ca2ea62-7ba6-4976-a505-31b650ddbdc4',
  'https://www.figma.com/api/mcp/asset/9314725a-c3cc-4141-89cf-938eab065c20',
  'https://www.figma.com/api/mcp/asset/7b04efee-7cf9-43d9-9a9b-f548861a4576',
];

function CoverDecor() {
  return (
    <div className="cover-decor" aria-hidden="true">
      <span className="spark spark--1" />
      <span className="spark spark--2" />
      <span className="spark spark--3" />
      <span className="spark spark--4" />
      <span className="paw paw--1" />
      <span className="paw paw--2" />
      <span className="paw paw--3" />
      <span className="paw paw--4" />
      <span className="paw paw--5" />
    </div>
  );
}

function BrandIcon() {
  return (
    <div className="brand-icon" aria-hidden="true">
      <div className="dog-face">
        <i className="dog-ear" />
        <i className="dog-eye dog-eye--left" />
        <i className="dog-eye dog-eye--right" />
        <i className="dog-mouth" />
      </div>
      <div className="paw-badge">
        <i />
      </div>
      <div className="stethoscope" />
    </div>
  );
}

function PhonePreview() {
  return (
    <div className="cover-phone">
      <div className="phone-status">
        <span>9:41</span>
        <b />
        <i />
      </div>
      <div className="phone-content">
        <h3>집사인생에<br />오신 것을 환영해요!</h3>
        <p>우리 아이의 일상을 기록하고 나누며<br />사랑 가득한 반려생활을 시작하세요.</p>
        <div className="pet-scene">
          <div className="pet pet--cat" />
          <div className="pet pet--dog" />
          <div className="pet pet--bowl" />
        </div>
        <button>다음</button>
      </div>
    </div>
  );
}

function QrCode() {
  const active = new Set([
    0, 1, 2, 4, 6, 7, 8, 10, 12, 13, 14,
    16, 18, 19, 21, 23, 25, 27, 28, 30, 31,
    33, 35, 37, 39, 40, 42, 44, 46, 48, 49,
    51, 52, 54, 56, 57, 59, 61, 63, 64, 65,
    67, 69, 70, 72, 74, 76, 78, 79, 80,
  ]);
  return (
    <div className="qr-code" aria-hidden="true">
      {Array.from({ length: 81 }).map((_, index) => (
        <i className={active.has(index) ? 'is-on' : ''} key={index} />
      ))}
    </div>
  );
}

function Hero() {
  return (
    <section className="cover">
      <CoverDecor />
      <div className="cover-meta">
        <span>AI챗봇 지원 팬덤 커뮤니티 Mobile UX/UI 프로젝트</span>
        <span>2026. 04. 22. - 2026. 05. 18. &nbsp; 강남 이젠아카데미DX교육센터</span>
      </div>
      <div className="cover-brand">
        <BrandIcon />
        <div>
          <h1>집사인생</h1>
          <p>AI가 함께하는 우리 아이 건강 라이프</p>
        </div>
      </div>
      <div className="cover-phone-wrap">
        <PhonePreview />
      </div>
      <QrCode />
      <div className="cover-sponsors">
        <span className="gov-logo" />
        <span className="kdt-logo">KOREA TECH</span>
      </div>
      <p className="cover-mentor">멘토 최율희 T</p>
      <p className="cover-team">팀원 김다연 유승현 임소정 조예빈 최홍석 홍주희</p>
    </section>
  );
}

function SectionTitle({ eyebrow, title, desc }) {
  return (
    <header className="section-title">
      <p>{eyebrow}</p>
      <h2>{title}</h2>
      {desc ? <span>{desc}</span> : null}
    </header>
  );
}

function Overview() {
  return (
    <section className="overview-section">
      <div className="overview-paws" aria-hidden="true">
        {Array.from({ length: 6 }).map((_, index) => <span key={index} />)}
      </div>
      <div className="overview-copy">
        <p>Overview</p>
        <h2>
          반려생활 <em>커뮤니티와 AI 케어</em>를 기반으로
          <br />
          건강 기록부터 소통까지 함께하는 반려 플랫폼
        </h2>
        <span>
          집사인생은 소중한 일상을 기록하고 건강 상태를 함께 살피며,
          <br />
          집사들 간의 공감과 소통을 통해 더 깊은 유대와 행복한 반려생활을 만들어갑니다.
        </span>
      </div>
    </section>
  );
}

function Background() {
  return (
    <section className="background-section">
      <div className="background-copy">
        <p>Background</p>
        <h2>
          증상이 생긴 후에야 대응하는 <em>반려동물 케어</em>, 이대로 괜찮을까요?
        </h2>
        <span>반려동물을 가족처럼 여기지만, 건강 관리는 여전히 경험과 검색에 의존하고 있습니다.</span>
      </div>
    </section>
  );
}

function PetGrowthChart() {
  const bars = [
    { x: 76, y: 301.1, w: 41, h: 74, value: '17.9%', valueX: 96.5, valueY: 292, year: '2012년', yearX: 96.8, fill: '#dcdcdc' },
    { x: 157, y: 278.1, w: 41, h: 97, value: '25.4%', valueX: 178, valueY: 270, year: '2022년', yearX: 177.5, fill: '#dcdcdc' },
    { x: 238, y: 236.1, w: 40, h: 139, value: '28.6%', valueX: 257.5, valueY: 224, year: '2024년', yearX: 257.5, fill: '#dcdcdc' },
    { x: 318.4, y: 157.6, w: 40.8, h: 217.6, value: '29.2%', valueX: 340.5, valueY: 150, year: '2025년', yearX: 339.1, fill: '#8a38f5' },
  ];

  return (
    <svg className="desk-chart desk-chart-growth" viewBox="0 0 443.2 493" role="img" aria-label="반려동물 양육 증가 그래프">
      <line x1="25.6" y1="376.8" x2="417.6" y2="376.8" stroke="#b3b3b3" strokeWidth="1" />
      <path d="M86.45 279.76 L173.2 251.2 L255.2 201.2 L347.67 137.35" fill="none" stroke="#6c3aa9" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <text x="180.5" y="198" textAnchor="middle" className="chart-red">약 63% 증가</text>
      {bars.map((bar) => (
        <g key={bar.year}>
          <rect x={bar.x} y={bar.y} width={bar.w} height={bar.h} rx="4" fill={bar.fill} />
          <text x={bar.valueX} y={bar.valueY} textAnchor="middle" className="chart-value">{bar.value}</text>
          <text x={bar.yearX} y="402" textAnchor="middle" className="chart-year">{bar.year}</text>
        </g>
      ))}
      <circle cx="347.67" cy="137.35" r="3.2" fill="#6c3aa9" />
      <circle cx="255.2" cy="201.2" r="3.2" fill="#6c3aa9" />
      <circle cx="173.2" cy="251.2" r="3.2" fill="#6c3aa9" />
      <circle cx="86.45" cy="279.76" r="3.2" fill="#6c3aa9" />
    </svg>
  );
}

function HospitalDonutChart() {
  return (
    <svg className="desk-chart desk-chart-donut" viewBox="0 0 443.2 493" role="img" aria-label="최근 1년 내 동물병원 이용 경험 95.1%">
      <ellipse cx="224.8" cy="263.6" rx="138" ry="141.5" fill="#dcdcdc" />
      <path d="M224.8 270.1 L194.7 122.1 A148 148 0 1 1 132.7 154.2 Z" fill="#8a38f5" />
      <rect x="224.8" y="286" width="182" height="99" rx="8" fill="#dbc0ff" />
      <text x="315.8" y="336" textAnchor="middle" className="chart-percent">95.1%</text>
      <text x="315.8" y="371" textAnchor="middle" className="chart-label">이용 경험 있다</text>
    </svg>
  );
}

function PetcareMarketChart() {
  return (
    <svg className="desk-chart desk-chart-market" viewBox="0 0 444 493" role="img" aria-label="국내 펫케어 시장 성장 전망 그래프">
      <line x1="68.8" y1="362.4" x2="364" y2="362.4" stroke="#b3b3b3" strokeWidth="1" />
      <path d="M108.95 313.26 L208 240 L327 169.09" fill="none" stroke="#6c3aa9" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <text x="195.1" y="205" textAnchor="middle" className="chart-red">2배 성장</text>
      <g>
        <text x="118.6" y="302" textAnchor="middle" className="chart-purple">3.4조</text>
        <rect x="95.6" y="324" width="41" height="38" rx="4" fill="#dcdcdc" />
        <text x="68.1" y="381" textAnchor="middle" className="chart-year-muted">2023</text>
      </g>
      <circle cx="108.95" cy="313.26" r="3.2" fill="#6c3aa9" />
      <circle cx="327" cy="169.09" r="3.2" fill="#6c3aa9" />
      <g>
        <text x="328.1" y="151" textAnchor="middle" className="chart-purple">6조</text>
        <rect x="310.6" y="175" width="41" height="187" rx="4" fill="#8a38f5" />
        <text x="363.3" y="381" textAnchor="middle" className="chart-year-muted">2027</text>
      </g>
    </svg>
  );
}

function SimpleResearch() {
  return (
    <section className="desk-section">
      <div className="desk-inner">
        <header className="desk-header">
          <p>Desk research</p>
          <h2>반려 동물은 가족이 되었지만, 건강 관리는 여전히 <em>사후 대응</em>에 머물고 있습니다</h2>
          <span>반려동물 양육 증가와 병원 이용 확대, 펫케어 시장 성장은 예방형 건강관리 수요를 보여줍니다.</span>
        </header>
        <div className="desk-cards">
          <article className="desk-card desk-card-bars">
            <small>반려 동물 양육의 일상화</small>
            <h3>3가구당 1가구 반려동물과 함께 생활</h3>
            <PetGrowthChart />
            <p>출처 : KB경영연구소 2025</p>
          </article>
          <article className="desk-card desk-card-donut">
            <small>건강관리 서비스 이용 확대</small>
            <h3>최근 1년 내 동물병원 이용 경험</h3>
            <HospitalDonutChart />
            <p>출처 : 농림축산식품부 2025</p>
          </article>
          <article className="desk-card desk-card-line">
            <small>국내 펫케어 시장 지속 성장 전망</small>
            <h3>건강관리, 스마트케어 수요 지속적 증가</h3>
            <PetcareMarketChart />
            <p>출처 : GSP뉴스 2025</p>
          </article>
        </div>
      </div>
    </section>
  );
}

function CaseHeader({ eyebrow, title, desc }) {
  return (
    <header className="case-header">
      <p>{eyebrow}</p>
      <h2>{title}</h2>
      {desc ? <span>{desc}</span> : null}
    </header>
  );
}

function CompetitiveAnalysis() {
  const apps = [
    ['집사일기', competitiveIcons.diary],
    ['멍냥보감', competitiveIcons.dictionary],
    ['티티케어', competitiveIcons.ttcare],
    ['텔레벳', competitiveIcons.televet],
    ['핏펫', competitiveIcons.fitpet],
    ['펫프렌즈', competitiveIcons.petfriends],
    ['집사인생', competitiveIcons.jibsalife],
  ];
  const rows = ['커뮤니티', 'AI 분석', 'AI 챗봇', '병원 연결', '건강 기록', '데이터 확인'];
  return (
    <section className="case-section">
      <div className="case-inner">
        <CaseHeader
          eyebrow="Competitive analysis"
          title={<>현재 시장의 반려동물 케어 서비스를 분석하여 <em>개선 방향을</em> 도출했습니다.</>}
          desc="주요 서비스의 장단점을 분석 및 <집사인생>의 차별화 요소를 정의했습니다."
        />
        <div className="competitive-board">
          <div className="compare-table">
            <div className="compare-badge">COMPETITIVE ANALYSIS</div>
            <div className="compare-head">
              <span />
              {apps.map(([app, icon], index) => (
                <b className={index === apps.length - 1 ? 'is-target' : ''} key={app}>
                  <i><img alt="" src={icon} /></i>
                  {app}
                </b>
              ))}
            </div>
            {rows.map((row, rowIndex) => (
              <div className="compare-row" key={row}>
                <strong>{row}</strong>
                {apps.map(([app], index) => (
                  <i className={index === apps.length - 1 || (rowIndex + index) % 3 === 0 ? 'is-on' : ''} key={app + row} />
                ))}
              </div>
            ))}
          </div>
          <div className="analysis-list">
            {[
              ['병원 연결', competitiveIcons.hospital, '방문 필요 여부를 빠르게 판단할 수 있도록 병원 연결 및 건강관리 가이드를 제공합니다.'],
              ['커뮤니티 기반', competitiveIcons.community, '사용자 경험과 정보를 공유할 수 있는 커뮤니티를 통해 신뢰 기반의 소통 환경을 제공합니다.'],
              ['AI 챗봇', competitiveIcons.ai, 'AI 상담 기능을 통해 반려동물 상태를 확인하고 사용자 맞춤형 정보를 제공합니다.'],
            ].map(([label, icon, text]) => (
              <article key={text}>
                <b><img alt="" src={icon} />{label}</b>
                <span>{text}</span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MarketResearch() {
  const items = [
    ['건강관리 수요 확대', <>반려동물을 가족처럼 인식하는 문화가 확산되며 <em>건강 예방 관리</em>에 대한 관심이 커지고 있다.<br />보호자는 병원 방문 전 상태를 먼저 확인하고 싶어한다.</>, '출처 : KB경영연구소 「2025 한국 반려동물 보고서」'],
    ['AI 기술의 현실화', <>AI 분석 요약 기술이 고도화되며 <em>이상 신호 감지</em>와 기록 기반 건강 보조가 가능해지고 있다.<br />단순 기록을 넘어 해석과 안내 경험이 가능하다.</>, '십일리터 × 삼성전자 CES 2026 협업 사례\n출처 : 유니콘팩토리 (2026.01.09)'],
    ['새로운 서비스 기회', <>기존 반려 앱은 일상 사용률이 낮지만 건강관리 어려움은 여전히 존재한다.<br />따라서 <em>기록 + AI 보조 서비스</em>의 기회가 커지고 있다.</>, '출처 : 메가경제, "펫 홈케어가 새로운 표준으로" (2026)'],
  ];
  return (
    <section className="case-section">
      <div className="case-inner">
        <CaseHeader
          eyebrow="Market research"
          title={<>반려동물 건강관리 수요 확대와 <em>AI 기술 현실화</em></>}
          desc={<>반려동물 건강관리 니즈는 높아졌지만, 기존 서비스는 기록 중심에 머물러 있습니다.<br />AI 기술의 발전은 예방형 건강관리 서비스의 새로운 가능성을 만들고 있습니다.</>}
        />
        <div className="market-circles">
          {items.map(([title, body, source]) => (
            <article key={title}>
              <span />
              <div>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
              <small>{source}</small>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SurveyResearch() {
  return (
    <section className="case-section">
      <div className="case-inner">
        <CaseHeader
          eyebrow="Survey Research"
          title={<>반려동물 건강 관리 인식과 서비스 니즈를 파악하기 위해<br />구글폼 설문조사를 진행했습니다</>}
          desc={<>우리는 반려동물 건강 관리 과정에서 사용자의 정보 탐색 방식과 병원 방문 판단 기준,<br />AI 건강 관리 기능에 대한 인식과 필요를 중심으로 살펴보았습니다.</>}
        />
        <div className="survey-board">
          <article className="survey-card">
            <h3>Q1. 커뮤니티 활동과 연계된 추천, 보상, 랭킹 기능이 있다면 앱 참여와 행동 변화에 영향을 줄까요?</h3>
            <div className="survey-donut">
              <b>75%</b>
              <span>경험 있음</span>
              <i>25%</i>
            </div>
          </article>
          <article className="survey-card survey-answers">
            <h3>Q2. 이런 앱이 있다면 꼭 필요하다고 생각하는 기능은 무엇인가요?</h3>
            <p>건강 이상이 보여도 어떤 증상인지 <em>판단하고 싶어요</em></p>
            <p>병원 방문 기록이나 투약 기록을 <em>확인하고 싶어요</em></p>
            <p>반려동물 건강 정보를 <em>한곳에서 보고 싶어요</em></p>
            <p>AI로 <em>건강 상태를 쉽게 확인</em>할 수 있으면 좋겠어요</p>
          </article>
        </div>
        <p className="survey-meta">응답자 <b>총 36명</b> · 응답 기간 <b>2026.04.28 ~ 04.30</b></p>
        <p className="survey-source">설문조사 구글 폼 : https://forms.gle/9DYK1m8ZdETrCJxx5</p>
      </div>
    </section>
  );
}

function PainPoint() {
  const bubbles = [
    '어떤 증상인지 스스로 판단하기 어려워요',
    '건강 기록과 병원 기록을 자주 놓치게 돼요',
    '건강 관리를 꾸준히 하기엔 번거롭고 어려워요',
    '정보가 너무 많아 혼란스러워요',
    '혼자 있는 시간에 무슨 일이 생길까 불안해요',
    '반려동물의 이상 신호를 늦게 발견하게 돼요',
  ];
  return (
    <section className="case-section pain-section">
      <div className="case-inner">
        <div className="pain-map">
          {bubbles.map((text, index) => <span className={`bubble bubble-${index + 1}`} key={text}>{text}</span>)}
          <div className="pain-core">
            <p>Pain Point</p>
            <h2>반려동물 건강 관리,<br />왜 항상 늦게 대응하게 될까요?</h2>
            <span>설문 응답자들은 이상 징후를 발견해도 판단과 기록 과정에서 어려움을 겪고 있었습니다.</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function PersonaCard({ type, quote, avatar, needs, steps }) {
  return (
    <article className="persona-card">
      <h3>{type}</h3>
      <div className="persona-sheet">
        <div className={`persona-avatar ${avatar}`} />
        <blockquote>{quote}</blockquote>
        <div className="persona-needs">
          <b>Needs</b>
          <p>{needs}</p>
          <span>빠른 상태 확인</span><span>기록 관리</span><span>커뮤니티</span>
        </div>
        <h4>Journey Map</h4>
        <div className="journey-row">
          {steps.map((step, index) => (
            <div className="journey-card" key={step}>
              <i>{index + 1}</i>
              <b>{step}</b>
              <span>건강 상태를 확인하고 다음 행동을 고민합니다.</span>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

function Personas() {
  return (
    <section className="persona-section">
      <div className="persona-inner">
        <PersonaCard
          type="Persona 1: MAIN"
          avatar="avatar-main"
          quote="빠르고 정확하게 상태를 판단하고 케어 루틴을 기록으로 관리하고 싶어요."
          needs="반려동물의 건강 변화와 기록을 한눈에 확인하고 싶다."
          steps={['이상 징후 발견', '정보 탐색', '판단 혼란', '병원 고민', '관리 필요']}
        />
        <PersonaCard
          type="Persona 2: SUB"
          avatar="avatar-sub"
          quote="우리 아이가 아파온 거 나만 보기 아까워요."
          needs="일상의 기록을 공유하고 유사한 경험을 가진 보호자와 소통하고 싶다."
          steps={['귀여운 순간 발견', '기록 욕구 발생', '정리 부담', '공유 고민', '참여 기대']}
        />
      </div>
    </section>
  );
}

function InformationArchitecture() {
  const groups = [
    ['홈', '오늘의 요약', 'AI 기반 분석', '건강 미션'],
    ['커뮤니티', '게시글', '댓글', '좋아요'],
    ['AI', '증상 선택', '사진 업로드', '분석 결과', '케어 가이드'],
    ['기록', '날짜별 기록', '병원 상담 내역'],
    ['마이페이지', '프로필 관리', '알림 설정', '나의 활동'],
  ];
  return (
    <section className="case-section">
      <div className="case-inner ia-inner">
        <CaseHeader
          eyebrow="Information Architecture"
          title="반려인의 기록과 건강 관리 흐름을 직관적으로 탐색할 수 있도록 설계했어요"
        />
        <div className="ia-tree">
          <div className="ia-root">집사인생</div>
          <div className="ia-groups">
            {groups.map(([head, ...children]) => (
              <div className="ia-group" key={head}>
                <b>{head}</b>
                {children.map((child) => <span key={child}>{child}</span>)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MvpGoal() {
  const cards = [
    ['“기록하기 귀찮아서\n중간에 그만두게 돼요”', '사진 한 장으로 기록 끝', '건강 기록 부담을 줄이고\n일상 속 데이터를 쉽게 쌓을 수 있도록 설계'],
    ['“병원에 가야되는지 지켜봐야 되는지\n모르겠어요 반려동물이 걱정돼요”', 'AI 건강 판단 가이드', '초기 단계를 빠르게 진단하고\n필요시 수의사 안내를 도와드려요'],
    ['“반려동물을 키우고 있는 집사들과\n정보를 나누고 싶어요”', '함께하는 집사 커뮤니티', '7일 챌린지와 커뮤니티로\n꾸준한 건강 기록 습관을 만들어요'],
  ];
  return (
    <section className="case-section">
      <div className="case-inner mvp-inner">
        <CaseHeader
          eyebrow="MVP GOAL"
          title={<>기록부터 건강관리까지, 반려생활을 하나로 연결하는 <em>AI 케어 서비스</em></>}
        />
        <div className="mvp-cards">
          {cards.map(([quote, title, body], index) => (
            <article key={title}>
              <div className="mvp-quote">{quote}</div>
              <img className="mvp-character" alt="" src={mvpImages[index]} />
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <main>
      <Hero />
      <Overview />
      <Background />
      <SimpleResearch />
      <CompetitiveAnalysis />
      <MarketResearch />
      <SurveyResearch />
      <PainPoint />
      <Personas />
      <InformationArchitecture />
      <MvpGoal />
    </main>
  );
}

export default App;
