# React setup guide

사이트 개발을 위한 react 기본 설정 가이드입니다.

## 설치하기

### nodejs

Chrome V8 JavaScript 엔진으로 빌드된 JavaScript 런타임

[https://nodejs.org/ko/](https://nodejs.org/ko/)

### yarn

프로젝트의 의존성을 관리하는 JavaScript 패키지 매니저

> npm i -g yarn

### VSCode

Microsoft에서 개발한 소스코드 편집기 - mac, linux, windows 지원

[https://code.visualstudio.com/download](https://code.visualstudio.com/download)

### VSCode extensions

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

> 서비스빌드 : 소스 난독화 및 압축 적용됨
> yarn build:prod

build 폴더 내의 모든 파일을 서버로 업로드하면 배포 완료

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

VSCode에서 Eslint + Prettier, Editorconfig의 조합으로 저장 시 자동으로 적용됨

* 들여 쓰기는 공백 두 개로 함
* 문장 끝에 세미콜론은 쓰지 않음(js 파일만) - 아래 링크 참조
~~const a = 1;~~ => const a = 1
[https://bakyeono.net/post/2018-01-19-javascript-use-semicolon-or-not.html](https://bakyeono.net/post/2018-01-19-javascript-use-semicolon-or-not.html)
* 모든 괄호의 시작과 끝에 공백을  넣지 않음
~~if ( a === b ) {~~ => if (a === b) {
~~[ 1, 2 ]~~ => [1, 2]
~~{ a: 1 }~~ => {a: 1}
* if 문 예시 : if (a === b) {}
* for 문 예시 : for (let i = 0; i < 5; i++) {}
* 문장 끝에 공백은 쓰지 않음
* 빈줄은 두 줄 이상 쓰지 않음
* 파일 제일 끝에 빈줄을 넣음 - Editorconfig에서 넣어줌

### 네이밍 규칙

* class 명과 class 파일명은 PascalCase로 함 : 예) TodoList, TodoList.js
* class와 image를 제외한 모든 파일명은 CamelCase로 함 : 예) index.js, index.html, styles.scss
* 이미지 파일은 소문자 + 언더바(underscore)로 함 : 예) arrow_right.png
* 모든 로컬 변수와 함수명은 CamelCase로 함 : 예) userId, getCurrentState
* style 변수는 소문자 + 하이픈(-)으로 함 : 예) red-theme, base-color:  #fff;
* 

### 문자열 처리

항상 작은 따옴표(')로 처리함 : 예) 'React'

Template literals : 백틱(`) (grave accent)을 사용하는 경우
* 여러 줄 처리: 예) const msg = \`Hello, user!
You've got a message!\`
* 문자열 내에 객체를 출력하는 경우 : 예) \`Hello, ${name}\`
* 문자열에 작은 따옴표(')가 있을 경우 : 예) `Hello, you've got a message\`

## 문제해결

### prettier 적용 회피 - 기존 프로젝트 수정 시

	.prettierignore 파일을 프로젝트 루트에 추가함
	# Ignore everything
	*


<!--stackedit_data:
eyJoaXN0b3J5IjpbMjA0MTQ0Njc0NSwxMDY1ODEyMDQ2LC04MD
gzNzU4NywtMTM1NzkyODc3MSwxNTU4MTc1NzQxLC0xOTI5Njg0
MDUsMTM5MDE3NTU5OCw0NjA2OTE2MTgsLTE4ODYyNTI4NzIsND
U4MDc3MzA3LC0xOTc5NTczOTQ3LDE1Nzg2NzgwNDAsLTEzOTkx
OTMwODUsLTE1NDg0NTMxOTIsODMwODY2NTQxLDI3MjA4NTE1Mi
wtNTg5NzM1NTE2LDc4MTMzMDI4OSwzOTg1NTA2NjcsLTE0MjEz
Njc2OTZdfQ==
-->