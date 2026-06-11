import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  Code2,
  Database,
  GraduationCap,
  Mail,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";
import "./styles.css";
import {
  certificates,
  education,
  experience,
  highlights,
  profile,
  projects,
  skillGroups,
} from "./profileData";

const navItems = [
  ["소개", "about"],
  ["기술", "skills"],
  ["프로젝트", "projects"],
  ["강점", "highlights"],
  ["연락", "contact"],
];

const iconMap = {
  system: ServerCog,
  api: Workflow,
  database: Database,
  ai: Sparkles,
};

function App() {
  return (
    <>
      <header className="site-header" aria-label="주요 메뉴">
        <a className="brand" href="#top" aria-label="강혜수 포트폴리오 홈">
          HSK
        </a>
        <nav>
          {navItems.map(([label, id]) => (
            <a key={id} href={`#${id}`}>
              {label}
            </a>
          ))}
        </nav>
      </header>

      <main id="top">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Highlights />
        <Education />
        <Contact />
      </main>
    </>
  );
}

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <img
        className="hero-image"
        src={`${import.meta.env.BASE_URL}hero-workspace.png`}
        alt=""
        aria-hidden="true"
      />
      <div className="hero-overlay" />
      <div className="hero-content section-inner">
        <p className="eyebrow">{profile.role}</p>
        <h1 id="hero-title">{profile.name}</h1>
        <p className="hero-lead">{profile.summary}</p>
        <div className="hero-actions">
          <a className="button primary" href="#projects">
            프로젝트 보기
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
          <a className="button secondary" href={`mailto:${profile.email}`}>
            <Mail size={18} aria-hidden="true" />
            이메일 보내기
          </a>
        </div>
        <dl className="hero-metrics" aria-label="핵심 경력 지표">
          {profile.metrics.map((metric) => (
            <div key={metric.label}>
              <dt>{metric.label}</dt>
              <dd>{metric.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function SectionHeader({ kicker, title, children }) {
  return (
    <div className="section-header">
      <p className="section-kicker">{kicker}</p>
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  );
}

function About() {
  return (
    <section id="about" className="section about">
      <div className="section-inner about-layout">
        <SectionHeader kicker="About" title="고객의 업무 흐름을 시스템으로 풀어내는 개발자">
          VOC, CRM, 금융소비자보호 시스템처럼 업무 규칙이 복잡한 엔터프라이즈 웹
          시스템을 Java와 Spring 기반으로 개발해 왔습니다.
        </SectionHeader>
        <div className="about-copy">
          {profile.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section muted">
      <div className="section-inner">
        <SectionHeader kicker="Skills" title="실무 중심 기술 스택">
          서버, 데이터베이스, 운영 환경, 화면 개발까지 프로젝트 전 구간에서 필요한
          기술을 다뤄왔습니다.
        </SectionHeader>
        <div className="skill-grid">
          {skillGroups.map((group) => (
            <article className="skill-panel" key={group.title}>
              <h3>{group.title}</h3>
              <ul className="tag-list">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="section experience">
      <div className="section-inner experience-layout">
        <SectionHeader kicker="Experience" title="레드소프트에서 이어온 솔루션 개발 경험">
          2022년 2월부터 솔루션개발본부에서 웹 개발자로 근무하며 다양한 산업군의
          업무 시스템 구축과 고도화를 수행했습니다.
        </SectionHeader>
        <article className="timeline-item">
          <div className="timeline-marker" aria-hidden="true" />
          <div>
            <div className="timeline-heading">
              <h3>{experience.company}</h3>
              <span>{experience.period}</span>
            </div>
            <p className="timeline-meta">{experience.team}</p>
            <p>{experience.description}</p>
          </div>
        </article>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section muted">
      <div className="section-inner">
        <SectionHeader kicker="Projects" title="주요 경력 프로젝트">
          최근 금융, 호텔, 제조, 식품, CRM 영역에서 수행한 프로젝트를 전체 상세로
          정리했습니다.
        </SectionHeader>
        <div className="project-list">
          {projects.map((project, index) => (
            <article className="project-card" key={project.name}>
              <div className="project-index">{String(index + 1).padStart(2, "0")}</div>
              <div className="project-body">
                <div className="project-heading">
                  <h3>{project.name}</h3>
                  <span>{project.period}</span>
                </div>
                <p className="project-env">{project.environment}</p>
                <ul>
                  {project.contributions.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Highlights() {
  return (
    <section id="highlights" className="section">
      <div className="section-inner">
        <SectionHeader kicker="Strengths" title="문제 해결을 만든 경험">
          장애 분석, 외부 연동, 데이터 이관, AI 도구 활용처럼 프로젝트 품질과 속도에
          직접 영향을 준 경험을 정리했습니다.
        </SectionHeader>
        <div className="highlight-grid">
          {highlights.map((item) => {
            const Icon = iconMap[item.icon] ?? ShieldCheck;
            return (
              <article className="highlight-card" key={item.title}>
                <div className="highlight-icon">
                  <Icon size={22} aria-hidden="true" />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section className="section muted">
      <div className="section-inner education-layout">
        <div>
          <SectionHeader kicker="Education" title="학력">
            개발자로 전환하기 전의 경험까지 고객 관점과 커뮤니케이션 역량으로
            연결하고 있습니다.
          </SectionHeader>
          <article className="simple-panel">
            <GraduationCap size={22} aria-hidden="true" />
            <div>
              <h3>{education.school}</h3>
              <p>{education.detail}</p>
              <span>{education.period}</span>
            </div>
          </article>
        </div>
        <div>
          <SectionHeader kicker="Certificates" title="자격 및 어학" />
          <ul className="certificate-list">
            {certificates.map((certificate) => (
              <li key={`${certificate.name}-${certificate.date}`}>
                <Award size={18} aria-hidden="true" />
                <span>{certificate.name}</span>
                <em>{certificate.date}</em>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="section-inner contact-layout">
        <div>
          <p className="section-kicker">Contact</p>
          <h2>업무 흐름을 이해하고 끝까지 완성하는 개발자가 필요하다면</h2>
        </div>
        <a className="button primary contact-button" href={`mailto:${profile.email}`}>
          <Mail size={19} aria-hidden="true" />
          {profile.email}
        </a>
      </div>
    </section>
  );
}

createRoot(document.getElementById("root")).render(<App />);
