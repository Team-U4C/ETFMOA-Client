//libraries
import React, {useEffect, useState} from 'react'
import './SingleStockDetailPage.scss'

//components
import { ETFSummaryInfoTitle } from '../ETFSummaryInfoTitle'
import { ETFSearchInfo } from './ETFSearchInfo'
import { BarChart } from './BarChart'
import { Pagination } from './Pagination'
import { Footer } from '../main-view/Footer'

export function SingleStockDetailPage({ itemId }) {
  const [relatedETF, setRelatedETF] = useState([])
  useEffect(()=>{
    // 연관 ETF API 호출

    let dummyETF = [
      {
        name:'KODEX 200',
        curval: '32990',
        diffval: '135',
        earn1m: '12.39',
        earn3m: '9.50',
        earn1y: '-7.83',
        quant: '3727156',
        marketCap: '56231',
        category: '지수',
      },
      {
        name:'KODEX 삼성그룹',
        curval: '9265',
        diffval: '5',
        earn1m: '9.77',
        earn3m: '2.60',
        earn1y: '8.11',
        quant: '137868',
        marketCap: '12702',
        category: '종합',
      },
      {
        name:'TIGER 200 IT',
        curval: '30060',
        diffval: '130',
        earn1m: '15.44',
        earn3m: '7.99',
        earn1y: '-11.49',
        quant: '48428',
        marketCap: '7431',
        category: 'IT',
      }
    ]

    setRelatedETF(dummyETF)
  }, [])
  return (
    <div className="single-stock-detail-page-contents">
      <div className="single-stock-detail-page-wrap">
        <ETFSummaryInfoTitle
          title={'보유 ETF 검색 결과 '}
          subTitle={'검색 종목을 포함한 ETF 구성 비율입니다.'}
        />
        <div className="bar-chart-row">
          <BarChart />
        </div>
        <ETFSummaryInfoTitle title={'연관 ETF '} subTitle={'검색 결과와 연관된 ETF입니다.'} />
        <div className="single-stock-detail-page-search-result">
          <ETFSearchInfo etfInfo={relatedETF[0]}/>
          <div className="splitter"></div>
          <ETFSearchInfo etfInfo={relatedETF[1]}/>
          <div className="splitter"></div>
          <ETFSearchInfo etfInfo={relatedETF[2]}/>
          <div className="splitter"></div>
          <Pagination totalItemNum={12} itemNumPerPage={3} />
        </div>
        <ETFSummaryInfoTitle title={'뉴스 '} subTitle={'관련 뉴스입니다.'} />
      </div>
      <Footer />
    </div>
  )
}
