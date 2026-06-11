export const profile = {
  name: "강혜수",
  role: "Java/Spring Backend Developer",
  email: "hskang406@naver.com",
  summary:
    "복잡한 업무 규칙을 안정적인 웹 시스템으로 구현하는 Java/Spring 기반 백엔드 개발자입니다. VOC, CRM, 금융소비자보호 시스템 구축과 고도화 프로젝트에서 API 연동, 배치, 통계 대시보드, 인증 연동, 운영 환경 구축을 수행했습니다.",
  metrics: [
    { label: "Career", value: "2022.02 - 2026.01" },
    { label: "Projects", value: "8+" },
    { label: "Core", value: "Java / Spring" },
  ],
  about: [
    "웹 개발자로 근무하며 금융, 호텔, 제조, 식품, CRM 영역의 엔터프라이즈 시스템을 개발했습니다. 사용자의 업무 프로세스를 이해하고 접수, 배분, 처리, 결재, 분석으로 이어지는 흐름을 안정적으로 구현하는 데 강점이 있습니다.",
    "SAML 기반 SSO 연동, 외부 API 연계, 데이터 이관, 알림 배치, 통계 화면 개발처럼 시스템의 핵심 기능과 운영 안정성에 직접 영향을 주는 업무를 담당했습니다. 장애가 발생했을 때는 로그와 환경 차이를 끝까지 추적해 원인을 찾고 재발 가능성을 줄이는 방식으로 문제를 해결합니다.",
    "비전공자로 개발을 시작했지만 꾸준한 학습과 실무 경험을 통해 기술 역량을 쌓아왔습니다. 고객의 입장에서 시스템을 바라보고, 새로운 기술과 도구를 실무 생산성으로 연결하는 개발자로 성장하고 있습니다.",
  ],
};

export const skillGroups = [
  {
    title: "Backend",
    items: ["Java", "Spring Framework", "Spring Boot", "Spring Data JPA", "JSP", "REST API"],
  },
  {
    title: "Frontend",
    items: ["JavaScript", "jQuery", "Vue.js", "ApexChart", "jqPlot", "CSS/UI"],
  },
  {
    title: "Database",
    items: ["Oracle", "Oracle 19C", "MS-SQL", "MySQL", "Tibero", "SQL"],
  },
  {
    title: "Infra & Tools",
    items: ["Linux", "Rocky Linux", "Windows Server", "Apache", "Tomcat", "Git", "SVN"],
  },
];

export const experience = {
  company: "레드소프트",
  period: "2022.02 - 2026.01",
  team: "웹개발 · 솔루션개발본부 / 대리",
  description:
    "통합 VOC, CRM, 금융소비자보호 내부통제관리 시스템의 구축과 고도화 프로젝트를 수행했습니다. 업무 화면 개발뿐 아니라 API 연동, 서버 구성, SSL 적용, 배치 개발, 통계 대시보드, SSO 인증 연동까지 프로젝트 운영에 필요한 기능을 폭넓게 담당했습니다.",
};

export const projects = [
  {
    name: "KB증권 금융소비자보호 내부통제관리시스템 고도화",
    period: "2025.09 - 2026.01",
    environment: "Linux, Apache 2.4, Tomcat 9, Java 1.8, Oracle, Spring, JavaScript, jQuery",
    contributions: [
      "내부통제점검 관리 및 점검 항목 관리 기능 개발",
      "내부통제 점검 보고서 PDF 출력 기능 개발",
      "민원/VOC 처리 단계별 담당자 및 고객 메신저, 이메일 자동 알림 개발",
      "메인 화면 CSS/UI 고도화 및 ApexChart 기반 통계 차트 디자인 개선",
    ],
  },
  {
    name: "파르나스 호텔 통합 VOC 시스템 고도화 및 Westin DCX 연동 개발",
    period: "2025.04 - 2025.08",
    environment: "Windows Server, Apache 2.4, Tomcat 9, Java 1.8, MS-SQL, Spring, JavaScript, jQuery",
    contributions: [
      "VOC 처리현황 및 고객만족도 조사 통계 대시보드 개발",
      "Westin DCX 데이터 API 연동 개발",
      "고객만족도조사 관리 및 분석 기능 고도화",
      "호텔별 칭찬 직원 관리와 조회 기능 고도화",
    ],
  },
  {
    name: "라이온코리아 통합 VOC 시스템 구축",
    period: "2024.10 - 2025.02",
    environment: "Rocky Linux 9.0, Apache 2.4, Tomcat 9, Java 1.8, Oracle 19C, Spring, JavaScript, jQuery",
    contributions: [
      "VOC 메인 프로세스 접수, 담당자 배분, 처리, 결재, 분석 기능 개발",
      "운영 WEB/WAS 서버 구축 및 SSL 적용",
      "이메일 발송 인터페이스 개발",
      "사용자/부서 정보 이관 배치 및 VOC 처리 지연 자동 알림 배치 개발",
    ],
  },
  {
    name: "삼양식품 통합 VOC 시스템 구축",
    period: "2024.03 - 2024.09",
    environment: "Rocky Linux 9.0, Apache 2.4, Tomcat 9, Java 1.8, Oracle 19C, Spring, JavaScript, jQuery",
    contributions: [
      "VOC 메인 프로세스 전반 개발",
      "SAML 기반 SSO 연동 개발",
      "이메일 발송 인터페이스 및 조기경보 저장 프로시저 개발",
      "사용자/부서 정보 이관, 업무현황 정기 알림, 처리 지연 자동 알림 배치 개발",
    ],
  },
  {
    name: "롯데웰푸드 통합 VOC 시스템 구축",
    period: "2023.07 - 2024.01",
    environment: "Windows Server, MS-SQL, Git, Spring, Java, JavaScript, jQuery",
    contributions: [
      "VOC 목록 및 상세 조회 기능 개발",
      "SFA 연동 VOC 조회 API 개발",
      "사용자/부서 정보 이관 배치 개발",
      "개인정보 3년 자동 삭제 배치 개발",
    ],
  },
  {
    name: "NH저축은행 통합 VOC 시스템 구축",
    period: "2023.01 - 2023.05",
    environment: "Rocky Linux 9.1, Tomcat 7.0, Oracle 12C, Spring, Java, JavaScript, jQuery",
    contributions: [
      "제안/개선관리 메뉴 개발",
      "금융소비자보호 사전협의 및 교육관리 메뉴 개발",
      "공통코드, 메뉴, 권한 등 시스템관리 기능 개발",
      "접속/예외/조회/시스템 로그관리 및 교육 지연자 자동 알림 배치 개발",
    ],
  },
  {
    name: "우림FMG 자사몰 & CRM 시스템 연동 개발",
    period: "2022.08 - 2022.10",
    environment: "Linux, Oracle, Spring, Java, JavaScript, jQuery",
    contributions: ["고객 Single View 화면 개발", "자사몰과 CRM 시스템 간 고객 정보 조회 흐름 연동"],
  },
  {
    name: "CJ제일제당 통합 VOC 시스템 구축",
    period: "2022.02 - 2022.07",
    environment: "Linux, Java 1.7, Tibero, Spring, JavaScript, jQuery",
    contributions: [
      "코로나 재택근무자 과제관리 메뉴 개발",
      "jqPlot 차트 라이브러리를 활용한 통계 화면 개발",
      "공지사항 메뉴 및 팝업 화면 개발",
      "로그 조회 화면 개발",
    ],
  },
];

export const highlights = [
  {
    icon: "system",
    title: "SAML SSO 인증 연동과 장애 해결",
    description:
      "운영 서버와 IdP 서버 간 시간 차이로 발생한 SAML Assertion 검증 오류를 인증 로그 분석으로 파악하고, NTP 기반 시간 동기화와 재기동 테스트로 해결했습니다.",
  },
  {
    icon: "api",
    title: "외부 시스템 API 연동",
    description:
      "고객만족도 조사 시스템 연계를 위해 JSON 요청/응답 구조와 파라미터 명세를 문서화하고, 수집 데이터 검증과 오류 공유 체계를 운영했습니다.",
  },
  {
    icon: "database",
    title: "Oracle to MS-SQL DB 컨버팅",
    description:
      "Oracle 테이블 구조와 데이터를 MS-SQL 환경으로 이관하고, 데이터 타입과 함수, 서브쿼리 문법 차이를 반영해 SQL을 재작성했습니다.",
  },
  {
    icon: "ai",
    title: "AI 도구를 활용한 생산성 개선",
    description:
      "Dify 기반 사내 업무 내규 챗봇 구현과 Cursor, Kiro를 활용한 대시보드 UI 및 기능 구현 경험을 통해 개발 생산성을 높였습니다.",
  },
];

export const education = {
  school: "서울시립대학교",
  detail: "4년제 졸업",
  period: "2012.03 - 2017.08",
};

export const certificates = [
  { name: "정보처리기사", date: "2024.06" },
  { name: "SQL개발자(SQLD)", date: "2023.07" },
  { name: "리눅스마스터 2급", date: "2024.10" },
  { name: "네트워크관리사 2급", date: "2024.12" },
  { name: "TOEIC 935", date: "2025.10" },
  { name: "컴퓨터활용능력 1급", date: "2019.03" },
];
