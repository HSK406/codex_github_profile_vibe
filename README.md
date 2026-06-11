# 강혜수 개발자 포트폴리오

Java와 Spring 기반 엔터프라이즈 웹 시스템 개발 경험을 소개하는 GitHub Pages용 포트폴리오입니다.

## 실행

```bash
npm install
npm run dev
```

## 빌드

```bash
npm run build
```

## GitHub Pages 배포

이 프로젝트는 저장소명이 `codex_github_profile_vibe`인 프로젝트 Pages 배포를 기준으로 구성되어 있습니다.

1. GitHub 저장소에 코드를 push합니다.
2. 저장소 Settings > Pages에서 Source를 `GitHub Actions`로 설정합니다.
3. `main` 브랜치에 push되면 `.github/workflows/deploy.yml`이 `dist`를 배포합니다.

배포 URL은 다음 형식입니다.

```text
https://<github-id>.github.io/codex_github_profile_vibe/
```
