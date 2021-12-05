//libraries
import React from 'react'
import './SingleStockDetailPage.scss'

//components
import { ETFSummaryInfoTitle } from '../ETFSummaryInfoTitle'
import { BarChart } from './BarChart'
export function SingleStockDetailPage({ itemId }) {
  return (
    <div className="etf-view-contents">
      <ETFSummaryInfoTitle
        title={'보유 ETF 검색 결과 '}
        subTitle={'검색 종목을 포함한 ETF 구성 비율입니다.'}
      />
      <div>{}</div>
      <div className="bar-chart-row">
        <BarChart />
      </div>
      <ETFSummaryInfoTitle title={'연관 종목 '} subTitle={'검색 결과와 연관된 종목입니다.'} />
    </div>
  )
}
