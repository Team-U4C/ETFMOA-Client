//libraries
import React from 'react'
import './SingleStockDetailPage.scss'

//components
import { ETFSummaryInfoTitle } from '../ETFSummaryInfoTitle'
import { ETFSearchInfo } from './ETFSearchInfo'
import { BarChart } from './BarChart'
import { Pagination } from './Pagination'
import { Footer } from '../main-view/Footer'

export function SingleStockDetailPage({ itemId }) {
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
          <ETFSearchInfo />
          <div className="splitter"></div>
          <ETFSearchInfo />
          <div className="splitter"></div>
          <ETFSearchInfo />
          <div className="splitter"></div>
          <Pagination totalItemNum={12} itemNumPerPage={3} />
        </div>
        <ETFSummaryInfoTitle title={'뉴스 '} subTitle={'관련 뉴스입니다.'} />
      </div>
      <Footer />
    </div>
  )
}
