//libraries
import React from 'react'

//components
import { ETFSummaryInfoTitle } from '../ETFSummaryInfoTitle'
import { ETFSearchInfo } from './ETFSearchInfo'
import { Pagination } from './Pagination'
import { Footer } from '../main-view/Footer'

import './KeywordDetailPage.scss'

export function KeywordDetailPage() {
  return (
    <div className="keyword-detail-page-contents">
      <div className="keyword-detail-page-wrap">
        <ETFSummaryInfoTitle title={'연관 ETF '} subTitle={'검색 결과와 연관된 ETF입니다.'} />
        <div className="keyword-detail-page-search-result">
          <ETFSearchInfo />
          <div className="splitter"></div>
          <ETFSearchInfo />
          <div className="splitter"></div>
          <ETFSearchInfo />
          <div className="splitter"></div>
          <ETFSearchInfo />
          <div className="splitter"></div>
          <ETFSearchInfo />
          <div className="splitter"></div>
          <ETFSearchInfo />
          <div className="splitter"></div>
          <ETFSearchInfo />
          <div className="splitter"></div>
          <ETFSearchInfo />
          <div className="splitter"></div>
          <Pagination totalItemNum={12} itemNumPerPage={3} />
        </div>
      </div>
      <Footer />
    </div>
  )
}
