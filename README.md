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

### 프로젝트 빌드

> 개발빌드
> yarn build

> 서비스빌드
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

## 기본 Guide

### JavaScript 변수
 
var, const, let으로 선언할 수 있으나 var은 쓰지 않기로 정함

> ES6 이전의 변수 선언 - var
> 호이스팅(hoisting - 끌어올림) 매커니즘에 따르므로 Scope에 혼선이 생김

> ES6 새로운 변수 선언 - const, let
> 블록 단위{}로 변수의 범위가 제한됨
> const : 변경 불가(상수)
> let : 변경 가능(변수)
> 변경되지 않는 변수의 경우 const를 쓰는 것이 성능과 가독성에 좋음

### 코딩 포맷

* 들여 쓰기는 공백 두 개로 함
* 문장 끝세미콜론은 쓰지 않음 - 아래 링크 참조
[https://bakyeono.net/post/2018-01-19-javascript-use-semicolon-or-not.html](https://bakyeono.net/post/2018-01-19-javascript-use-semicolon-or-not.html)
* 모든 괄호의 시작과 끝에 공백을  넣지 않음
~~for ( let i = 0; i < 5; i++ ) {~~ => for (let i = 0; i < 5; i++) {
~~[ 1, 2 ]~~ => [1, 2]
~~{ a: 1 }~~ => {a: 1}
* if 문 예시 : if (a === b) {}
* for 문 예시 : for (let i = 0; i < 5; i++) {}
* 

## 문제해결

### prettier 적용 회피 - 기존 프로젝트 수정 시

	.prettierignore 파일을 프로젝트 루트에 추가함
	# Ignore everything
	*


<!--stackedit_data:
eyJoaXN0b3J5IjpbNjc5NjYyMTQ3LC0xOTc5NTczOTQ3LDE1Nz
g2NzgwNDAsLTEzOTkxOTMwODUsLTE1NDg0NTMxOTIsODMwODY2
NTQxLDI3MjA4NTE1MiwtNTg5NzM1NTE2LDc4MTMzMDI4OSwzOT
g1NTA2NjcsLTE0MjEzNjc2OTYsLTIwMjI2NTU5ODYsLTE5MTU5
NTQ0OTldfQ==
-->