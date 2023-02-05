import { config, API } from '../config'

export async function getDetailInfo(name) {
  // const res = await fetch(config.DEV_URL + API.GET_DETAIL + `/${name}`, config.FETCH_HEADER_CONFIG)
  // const resJSon = await res.json()
  // if (resJSon.code === 200) return resJSon.data
  let dummy = null;
  if(name === '삼성전자'){
    dummy = {
      code: 200,
      data: {
        type: 'detail'
      }
    }
  }else(
    dummy = {
      code: 200,
      data: {
        type:'etf',
        info: {
          name:'TIGER 차이나전기차SOLACTIVE',
          curval:'12610',
          dividends: '0.21',
          diffval:'195',
          diffrate:'-1.52',
          disparateRatio:'-0.17',
          earn1m:'6.77',
          earn3m:'-7.14',
          earn1y:'-21.53',
          fee:'0.49',
          increment: '315261',
          nav:'12632',
          quant:'5758295',
          amount:'58265',
          marketcap: '31212',
          findex:'없음',
          manager:'미래에셋자산운용',
          category: '4차산업',
          portion:{
            cap01name: 'BYD',
            cap01ratio: '12.94',
            cap02name: 'CATL',
            cap02ratio: '7.89',
            cap03name: 'INOVANCE',
            cap03ratio: '7.16',
            cap04name: 'Eve Energy',
            cap04ratio: '7.12',
            cap05name: 'Ganfeng Lithium',
            cap05ratio: '7.01',
            cap06name: 'Global X China Electric ETF',
            cap06ratio: '5.83',
            cap07name: '차이나전기차 TRS 2',
            cap07ratio: '5.49',
            cap08name: 'Tianqi Lithium',
            cap08ratio: '5.48',
            cap09name: 'Tinci',
            cap09ratio: '4.81',
            cap10name: 'Easpring',
            cap10ratio: '3.26',
            cap11name: 'CNGR',
            cap11ratio: '2.20',
            cap12name: 'Niu',
            cap12ratio: '1.51', 
            cap13name: 'KDL',
            cap13ratio: '1.04',
            cap14name: 'YONTA',
            cap14ratio: '0.61',  
            cap15name: 'GOTION',
            cap15ratio: '0.4',
          }
        },
      }
    }
  )
  return dummy.data;
}
