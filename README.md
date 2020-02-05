# React setup guide

사이트 개발을 위한 react 기본 설정 가이드입니다.


## 설치하기

### nodejs

Chrome V8 JavaScript 엔진으로 빌드된 JavaScript 런타임

[https://nodejs.org/ko/](https://nodejs.org/ko/)

### yarn

프로젝트의 의존성을 관리하는 JavaScript 패키지 매니저

> npm i -g yarn

### vscode

Microsoft에서 개발한 소스코드 편집기 - mac, linux, windows 지원

[https://code.visualstudio.com/download](https://code.visualstudio.com/download)

### vscode extensions

	EditorConfig for VS Code
	ESLint
	Korean Language Pack for Visual Studio Code
	Prettier - Code formatter

## 프로젝트 생성 및 git 저장소 내려받기

> mkdir react202001
> cd react202001
> git clone https://github.com/compert/react202001.git

### 프로젝트 실행

> yarn start

### 프로젝트 배포

개발배포

> yarn build

서비스배포

> yarn build:prod

### 프로젝트 구조

	package.json : 프로젝트 의존 모듈 관리


<!--stackedit_data:
eyJoaXN0b3J5IjpbLTIwNDA0MTgyMTQsNzgxMzMwMjg5LDM5OD
U1MDY2NywtMTQyMTM2NzY5NiwtMjAyMjY1NTk4NiwtMTkxNTk1
NDQ5OV19
-->