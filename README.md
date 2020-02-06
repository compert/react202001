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

build 폴더 내의 모든 파일을 서버로 업로드하면 적용 완료

### 프로젝트 구조

	src : 소스 폴더
	public : 진입점 폴더(index.html)
	src/index.js : Root 모듈
	.babelrc : babel 설정 파일
	.editorconfig : EditorConfig 설정 파일
	.eslintrc : Eslint 설정 파일
	.gitignore : git 관리 대상 제외 파일
	.prettierrc : Prettier 설정 파일
	jest.config.js : Jest 설정 파일
	package.json : 프로젝트 정보, 의존 모듈(라이브러리) 관리
	webpack.config.js : Webpack 설정 파일

## 문제해결

### prettier 적용 회피

	.prettierignore 파일을 프로젝트 루트에 추가함
	# Ignore everything
	*


<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE5Njc1OTY3MzMsODMwODY2NTQxLDI3Mj
A4NTE1MiwtNTg5NzM1NTE2LDc4MTMzMDI4OSwzOTg1NTA2Njcs
LTE0MjEzNjc2OTYsLTIwMjI2NTU5ODYsLTE5MTU5NTQ0OTldfQ
==
-->