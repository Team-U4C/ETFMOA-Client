# Data Visualization D3.js와 React를 이용한 ETF 정보 조회 서비스

## Demo
https://sparkling-biscuit-cbc06a.netlify.app/

## 서비스 소개 
- **ETF**를 이루고 있는 종목들의 비율과 상승하락을 **treemap형식**으로 한 눈에 확인할 수 있는 서비스  (ex. https://finviz.com/map.ashx?t=sec)
- ETF 종목정보 조회 사이트는 대부분 줄 형식으로 종목이 10개가 넘어도 스크롤이 필수이기 때문에 이런 불편함을 해결하고자 하였습니다.
- 서버가 다운되어 DummyData를 이용하고 있는 상태이므로 조회되는 값은 정확하지 않습니다.

<br />

### 주요 기능 

1. ETF 검색 (**TIGER 차이나전기차SOLACTIVE**만 조회하도록 되어있다)
2. 주식 종목으로 ETF 검색 (**삼성전자**만 조회하도록 되어있다)
3. ETF 구성종목 treemap 표현
4. 반응형 treemap 애니메이션 구현

<br />

### 핵심 기능 

1. **ETF 검색**

   ETF를 검색하여 ETF를 찾을 수 있습니다. "TIGER 차이나전기차SOLACTIVE"만 조회 가능

2. **주식 종목으로 ETF 검색**

   주식 종목을 검색하여 연관된 ETF 혹은 해당 종목의 비중이 높은 ETF를 찾을 수 있습니다. "삼성전자"만 조회 가능

3. **ETF 구성종목 treemap 표현**

   D3.js를 이용하여 treemap형식으로 ETF 구성종목의 비중 상승하락을 visualization하여 한 눈에 해당 ETF의 정보를 파악할 수 있도록 합니다.

<img src="https://user-images.githubusercontent.com/23381445/218301971-d5e46e6c-c0e7-4377-bb62-7c4839b04ecf.gif">
<img src="https://user-images.githubusercontent.com/23381445/218302466-0c692e69-8bc5-42b1-884e-6ba07539af24.gif">


### 기술 스택
<img src="https://img.shields.io/badge/D3.js-F9A03C?style=for-the-badge&logo=D3.js&logoColor=white"><img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"><img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=Sass&logoColor=white">

자바스크립트 만으로도 D3.js 를 자유자재로 사용할 수 있으나, 확장성을 고려하여 React를 같이 이용하기로 함

### 시스템 구성도



