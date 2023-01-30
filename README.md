# The Crown Of The Head 팀의 Moo:re 서비스 소개

## 프로젝트 개요
"최상위 클래스의 디자이너만 살아남는 패션 업계의 고질적인 문제를 어떻게 해결할 수 있을까?" 라는 고민에서 시작된 우리의 플랫폼 Moo:re를 소개합니다.


Moo:re는 make ordinary opportunity로 우리는 ‘평범한 기회를 주는 사람’입니다.


독점 계약 시스템 아래에 있는 최상위권 디자이너 외의 평범한 middle class 디자이너들에게 제품을 출시할 기회, 소비자에게 노출 될 기회를 제공하는 것입니다. 







Moo:re의 주 고객은 두 부류입니다. 


1. 디자이너 : 자신의 디자인 샘플을 마음 껏 게재할 수 있는 공간을 제공합니다. 


2. 소비자 : middle class 디자이너들의 독창적이고 개성있는 디자인 샘플을 구경하고, 좋아요 누르기, 크라우드 펀딩 참여를 할 수 있습니다.






이 두 고객의 가운데에 있는 생산업체는 좋아요 수가 많은 디자인 샘플을 선택해 원자재, 인건비, 펀딩 모집 인원을 선택해 펀딩 상품으로 등록할 수 있습니다.


펀딩 진행중인 상품, 모집이 완료된 상품 내역을 확인하고 주문을 처리할 수 있습니다. 



## 팀원 소개
기획자 : 정수연(리더)


디자이너 : 이채원


프론트엔드 개발자 : 오인혁


백엔드 개발자 : 장유진, 정재민



## 개발 스택
프론트 : React.js, Axios


백 : Spring boot, Hibernate, MySQL



## 개발 과정
0. 백, 프론트 역할 분담 및 개발 시작


1. ERD 설계, table 설계


2. Entity 작성 -> package name : domain


3. Repository 작성 -> package name : repository


4. Service 작성 -> package name : service


5. Controller 작성 -> package name : controller


6. postman을 사용해 API 테스트


7. 프론트 API 연결


8. 디버깅 및 테스트



## 기능 구현 내용
- 디자이너로 회원가입
- 소비자로 회원가입
- 디자이너로 로그인
- 소비자로 로그인
- 샘플 게재(이름, 설명, 사진) : 디자이너 권한
- 샘플 list 조회
- 샘플에 좋아요 및 취소 : 소비자 권한
- 좋아요 기준 내림차순 샘플 정렬 : 생산자의 관리 페이지
- 샘플 선택 및 펀딩 상품 등록(원자재, 인건비, 펀딩 모집 인원) : 관리자 권한
- 펀딩 참여(주소, 전화번호, 수량) : 소비자 권한
- 주문 내역 조회 : 관리자 페이지 -> 펀딩 모집중(waiting), 모집 완료 및 제작 시작(approved)로 분류









# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
