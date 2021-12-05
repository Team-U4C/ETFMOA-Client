//libraries
import React from 'react'

//components
import { ETFSummaryInfoTitle } from '../ETFSummaryInfoTitle'
import { ETFSearchInfo } from './ETFSearchInfo'
import { Pagination } from './Pagination'

import './KeywordDetailPage.scss'

export function KeywordDetailPage() {
  return (
    <React.Fragment>
      <ETFSummaryInfoTitle title={'연관 ETF '} subTitle={'검색 결과와 연관된 ETF입니다.'} />
      <div className="search-result">
        <ETFSearchInfo />
        <div className="splitter"></div>
        <ETFSearchInfo />
        <div className="splitter"></div>
        <ETFSearchInfo />
        <div className="splitter"></div>
        <Pagination />
      </div>
    </React.Fragment>
  )
}
