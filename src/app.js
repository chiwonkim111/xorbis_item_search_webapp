const MODULES = [
  ["mod-ai-image", "AI 이미지 생성", "AI/연산", 12000000, 0.45, ["AI", "생성AI", "이미지", "개인화", "바이럴"], "SDXL, Hunyuan, LoRA, Inpainting 등 이미지 생성 파이프라인."],
  ["mod-llm", "LLM 상담/프롬프트", "AI/연산", 6500000, 0.42, ["GPT", "상담", "텍스트", "국가사업", "교육"], "사용자 입력을 해석하고 결과 텍스트, 프롬프트, 상담 응답을 생성."],
  ["mod-mobile", "모바일 WebSocket 참여", "세션/서버", 18000000, 0.4, ["모바일", "다중참여", "WebSocket", "OSC", "관객참여"], "QR 접속, UUID/슬롯, 센서 데이터, OSC/UDP 중계."],
  ["mod-td", "TouchDesigner 연동", "콘텐츠 제어", 10000000, 0.38, ["TouchDesigner", "실시간", "미디어", "전시"], "서버/센서/AI 결과를 대형 스크린 콘텐츠로 연결."],
  ["mod-print", "카드/QR 출력", "출력", 7000000, 0.35, ["프린트", "QR", "기념품", "바이럴"], "카드 프린터, QR 결과 페이지, 개인 결과물 저장."],
  ["mod-robot", "로봇/서보 제어", "하드웨어 제어", 22000000, 0.35, ["로봇", "서보", "아두이노", "물리장치"], "FR3/Kuka/서보모터/아두이노 기반 물리 반응 제어."],
  ["mod-camera", "카메라/스캔 입력", "입력", 6500000, 0.35, ["카메라", "스캐너", "얼굴인식", "이미지입력"], "웹캠, 스캔 카메라, 얼굴/표정/위치 인식 입력."],
  ["mod-kiosk", "키오스크/터치 UI", "입력", 9000000, 0.38, ["키오스크", "터치", "무인운영", "결제"], "터치 모니터, Android/PyQt UI, 결제/언어 선택 흐름."],
  ["mod-led", "LED/DMX/ArtNet 조명", "출력", 11000000, 0.33, ["LED", "DMX", "ArtNet", "조명", "사진"], "이미지 컬러맵과 조명을 연동하는 공간 연출 모듈."],
  ["mod-ops", "설치/운영 자동화", "운영", 5000000, 0.3, ["운영", "설치", "자동실행", "로그", "유지보수"], "Redis, bat 자동실행, 로그, 장애 대응, 리셋 정책."],
].map(([id, name, layer, baseCost, marginRate, tags, description]) => ({ id, name, layer, baseCost, marginRate, tags, description }));

const ITEMS = [
  ["graffitix", "GraffitiX", "AI 협업 드로잉", "터치 드로잉을 생성형 AI가 배경과 스타일에 맞춰 통합하는 참여형 콘텐츠.", ["mod-ai-image", "mod-td", "mod-kiosk", "mod-ops"], ["AI", "생성AI", "드로잉", "다중참여", "전시", "바이럴"], ["전시관", "팝업", "쇼핑몰", "브랜드"], ["집객", "체험", "바이럴", "AI 홍보"], 42000000, 0.42, "중", "중"],
  ["liveai", "Live AI", "실시간 AI 영상", "카메라 스트림을 AI 이미지로 변환해 공연/대형 디스플레이에 실시간 출력.", ["mod-ai-image", "mod-td", "mod-camera", "mod-ops"], ["AI", "실시간", "공연", "대형화면", "Hunyuan"], ["공연장", "전시관", "브랜드", "축제"], ["연출", "AI 홍보", "이벤트", "바이럴"], 58000000, 0.4, "상", "중"],
  ["luckyx-kiosk", "LuckyX 키오스크", "AI 상담/카드 출력", "고민 선택과 GPT 결과를 기반으로 부적/IP 캐릭터 카드를 출력하는 키오스크.", ["mod-llm", "mod-print", "mod-kiosk", "mod-ai-image", "mod-ops"], ["GPT", "프린트", "QR", "무인운영", "IP", "키오스크"], ["팝업", "쇼핑몰", "브랜드", "테마공간"], ["판매", "체험", "기념품", "바이럴"], 35000000, 0.38, "중", "하"],
  ["luckyx-head", "LuckyX Head", "AI 무당 로봇 헤드", "카메라/대화/터치 입력과 서보 헤드를 결합한 AI 무당 상담 체험.", ["mod-llm", "mod-print", "mod-robot", "mod-camera", "mod-kiosk", "mod-ops"], ["GPT", "로봇", "서보", "프린트", "AI 상담", "무속"], ["상설관", "테마공간", "팝업"], ["체험", "기념품", "브랜드 세계관", "판매"], 52000000, 0.36, "상", "중"],
  ["mobile-collective", "Mobile Collective", "모바일 다중 참여", "관람객 모바일 센서와 대형 스크린 미디어를 WebSocket/OSC로 연결.", ["mod-mobile", "mod-td", "mod-ops"], ["모바일", "다중참여", "WebSocket", "OSC", "TouchDesigner", "지자체"], ["전시관", "축제", "공연장", "메인홀"], ["집객", "참여", "이벤트", "실감콘텐츠"], 39000000, 0.4, "중", "중"],
  ["composer", "Composer", "AI 백드롭/LED", "대화형 이미지 생성과 LED/DMX 조명을 연동한 개인화 촬영 콘텐츠.", ["mod-ai-image", "mod-llm", "mod-led", "mod-print", "mod-kiosk", "mod-ops"], ["AI", "촬영", "LED", "DMX", "개인화", "프린트"], ["전시관", "브랜드", "스튜디오", "팝업"], ["촬영", "바이럴", "개인화", "브랜드 홍보"], 65000000, 0.38, "상", "중"],
  ["beautyx", "BeautyX", "스캔 이미지 AI 변환", "채색 그림을 스캔해 실사/아이돌 스타일 이미지로 재생성하고 QR로 제공.", ["mod-ai-image", "mod-camera", "mod-print", "mod-ops"], ["AI", "스캐너", "QR", "이미지", "교육", "IP"], ["전시관", "교육기관", "키즈", "브랜드"], ["체험", "교육", "바이럴", "개인 결과물"], 47000000, 0.39, "중", "중"],
  ["sketcherx-auto", "SketcherX 무인화", "로봇 초상화", "태블릿 키오스크, 얼굴 촬영, 로봇 드로잉, 프린트를 결합한 무인 체험.", ["mod-robot", "mod-camera", "mod-kiosk", "mod-print", "mod-ops"], ["로봇", "초상화", "프린트", "무인운영", "AI"], ["상설관", "박물관", "쇼핑몰", "테마공간"], ["프리미엄 체험", "기념품", "유료화", "AI 홍보"], 82000000, 0.34, "상", "중"],
  ["glitter", "Glitter", "촬영/슬로모션", "타이머, 사운드, 카메라를 이용해 움직임을 자동 촬영하는 부스형 콘텐츠.", ["mod-camera", "mod-kiosk", "mod-print", "mod-ops"], ["촬영", "슬로모션", "QR", "부스", "바이럴"], ["팝업", "쇼핑몰", "브랜드", "전시관"], ["바이럴", "촬영", "이벤트", "집객"], 26000000, 0.37, "하", "하"],
].map(([id, name, category, summary, modules, tags, spaces, goals, baseCost, marginRate, complexity, operation]) => ({
  id, name, category, summary, modules, tags, spaces, goals, baseCost, marginRate, complexity, operation,
}));

const state = {
  activeTab: "recommend",
  selectedIds: [],
  modalOpen: false,
  createMode: "auto",
  conceptVariant: 0,
  draftItem: {
    purpose: "지역 관광객이 참여하고 공유할 수 있는 생성AI 체험 콘텐츠",
    preferredSpace: "전시관",
    preferredOutput: "대형 스크린, QR 결과물",
    budgetHint: 80000000,
    modulePurpose: "반려동물 사진을 활용한 프리미엄 굿즈형 AI 체험",
    selectedModules: ["mod-ai-image", "mod-camera", "mod-print", "mod-kiosk", "mod-ops"],
    manualName: "",
    manualConcept: "",
    manualSummary: "",
    manualModules: ["mod-ai-image", "mod-td", "mod-ops"],
    manualCost: 50000000,
    manualMargin: 0.38,
    manualSpaces: "전시관, 팝업",
    manualGoals: "AI 홍보, 체험",
    manualOutputs: "대형 스크린, QR 결과물",
  },
  modules: MODULES,
  items: ITEMS,
  brief: {
    programName: "2025년 인공지능 콘텐츠 제작지원 사업",
    projectTitle: "생성형 AI 기반 사용자 참여형 실감콘텐츠 개발",
    clientType: "지자체",
    applicant: "㈜엑스오비스",
    projectOwner: "수행책임자 미정",
    budget: 120000000,
    subsidyAmount: 70000000,
    selfAmount: 50000000,
    space: "전시관",
    goal: "AI 홍보",
    businessAreas: "관람객 참여형 AI 인터랙티브 아트, 모바일 연동 컬렉티브 아트, AI 창의 교육",
    duration: "상설",
    projectPeriod: "2026.01 ~ 2026.12",
    visitors: 800,
    operation: "1명 이하",
    emphasis: "생성AI, 실감콘텐츠, 지역관광",
    outputs: "QR 결과물, 대형 스크린, 프린트",
    coreTech: "Vision-Language Model, ControlNet, SDXL/Hunyuan, AI 추론 분산 처리, WebSocket/OSC",
    coreFeatures: "실시간 AI 변환, 사용자 의도/문맥 파악, 다중 사용자 협업, 대형 스크린 연동",
    targetUsers: "전시관 관람객, 지역 관광객, 가족 단위 방문객, 교육기관 학생",
    differentiation: "기존 이미지 업로드형 생성AI와 달리 현장에서 직접 그리거나 참여한 입력을 실시간으로 변환하고 대형 미디어에 즉시 반영한다.",
    commercialization: "전시관/박물관 설치 납품, 대형 전광판 라이선싱, 교육기관 프로그램 판매, 브랜드 팝업 커스텀 콘텐츠로 사업화한다.",
    expectedEffects: "관람객 참여 확대, 지역 관광 활성화, AI 창작 경험 대중화, 신규 매출 및 라이선스 모델 확보",
    organizationPlan: "기획, 개발, 공간/설치, 영상/UI, 경영지원으로 역할을 분리하고 예산/일정/산출물을 통합 관리한다.",
    trackRecord: "Museum X 구축 및 운영, IP연계 실감콘텐츠 제작지원, 공공/전시 콘텐츠 개발 경험",
    schedulePlan: "기획/요구사항 정리 → 프로토타입 → AI/콘텐츠 개발 → 현장 설치/실증 → 안정화/결과보고",
    budgetPlan: "인건비, 외주용역비, HW/SW 자산, 임차료, 홍보/마케팅, 운영비로 구분하여 집행",
    rfpText: "지역 관광 활성화를 위한 생성AI 기반 참여형 실감콘텐츠를 구축하고, 관람객의 모바일 참여와 개인 결과물 저장을 지원한다.",
    targetMarginRate: 0.38,
  },
};

const won = (value) => new Intl.NumberFormat("ko-KR", {
  style: "currency",
  currency: "KRW",
  maximumFractionDigits: 0,
}).format(Math.round(value || 0));

const salePrice = (cost, marginRate) => cost / Math.max(0.01, 1 - marginRate);
const byId = (list, id) => list.find((item) => item.id === id);

function tokens(brief) {
  return Object.values(brief).join(" ").toLowerCase();
}

function scoreItem(item) {
  const haystack = tokens(state.brief);
  const moduleTags = item.modules.flatMap((id) => byId(state.modules, id)?.tags || []);
  let score = 0;
  for (const token of [...item.tags, ...item.spaces, ...item.goals]) {
    if (haystack.includes(String(token).toLowerCase())) score += 9;
  }
  for (const token of moduleTags) {
    if (haystack.includes(String(token).toLowerCase())) score += 4;
  }
  if (item.spaces.includes(state.brief.space)) score += 18;
  if (item.goals.includes(state.brief.goal)) score += 18;
  if (state.brief.clientType === "지자체" && item.tags.includes("지자체")) score += 10;
  if (state.brief.operation.includes("무인") && item.tags.includes("무인운영")) score += 12;
  if (state.brief.outputs.includes("프린트") && item.modules.includes("mod-print")) score += 10;
  if (state.brief.outputs.includes("대형") && item.modules.includes("mod-td")) score += 10;
  if (state.brief.outputs.includes("QR") && item.modules.includes("mod-print")) score += 8;

  const recommendedPrice = salePrice(item.baseCost, state.brief.targetMarginRate);
  if (recommendedPrice <= state.brief.budget) score += 18;
  if (recommendedPrice > state.brief.budget) score -= Math.min(30, ((recommendedPrice - state.brief.budget) / state.brief.budget) * 40);
  if (item.complexity === "상" && state.brief.duration === "단기 팝업") score -= 8;
  return Math.max(0, Math.round(score));
}

function recommendations() {
  return state.items
    .map((item) => ({ ...item, score: scoreItem(item) }))
    .sort((a, b) => b.score - a.score);
}

function autoPackageItems() {
  const budget = Number(state.brief.budget) || 0;
  const picked = [];
  let cost = 0;

  for (const item of recommendations()) {
    const nextCost = cost + item.baseCost;
    const nextSale = salePrice(nextCost, state.brief.targetMarginRate);
    if (nextSale <= budget || picked.length < 1) {
      picked.push(item);
      cost = nextCost;
    }
  }

  return picked;
}

function selectedItems() {
  return state.selectedIds.length
    ? recommendations().filter((item) => state.selectedIds.includes(item.id))
    : autoPackageItems();
}

function setBrief(key, value, shouldRender = true) {
  state.brief[key] = key === "budget" || key === "visitors" || key === "targetMarginRate" ? Number(value) : value;
  if (shouldRender) render();
}

function toggleItem(id) {
  state.selectedIds = state.selectedIds.includes(id)
    ? state.selectedIds.filter((value) => value !== id)
    : [...state.selectedIds, id];
  render();
}

function addSampleItem() {
  state.modalOpen = true;
  render();
}

function makeConceptLine({ purpose, space, output, modules, variant = 0 }) {
  const names = modules.map((mod) => mod.name).join(", ");
  const has = (id) => modules.some((mod) => mod?.id === id);
  if (purpose.includes("반려") || purpose.includes("펫") || purpose.includes("동물")) {
    return [
      "반려견/반려묘를 현장에서 촬영하거나 사진을 업로드하면 AI가 털색, 표정, 체형 같은 특징을 포착해 동물 전사, 귀족 고양이, 사이버펑크 메카닉 펫 같은 스타일 이미지로 변환하고, 현장에서 카드와 NFC 매칭형 펫 키링까지 즉석 발급하는 체험",
      "보호자가 반려동물 사진을 넣으면 AI가 아이의 성격과 외형을 읽어 왕실 초상화, 판타지 수호수, 우주 탐험대원 같은 콘셉트 포스터로 만들어주고, QR 갤러리와 굿즈 출력으로 가져가게 하는 펫 팬덤형 콘텐츠",
      "반려동물과 함께 포토존에 들어가 촬영하면 AI가 사람과 동물을 하나의 세계관 속 캐릭터 듀오로 재해석하고, 결과 이미지를 포토카드/키링/모바일 배경화면으로 제공하는 현장형 AI 굿즈 스튜디오",
    ][variant % 3];
  }
  if (has("mod-mobile") && has("mod-td")) {
    return [
      `${space} 방문객이 QR로 접속해 휴대폰을 흔들거나 선택을 보내면 대형 스크린 위 캐릭터와 그래픽이 실시간으로 반응하고, AI가 모든 참여 데이터를 하나의 공동 창작 이미지로 완성해 ${output}으로 제공하는 다중 참여형 콘텐츠`,
      `수십 명의 관람객이 각자의 모바일로 색, 움직임, 메시지를 보내면 현장 미디어월이 살아 있는 캔버스처럼 변하고, AI가 지역/브랜드 테마에 맞는 거대한 컬렉티브 아트를 생성하는 실시간 참여 쇼`,
      `관람객의 모바일 센서와 선택값이 무대 화면의 입자, 조명, 캐릭터를 움직이고, 마지막에는 모두의 흔적이 합쳐진 AI 아트워크를 QR로 저장하는 대형 공간용 인터랙션 시스템`,
    ][variant % 3];
  }
  if (has("mod-robot")) {
    return [
      "관람객이 키오스크에서 촬영과 선택을 마치면 AI가 얼굴 특징과 취향을 반영한 초상 이미지를 만들고, 로봇이 그 결과를 현장에서 직접 그려주는 프리미엄 퍼포먼스형 체험",
      "AI가 관람객의 대화와 얼굴 데이터를 해석해 개인별 캐릭터를 생성하고, 움직이는 로봇/헤드 장치가 말을 걸거나 드로잉을 수행해 결과물을 출력하는 캐릭터형 체험 시스템",
      "입장부터 촬영, AI 생성, 로봇 드로잉, 프린트 수령까지 무인으로 이어지는 로봇 아티스트 스튜디오형 콘텐츠",
    ][variant % 3];
  }
  if (has("mod-print")) {
    return [
      "사용자가 사진, 그림, 고민, 선택값 중 하나를 입력하면 AI가 개인화 이미지를 생성하고, 현장에서 카드 프린트와 QR 저장 결과물을 동시에 제공하는 기념품형 AI 체험",
      "관람객의 입력을 짧은 대기 시간 안에 하나뿐인 이미지 카드로 바꿔주고, 모바일 갤러리에서 재다운로드할 수 있게 해 현장 경험이 온라인 공유로 이어지는 출력형 콘텐츠",
      "브랜드/지역 테마에 맞춘 AI 결과물을 즉석 카드, 포스터, 키링 같은 실물 굿즈로 변환해 방문객이 가져가게 하는 체험형 굿즈 제작 시스템",
    ][variant % 3];
  }
  return [
    `${purpose} 목적에 맞춰 ${names} 모듈을 조합하고, ${space} 환경에서 관람객의 입력이 즉시 콘텐츠 변화와 ${output}으로 이어지는 신규 참여형 콘텐츠`,
    `${space} 방문객이 간단한 입력만으로 AI/미디어 시스템과 상호작용하고, 그 결과가 현장 연출과 개인 결과물로 남는 맞춤형 체험 패키지`,
    `기존 보유 모듈인 ${names}을 재조합해 짧은 체험 시간 안에 참여, 생성, 공유가 모두 일어나는 ${space}용 신규 콘텐츠`,
  ][variant % 3];
}

function inferItemFromDraft(forcedModules = null, purposeOverride = null) {
  const draft = state.draftItem;
  const purpose = purposeOverride || draft.purpose;
  const text = `${purpose} ${draft.preferredSpace} ${draft.preferredOutput}`.toLowerCase();
  let selectedModules = forcedModules;
  if (!selectedModules) {
    const moduleScores = state.modules.map((mod) => {
      let score = 0;
      for (const tag of mod.tags) {
        if (text.includes(String(tag).toLowerCase())) score += 7;
      }
      if (text.includes("모바일") && mod.id === "mod-mobile") score += 18;
      if (text.includes("대형") && mod.id === "mod-td") score += 16;
      if (text.includes("스크린") && mod.id === "mod-td") score += 12;
      if (text.includes("qr") && mod.id === "mod-print") score += 15;
      if (text.includes("프린트") && mod.id === "mod-print") score += 15;
      if (text.includes("굿즈") && mod.id === "mod-print") score += 14;
      if (text.includes("nfc") && mod.id === "mod-print") score += 10;
      if (text.includes("로봇") && mod.id === "mod-robot") score += 20;
      if (text.includes("카메라") && mod.id === "mod-camera") score += 14;
      if (text.includes("촬영") && mod.id === "mod-camera") score += 14;
      if (text.includes("업로드") && mod.id === "mod-camera") score += 10;
      if (text.includes("스캔") && mod.id === "mod-camera") score += 14;
      if (text.includes("키오스크") && mod.id === "mod-kiosk") score += 14;
      if (text.includes("상담") && mod.id === "mod-llm") score += 14;
      if (text.includes("생성") && mod.id === "mod-ai-image") score += 16;
      if (text.includes("ai") && mod.id === "mod-ai-image") score += 10;
      if (text.includes("반려") && ["mod-ai-image", "mod-camera", "mod-print"].includes(mod.id)) score += 14;
      if (mod.id === "mod-ops") score += 5;
      return { mod, score };
    }).sort((a, b) => b.score - a.score);
    const topModules = moduleScores.filter(({ score }) => score >= 8).map(({ mod }) => mod);
    const variantPools = [
      topModules.slice(0, 5),
      [
        byId(state.modules, "mod-ai-image"),
        byId(state.modules, "mod-mobile"),
        byId(state.modules, "mod-td"),
        draft.preferredOutput.toLowerCase().includes("qr") || draft.preferredOutput.includes("프린트") ? byId(state.modules, "mod-print") : null,
        byId(state.modules, "mod-ops"),
      ].filter(Boolean),
      [
        byId(state.modules, "mod-ai-image"),
        byId(state.modules, "mod-camera"),
        byId(state.modules, "mod-print"),
        byId(state.modules, "mod-kiosk"),
        text.includes("로봇") ? byId(state.modules, "mod-robot") : null,
        byId(state.modules, "mod-ops"),
      ].filter(Boolean),
    ];
    selectedModules = variantPools[state.conceptVariant % variantPools.length];
    if (!selectedModules.length) selectedModules = topModules.slice(0, 5);
  }
  if (!selectedModules.some((entry) => entry.id === "mod-ops")) selectedModules.push(byId(state.modules, "mod-ops"));
  if (!selectedModules.length) selectedModules.push(byId(state.modules, "mod-ai-image"), byId(state.modules, "mod-ops"));

  const has = (id) => selectedModules.some((mod) => mod?.id === id);
  const space = draft.preferredSpace || state.brief.space;
  const output = draft.preferredOutput || state.brief.outputs;
  const typeParts = [];
  if (has("mod-ai-image")) typeParts.push("AI 생성");
  if (has("mod-mobile")) typeParts.push("모바일 참여");
  if (has("mod-robot")) typeParts.push("로봇");
  if (has("mod-print")) typeParts.push("QR/프린트");
  if (has("mod-td")) typeParts.push("실감미디어");

  const conceptLine = makeConceptLine({ purpose, space, output, modules: selectedModules.filter(Boolean), variant: state.conceptVariant });
  const generatedName = purpose.includes("반려") || purpose.includes("펫")
    ? "AI 펫 아바타 굿즈 스튜디오"
    : `${typeParts.slice(0, 2).join(" ")} 콘텐츠 패키지`.trim() || "신규 참여형 콘텐츠 패키지";
  const generatedSummary = conceptLine;
  const baseCost = Math.max(
    12000000,
    Math.round(selectedModules.reduce((sum, mod) => sum + (mod?.baseCost || 0), 0) * 0.82),
  );

  return {
    id: `new-${Date.now()}`,
    name: generatedName,
    category: typeParts.join(" / ") || "신규 기획",
    summary: generatedSummary,
    concept: conceptLine,
    modules: selectedModules.filter(Boolean).map((mod) => mod.id),
    tags: [...new Set(["신규", "제안후보", ...typeParts, ...purpose.split(/[,\s]+/).filter(Boolean).slice(0, 6)])],
    spaces: [...new Set([space, "전시관", "팝업"].filter(Boolean))],
    goals: [...new Set([state.brief.goal, "체험", "AI 홍보"].filter(Boolean))],
    baseCost,
    marginRate: Number(state.brief.targetMarginRate) || 0.38,
    complexity: baseCost > 70000000 ? "상" : baseCost > 35000000 ? "중" : "하",
    operation: has("mod-robot") || has("mod-mobile") ? "중" : "하",
    outputs: output,
  };
}

function createItemFromModal() {
  const id = `new-${Date.now()}`;
  const draft = state.draftItem;
  const selectedModuleObjects = state.draftItem.selectedModules.map((id) => byId(state.modules, id)).filter(Boolean);
  const next = state.createMode === "auto"
    ? inferItemFromDraft()
    : state.createMode === "module"
      ? inferItemFromDraft(selectedModuleObjects, state.draftItem.modulePurpose)
    : {
      id,
      name: draft.manualName || "수기 입력 신규 아이템",
      category: "수기 등록",
      summary: draft.manualConcept || draft.manualSummary || "수기로 등록한 신규 제안 아이템입니다.",
      concept: draft.manualConcept || draft.manualSummary || "수기로 등록한 신규 제안 아이템입니다.",
      modules: draft.manualModules,
      tags: ["신규", "수기등록", ...draft.manualGoals.split(",").map((value) => value.trim()).filter(Boolean)],
      spaces: draft.manualSpaces.split(",").map((value) => value.trim()).filter(Boolean),
      goals: draft.manualGoals.split(",").map((value) => value.trim()).filter(Boolean),
      baseCost: Number(draft.manualCost) || 0,
      marginRate: Number(draft.manualMargin) || 0.38,
      complexity: Number(draft.manualCost) > 70000000 ? "상" : "중",
      operation: "중",
      outputs: draft.manualOutputs,
    };
  state.items.unshift(next);
  state.selectedIds = [next.id];
  state.modalOpen = false;
  state.activeTab = "recommend";
  render();
}

function updateDraft(key, value, shouldRender = false) {
  state.draftItem[key] = key.includes("Cost") || key.includes("budget") || key.includes("Margin") ? Number(value) : value;
  if (shouldRender) render();
}

function toggleManualModule(id) {
  const current = state.draftItem.manualModules;
  state.draftItem.manualModules = current.includes(id)
    ? current.filter((value) => value !== id)
    : [...current, id];
  render();
}

function toggleSelectedModule(id) {
  const current = state.draftItem.selectedModules;
  state.draftItem.selectedModules = current.includes(id)
    ? current.filter((value) => value !== id)
    : [...current, id];
  render();
}

function cycleConcept() {
  state.conceptVariant = (state.conceptVariant + 1) % 3;
  render();
}

function addLegacySampleItem() {
  const id = `new-${Date.now()}`;
  state.items.unshift({
    id,
    name: "신규 조합 아이템",
    category: "기획 후보",
    summary: "선택한 모듈을 조합해 만든 신규 제안 후보입니다.",
    modules: ["mod-ai-image", "mod-mobile", "mod-td"],
    tags: ["AI", "모바일", "실감콘텐츠", "신규"],
    spaces: ["전시관", "축제"],
    goals: ["집객", "참여", "AI 홍보"],
    baseCost: 50000000,
    marginRate: 0.4,
    complexity: "중",
    operation: "중",
  });
  state.selectedIds = [id];
  render();
}

function icon(name) {
  const icons = {
    spark: "✦",
    sliders: "≡",
    wand: "✧",
    item: "▣",
    module: "▤",
    doc: "▥",
    plus: "+",
  };
  return `<span class="textIcon">${icons[name] || "•"}</span>`;
}

function appShell(content) {
  return `
    <main class="app">
      <aside class="sidebar">
        <div class="brand">
          <div class="brandMark">${icon("spark")}</div>
          <div><strong>Xorbis Proposal Engine</strong><span>모듈 기반 제안 자동화 MVP</span></div>
        </div>
        <nav class="nav">
          ${navButton("recommend", "추천", "wand")}
          ${navButton("items", "아이템 DB", "item")}
          ${navButton("modules", "모듈 DB", "module")}
          ${navButton("proposal", "제안서 초안", "doc")}
        </nav>
        ${briefForm()}
      </aside>
      <section class="content">
        <header class="topbar">
          <div>
            <p class="eyebrow">Proposal workflow</p>
            <h1>아이템/모듈 DB에서 제안 패키지와 견적 초안을 생성합니다.</h1>
          </div>
          <button class="primary" data-action="add-sample">${icon("plus")} 신규 조합 추가</button>
        </header>
        ${workflow()}
        ${content}
      </section>
    </main>
    ${state.modalOpen ? createItemModal() : ""}`;
}

function navButton(tab, label, iconName) {
  return `<button class="${state.activeTab === tab ? "active" : ""}" data-tab="${tab}">${icon(iconName)} ${label}</button>`;
}

function field(label, key, type = "input", options = []) {
  const value = state.brief[key];
  if (type === "select") {
    return `<label>${label}<select data-brief="${key}">${options.map((option) => `<option ${option === value ? "selected" : ""}>${option}</option>`).join("")}</select></label>`;
  }
  if (type === "textarea") {
    return `<label>${label}<textarea data-brief="${key}">${value}</textarea></label>`;
  }
  return `<label>${label}<input data-brief="${key}" value="${value}" type="${type}" ${type === "number" ? 'step="0.01"' : ""}></label>`;
}

function draftField(label, key, type = "input", options = []) {
  const value = state.draftItem[key];
  if (type === "select") {
    return `<label>${label}<select data-draft="${key}">${options.map((option) => `<option ${option === value ? "selected" : ""}>${option}</option>`).join("")}</select></label>`;
  }
  if (type === "textarea") {
    return `<label>${label}<textarea data-draft="${key}">${value}</textarea></label>`;
  }
  return `<label>${label}<input data-draft="${key}" value="${value}" type="${type}" ${type === "number" ? 'step="0.01"' : ""}></label>`;
}

function createItemModal() {
  const inferred = inferItemFromDraft();
  const inferredModules = inferred.modules.map((id) => byId(state.modules, id)).filter(Boolean);
  const selectedModuleObjects = state.draftItem.selectedModules.map((id) => byId(state.modules, id)).filter(Boolean);
  const moduleInferred = inferItemFromDraft(selectedModuleObjects, state.draftItem.modulePurpose);
  const moduleInferredModules = moduleInferred.modules.map((id) => byId(state.modules, id)).filter(Boolean);
  return `
    <div class="modalBackdrop" role="presentation">
      <section class="modal" role="dialog" aria-modal="true" aria-label="신규 아이템 생성">
        <header class="modalHeader">
          <div>
            <p class="eyebrow">New item builder</p>
            <h2>신규 조합 아이템 추가</h2>
          </div>
          <button class="iconButton" data-action="close-modal">×</button>
        </header>

        <div class="modeSwitch">
          <button class="${state.createMode === "auto" ? "active" : ""}" data-create-mode="auto">목적 기반 자동 추천</button>
          <button class="${state.createMode === "module" ? "active" : ""}" data-create-mode="module">모듈 선택 후 추천</button>
          <button class="${state.createMode === "manual" ? "active" : ""}" data-create-mode="manual">수기 입력</button>
        </div>

        ${state.createMode === "auto" ? `
          <div class="modalBody twoCol">
            <div class="modalPane">
              <h3>목적만 입력해 자동 추천</h3>
              ${draftField("목적/상황", "purpose", "textarea")}
              ${draftField("적합 공간", "preferredSpace", "select", ["전시관", "팝업", "쇼핑몰", "공연장", "축제", "상설관", "브랜드", "교육기관"])}
              ${draftField("필요 산출물", "preferredOutput")}
              ${draftField("예산 힌트", "budgetHint", "number")}
              <p class="hint">목적/상황의 키워드로 보유 모듈을 자동 선택하고, 실제 서비스 예시가 담긴 한 줄 컨셉까지 생성합니다.</p>
            </div>
            <div class="modalPane previewPane">
              <h3>자동 생성 미리보기</h3>
              <dl class="previewList">
                <dt>아이템명</dt><dd>${inferred.name}</dd>
                <dt>서비스 컨셉</dt><dd><div class="conceptText">${inferred.concept}</div><button class="miniButton" data-action="cycle-concept">변경</button></dd>
                <dt>예상 원가</dt><dd>${won(inferred.baseCost)}</dd>
                <dt>목표 마진</dt><dd>${Math.round(inferred.marginRate * 100)}%</dd>
                <dt>적합 공간</dt><dd>${inferred.spaces.join(", ")}</dd>
                <dt>적합 사업 유형</dt><dd>${inferred.goals.join(", ")}</dd>
                <dt>산출물</dt><dd>${inferred.outputs}</dd>
              </dl>
              <div class="chips">${inferredModules.map((mod) => `<span>${mod.name}</span>`).join("")}</div>
            </div>
          </div>
        ` : state.createMode === "module" ? `
          <div class="modalBody twoCol">
            <div class="modalPane">
              <h3>모듈을 먼저 선택</h3>
              ${draftField("목적/상황", "modulePurpose", "textarea")}
              <div class="modulePickGrid compact">
                ${state.modules.map((mod) => `
                  <button class="${state.draftItem.selectedModules.includes(mod.id) ? "active" : ""}" data-selected-module="${mod.id}">
                    <strong>${mod.name}</strong>
                    <span>${mod.layer}</span>
                  </button>
                `).join("")}
              </div>
              <p class="hint">선택한 모듈 조합을 고정한 뒤, 목적에 맞는 아이템명과 서비스 컨셉을 생성합니다.</p>
            </div>
            <div class="modalPane previewPane">
              <h3>모듈 조합 기반 추천</h3>
              <dl class="previewList">
                <dt>아이템명</dt><dd>${moduleInferred.name}</dd>
                <dt>서비스 컨셉</dt><dd><div class="conceptText">${moduleInferred.concept}</div><button class="miniButton" data-action="cycle-concept">변경</button></dd>
                <dt>예상 원가</dt><dd>${won(moduleInferred.baseCost)}</dd>
                <dt>목표 마진</dt><dd>${Math.round(moduleInferred.marginRate * 100)}%</dd>
                <dt>적합 공간</dt><dd>${moduleInferred.spaces.join(", ")}</dd>
                <dt>적합 사업 유형</dt><dd>${moduleInferred.goals.join(", ")}</dd>
                <dt>산출물</dt><dd>${moduleInferred.outputs}</dd>
              </dl>
              <div class="chips">${moduleInferredModules.map((mod) => `<span>${mod.name}</span>`).join("")}</div>
            </div>
          </div>
        ` : `
          <div class="modalBody">
            <div class="manualGrid">
              ${draftField("아이템명", "manualName")}
              ${draftField("예상 원가", "manualCost", "number")}
              ${draftField("목표 마진", "manualMargin", "number")}
              ${draftField("적합 공간", "manualSpaces")}
              ${draftField("적합 사업 유형", "manualGoals")}
              ${draftField("산출물", "manualOutputs")}
              ${draftField("서비스 한 줄 컨셉", "manualConcept", "textarea")}
              ${draftField("한 줄 설명", "manualSummary", "textarea")}
            </div>
            <h3>적용 모듈 선택</h3>
            <div class="modulePickGrid">
              ${state.modules.map((mod) => `
                <button class="${state.draftItem.manualModules.includes(mod.id) ? "active" : ""}" data-manual-module="${mod.id}">
                  <strong>${mod.name}</strong>
                  <span>${mod.layer}</span>
                </button>
              `).join("")}
            </div>
          </div>
        `}

        <footer class="modalFooter">
          <button class="ghost" data-action="close-modal">취소</button>
          <button class="primary" data-action="create-item">아이템 DB에 추가</button>
        </footer>
      </section>
    </div>`;
}

function formSection(title, fields) {
  return `
    <div class="formSection">
      <h3>${title}</h3>
      <div class="formGrid">${fields.join("")}</div>
    </div>`;
}

function briefForm() {
  return `
    <section class="briefCard">
      <h2>${icon("sliders")} 빠른 추천 입력</h2>
      ${formSection("필수 조건", [
        field("제안 대상", "clientType", "select", ["지자체", "국가기관", "박물관", "브랜드", "쇼핑몰", "교육기관"]),
        field("총 예산", "budget", "number"),
        field("공간", "space", "select", ["전시관", "팝업", "쇼핑몰", "공연장", "축제", "상설관", "브랜드"]),
        field("목적", "goal", "select", ["AI 홍보", "집객", "체험", "바이럴", "교육", "판매", "연출"]),
        field("필요 산출물", "outputs"),
        field("목표 이익률", "targetMarginRate", "number"),
        field("강조 키워드", "emphasis"),
        field("RFP/상황 요약", "rfpText", "textarea"),
      ])}
      <p class="formNote">사업명, 수행기관, 일정, 사업화 방안 등 문서용 세부 항목은 제안서 초안 탭에서 자동 문단으로 정리됩니다.</p>
    </section>`;
}

function workflow() {
  return `<div class="workflow">${["아이템/모듈 DB", "고객/RFP 입력", "추천 로직", "제안 패키지", "문서/견적 초안"]
    .map((step, index) => `<div class="workflowStep"><span>${index + 1}</span><strong>${step}</strong></div>`)
    .join("")}</div>`;
}

function recommendationView() {
  const selected = selectedItems();
  const cost = selected.reduce((sum, item) => sum + item.baseCost, 0);
  const sale = salePrice(cost, state.brief.targetMarginRate);
  const profit = sale - cost;
  return `
    <div class="metrics">
      ${metric("추천 후보", `${recommendations().length}개`)}
      ${metric("패키지 원가", won(cost))}
      ${metric("제안 판매가", won(sale))}
      ${metric("예상 이익", won(profit))}
    </div>
    <section class="panel">
      <div class="panelHeader">
        <h2>추천 아이템</h2>
        <button class="ghost" data-action="reset-selection">예산 기준 자동 패키지</button>
      </div>
      <div class="cardGrid">${recommendations().map(itemCard).join("")}</div>
    </section>`;
}

function metric(label, value) {
  return `<article class="metric"><div>${icon("spark")}</div><span>${label}</span><strong>${value}</strong></article>`;
}

function itemCard(item) {
  const autoSelected = !state.selectedIds.length && autoPackageItems().some((top) => top.id === item.id);
  const selected = state.selectedIds.includes(item.id) || autoSelected;
  const mods = item.modules.map((id) => byId(state.modules, id)).filter(Boolean);
  return `
    <article class="itemCard ${selected ? "selected" : ""}">
      <div class="itemHead">
        <div><span>${item.category}</span><h3>${item.name}</h3></div>
        <button data-toggle="${item.id}">${selected ? "선택됨" : "선택"}</button>
      </div>
      <p>${item.summary}</p>
      <div class="score"><strong>${item.score}</strong><span>match score</span></div>
      <div class="chips">${mods.map((mod) => `<span>${mod.name}</span>`).join("")}</div>
      <dl class="priceList">
        <dt>원가</dt><dd>${won(item.baseCost)}</dd>
        <dt>목표 판매가</dt><dd>${won(salePrice(item.baseCost, state.brief.targetMarginRate))}</dd>
        <dt>난이도</dt><dd>${item.complexity}</dd>
      </dl>
    </article>`;
}

function itemsView() {
  return `
    <section class="panel">
      <div class="panelHeader"><h2>아이템 DB</h2><p>원가와 마진율은 내부 기준값이며, 제안 상황마다 목표 이익률로 재계산합니다.</p></div>
      ${table(["아이템", "유형", "원가", "기준 마진", "기준 판매가", "모듈"], state.items.map((item) => [
        item.name,
        item.category,
        won(item.baseCost),
        `${Math.round(item.marginRate * 100)}%`,
        won(salePrice(item.baseCost, item.marginRate)),
        item.modules.map((id) => byId(state.modules, id)?.name).join(", "),
      ]))}
    </section>`;
}

function modulesView() {
  return `
    <section class="panel">
      <div class="panelHeader"><h2>모듈 DB</h2><p>신규 아이템은 이 모듈들을 조합해서 정의합니다.</p></div>
      <div class="moduleList">${state.modules.map((mod) => `
        <article class="moduleCard">
          <div><span>${mod.layer}</span><h3>${mod.name}</h3><p>${mod.description}</p></div>
          <dl><dt>원가</dt><dd>${won(mod.baseCost)}</dd><dt>마진</dt><dd>${Math.round(mod.marginRate * 100)}%</dd></dl>
        </article>`).join("")}</div>
    </section>`;
}

function proposalView() {
  const selected = selectedItems();
  const cost = selected.reduce((sum, item) => sum + item.baseCost, 0);
  const sale = salePrice(cost, state.brief.targetMarginRate);
  const profit = sale - cost;
  return `
    <section class="proposal">
      <div class="proposalPaper">
        <p class="eyebrow">자동 생성 초안</p>
        <h2>${state.brief.clientType} 대상 AI 참여형 콘텐츠 제안</h2>
        <div class="proposalInfoGrid">
          <span>사업/공고명 <strong>${state.brief.programName}</strong></span>
          <span>과제명 <strong>${state.brief.projectTitle}</strong></span>
          <span>수행기관 <strong>${state.brief.applicant}</strong></span>
          <span>수행기간 <strong>${state.brief.projectPeriod}</strong></span>
        </div>
        <p>본 제안은 ${state.brief.space} 환경에서 ${state.brief.goal} 목적을 달성하기 위해, Xorbis가 보유한 기존 검증 아이템과 재사용 가능한 모듈을 조합한 패키지입니다. RFP 핵심 키워드는 <strong>${state.brief.emphasis}</strong>이며, 요구 산출물은 <strong>${state.brief.outputs}</strong>입니다.</p>
        <h3>과제 개요</h3>
        <p>${state.brief.rfpText}</p>
        <h3>적용 사업군 및 목표 시장</h3>
        <p>${state.brief.businessAreas}</p>
        <p>${state.brief.targetUsers}</p>
        <h3>핵심 기술 및 차별성</h3>
        <div class="proposalTwoCol">
          <p><strong>핵심 적용기술</strong><br>${state.brief.coreTech}</p>
          <p><strong>핵심 특징</strong><br>${state.brief.coreFeatures}</p>
        </div>
        <p>${state.brief.differentiation}</p>
        <h3>추천 패키지</h3>
        <ul>${selected.map((item) => `<li><strong>${item.name}</strong>: ${item.summary}</li>`).join("")}</ul>
        <h3>아이템별 적용 모듈</h3>
        <div class="proposalModuleMap">
          ${selected.map((item) => {
            const mods = item.modules.map((id) => byId(state.modules, id)).filter(Boolean);
            return `
              <article>
                <div class="proposalItemHead">
                  <span>${item.category}</span>
                  <h4>${item.name}</h4>
                  <p>${item.summary}</p>
                </div>
                <div class="proposalModuleRows">
                  ${mods.map((mod) => `
                    <div class="proposalModuleRow">
                      <strong>${mod.name}</strong>
                      <span>${mod.layer}</span>
                      <p>${mod.description}</p>
                    </div>
                  `).join("")}
                </div>
              </article>
            `;
          }).join("")}
        </div>
        <h3>예산 초안</h3>
        <div class="estimate">
          <span>예상 원가: <strong>${won(cost)}</strong></span>
          <span>제안 판매가: <strong>${won(sale)}</strong></span>
          <span>예상 이익: <strong>${won(profit)}</strong></span>
          <span>목표 이익률: <strong>${Math.round(state.brief.targetMarginRate * 100)}%</strong></span>
          <span>지원금/국고: <strong>${won(state.brief.subsidyAmount)}</strong></span>
          <span>자부담/부담금: <strong>${won(state.brief.selfAmount)}</strong></span>
        </div>
        <h3>추진 일정 및 관리체계</h3>
        <p><strong>추진 일정</strong><br>${state.brief.schedulePlan}</p>
        <p><strong>수행 관리체계</strong><br>${state.brief.organizationPlan}</p>
        <p><strong>사업비 구성</strong><br>${state.brief.budgetPlan}</p>
        <h3>사업화 및 기대성과</h3>
        <p><strong>사업화 방안</strong><br>${state.brief.commercialization}</p>
        <p><strong>기대효과</strong><br>${state.brief.expectedEffects}</p>
        <p><strong>수행실적/레퍼런스</strong><br>${state.brief.trackRecord}</p>
      </div>
    </section>`;
}

function table(columns, rows) {
  return `
    <div class="tableWrap">
      <table>
        <thead><tr>${columns.map((col) => `<th>${col}</th>`).join("")}</tr></thead>
        <tbody>${rows.map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`).join("")}</tbody>
      </table>
    </div>`;
}

function attachEvents() {
  document.querySelectorAll("[data-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeTab = button.dataset.tab;
      render();
    });
  });
  document.querySelectorAll("[data-brief]").forEach((input) => {
    input.addEventListener("input", () => setBrief(input.dataset.brief, input.value, false));
    input.addEventListener("change", () => setBrief(input.dataset.brief, input.value, true));
    input.addEventListener("blur", () => setBrief(input.dataset.brief, input.value, true));
  });
  document.querySelectorAll("[data-draft]").forEach((input) => {
    input.addEventListener("input", () => updateDraft(input.dataset.draft, input.value, false));
    input.addEventListener("change", () => updateDraft(input.dataset.draft, input.value, true));
    input.addEventListener("blur", () => updateDraft(input.dataset.draft, input.value, true));
  });
  document.querySelectorAll("[data-toggle]").forEach((button) => {
    button.addEventListener("click", () => toggleItem(button.dataset.toggle));
  });
  document.querySelectorAll("[data-create-mode]").forEach((button) => {
    button.addEventListener("click", () => {
      state.createMode = button.dataset.createMode;
      render();
    });
  });
  document.querySelectorAll("[data-manual-module]").forEach((button) => {
    button.addEventListener("click", () => toggleManualModule(button.dataset.manualModule));
  });
  document.querySelectorAll("[data-selected-module]").forEach((button) => {
    button.addEventListener("click", () => toggleSelectedModule(button.dataset.selectedModule));
  });
  document.querySelector("[data-action='reset-selection']")?.addEventListener("click", () => {
    state.selectedIds = [];
    render();
  });
  document.querySelector("[data-action='add-sample']")?.addEventListener("click", addSampleItem);
  document.querySelectorAll("[data-action='close-modal']").forEach((button) => {
    button.addEventListener("click", () => {
      state.modalOpen = false;
      render();
    });
  });
  document.querySelector("[data-action='create-item']")?.addEventListener("click", createItemFromModal);
  document.querySelector("[data-action='cycle-concept']")?.addEventListener("click", cycleConcept);
}

function render() {
  const views = {
    recommend: recommendationView,
    items: itemsView,
    modules: modulesView,
    proposal: proposalView,
  };
  document.getElementById("root").innerHTML = appShell(views[state.activeTab]());
  attachEvents();
}

render();
