import { config, API } from '../config'

export async function getETFList() {
  // const res = await fetch(config.DEV_URL + API.GET_ETF_LIST, config.FETCH_HEADER_CONFIG)
  // const resJSon = await res.json()
  // if (resJSon.code === 200) return resJSon.data

  let dummy = {
    code : 200,
    data: [ 
                {code: "12345", name: "TIGER 차이나전기차 SOLACTIVE"},
          ]
  };
  return dummy.data;
}

export async function getStockList() {
  // const res = await fetch(config.DEV_URL + API.GET_STOCK_LIST, config.FETCH_HEADER_CONFIG)
  // const resJSon = await res.json()
  // if (resJSon.code === 200) return resJSon.data

  let dummy = {
    code: 200,
    data: [ 
                {code:'005930', name: '삼성전자'},
          ]
  };
  return dummy.data;
}

export async function getTop10(country, category) {
  // const res = await fetch(
  //   config.DEV_URL + API.GET_TOP_10 + `?category=${category}&country=${country}`,
  //   config.FETCH_HEADER_CONFIG
  // )
  // const resJSon = await res.json()
  // if (resJSon.code === 200) return resJSon.data
  let dummy = null;
  if(category === 'diffrate'){
    dummy = {
      code: 200,
      data: [
                {code: 1,manager:'한국투자신탁운용', name:'ACE 미국IT인터넷S&P(합성 H)', diffrate:'3.92', curval:'12340', diffval:'465', quant:'24145'},
                {code: 2,manager:'삼성자산운용', name:'KODEX Fn웹툰&드라마', diffrate:'3.69', curval:'6190', diffval:'220', quant:'92719'},
                {code: 3,manager:'미래에셋자산운용', name:'TIGER 미국필라델피아반도체레버리지(합성)', diffrate:'3.66', curval:'8790', diffval:'310', quant:'587987'},
                {code: 4,manager:'키움투자자산운용', name:'히어로즈 글로벌리츠이지스액티브', diffrate:'3.43', curval:'9355', diffval:'310', quant:'503'},
                {code: 5,manager:'미래에셋자산운용', name:'TIGER 미국나스닥100레버리지(합성)', diffrate:'3.32', curval:'7625', diffval:'245', quant:'616819'},
                {code: 6,manager:'신한자산운용', name:'SOL 한국형글로벌플랫폼&메타버스액티브', diffrate:'3.07', curval:'9900', diffval:'295', quant:'4404'},
                {code: 7,manager:'삼성자산운용', name:'KODEX 미디어&엔터테인먼트', diffrate:'2.92', curval:'14475', diffval:'410', quant:'46884'},
                {code: 8,manager:'케이비자산운용', name:'KBSTAR iSelect메타버스', diffrate:'2.86', curval:'7545', diffval:'210', quant:'117222'},
                {code: 9,manager:'한국투자신탁운용', name:'ACE 글로벌반도체TOP4 Plus SOLACTIVE', diffrate:'2.85', curval:'11370', diffval:'315', quant:'29357'},
                {code: 10,manager:'엔에이치아문디자산운용', name:'HANARO e커머스', diffrate:'2.78', curval:'12920', diffval:'350', quant:'11080'},
            ]
    }
  }else if(category === 'quant'){
    dummy = {
      code: 200,
      data: [
                {code: 1,manager:'삼성자산운용', name:'KODEX 200선물인버스2X', diffrate:'-0.72', curval:'2760', diffval:'20', quant:'235349938'},
                {code: 2,manager:'삼성자산운용', name:'KODEX 코스닥150선물인버스', diffrate:'-0.30', curval:'1995', diffval:'15', quant:'30230208'},
                {code: 3,manager:'삼성자산운용', name:'KODEX 인버스', diffrate:'-0.32', curval:'4660', diffval:'15', quant:'27413000'},
                {code: 4,manager:'삼성자산운용', name:'KODEX 레버리지', diffrate:'0.70', curval:'15880', diffval:'110', quant:'24725185'},
                {code: 5,manager:'삼성자산운용', name:'KODEX 코스닥150레버리지', diffrate:'0.54', curval:'7515', diffval:'40', quant:'16222341'},
                {code: 6,manager:'미래에셋자산운용', name:'TIGER 200선물인버스2X', diffrate:'-0.51', curval:'2910', diffval:'15', quant:'7125374'},
                {code: 7,manager:'삼성자산운용', name:'KODEX 코스닥150', diffrate:'0.42', curval:'10735', diffval:'45', quant:'4872453'},
                {code: 8,manager:'미래에셋자산운용', name:'TIGER 차이나전기차SOLACTIVE', diffrate:'-1.52', curval:'12610', diffval:'195', quant:'4622222'},
                {code: 9,manager:'삼성자산운용', name:'KODEX 200', diffrate:'0.41', curval:'32990', diffval:'135', quant:'3727156'},
                {code: 10,manager:'미래에셋자산운용', name:'TIGER 미국필라델피아반도체나스닥', diffrate:'1.15', curval:'10110', diffval:'115', quant:'2224217'},
            ]
    }
  }else if(category === 'earn3m'){
    dummy = {
      code: 200,
      data: [
                {code: 1,manager:'미래에셋자산운용', name:'TIGER 차이나항셍테크레버리지(합성 H)', diffrate:'-4.04', earn3m: '108.51', curval:'10575', diffval:'445', quant:'397774'},
                {code: 2,manager:'삼성자산운용', name:'KODEX 차이나H레버리지(H)', diffrate:'-4.72', earn3m: '88.05', curval:'2625', diffval:'130', quant:'1056825'},
                {code: 3,manager:'미래에셋자산운용', name:'TIGER 이머징마켓MSCI레버리지(합성 H)', diffrate:'-2.21', earn3m: '42.38.', curval:'8180', diffval:'185', quant:'802'},
                {code: 4,manager:'케이비자산운용', name:'KBSTAR 중국MSCI China(H)', diffrate:'-2.02', earn3m: '41.89', curval:'9475', diffval:'195', quant:'6501'},
                {code: 5,manager:'미래에셋자산운용', name:'TIGER 화장품', diffrate:'0.20', earn3m: '37.36', curval:'2505', diffval:'5', quant:'493842'},
                {code: 6,manager:'케이비자산운용', name:'KBSTAR 차이나HSCEI(H)', diffrate:'-2.09', earn3m: '36.62', curval:'8675', diffval:'185', quant:'20415'},
                {code: 7,manager:'엔에이치아문디자산운용', name:'HANARO Fn K-POP&미디어', diffrate:'2.55', earn3m: '33.18', curval:'8850', diffval:'220', quant:'16932'},
                {code: 8,manager:'한국투자신탁운용', name:'ACE 골드선물 레버리지(합성 H)', diffrate:'-3.17', earn3m: '32.91', curval:'17130', diffval:'560', quant:'10959'},
                {code: 9,manager:'삼성자산운용', name:'KODEX 미국달러선물인버스2X', diffrate:'-1.43', earn3m: '32.67', curval:'7905', diffval:'115', quant:'279745'},
                {code: 10,manager:'미래에셋자산운용', name:'TIGER 미국달러선물인버스2X', diffrate:'-1.44', earn3m: '32.67', curval:'7865', diffval:'115', quant:'3591'},
            ]
    }
  }else if(category === 'marketcap'){
    dummy = {
      code: 200,
      data: [
                {code: 1,manager:'삼성자산운용', name:'KODEX 200', diffrate:'0.41', curval:'32990', diffval:'135', quant:'3727156', marketCap:'56231'},
                {code: 2,manager:'미래에셋자산운용', name:'TIGER CD금리투자KIS(합성)', diffrate:'0.01', curval:'51865', diffval:'5', quant:'203860', marketCap:'51926'},
                {code: 3,manager:'삼성자산운용', name:'KODEX KOFR금리액티브(합성)', diffrate:'0.03', curval:'102020', diffval:'30', quant:'20579', marketCap:'31832'},
                {code: 4,manager:'미래에셋자산운용', name:'TIGER 차이나전기차SOLACTIVE', diffrate:'-1.52', curval:'12610', diffval:'195', quant:'4622222', marketCap:'31212'},
                {code: 5,manager:'삼성자산운용', name:'KODEX 종합채권(AA-이상)액티브', diffrate:'0.30', curval:'105300', diffval:'310', quant:'17296', marketCap:'25668'},
                {code: 6,manager:'삼성자산운용', name:'KODEX 200선물인버스2X', diffrate:'-0.72', curval:'2760', diffval:'20', quant:'235349938', marketCap:'24139'},
                {code: 7,manager:'미래에셋자산운용', name:'TIGER MSCI Korea TR', diffrate:'0.48', curval:'13710', diffval:'65', quant:'4055', marketCap: '22361'},
                {code: 8,manager:'삼성자산운용', name:'KODEX 200TR', diffrate:'0.45', curval:'11100', diffval:'50', quant:'150901', marketCap: '21146'},
                {code: 9,manager:'삼성자산운용', name:'KODEX 200', diffrate:'0.41', curval:'32990', diffval:'135', quant:'3727156', marketCap: '20962'},
                {code: 10,manager:'미래에셋자산운용', name:'TIGER 미국나스닥100', diffrate:'1.73', curval:'69280', diffval:'1180', quant:'195259', marketCap: '20909'},
            ]
    }
  }
  
  return dummy.data;
}

export async function getIndex() {
  const res = await fetch(config.DEV_URL + API.GET_INDEX, config.FETCH_HEADER_CONFIG)
  const resJSon = await res.json()
  if (resJSon.code === 200) return resJSon.data
}
