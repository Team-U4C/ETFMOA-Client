//libraries
import React from 'react'

//components
import { ETFSummaryInfoTitle } from '../ETFSummaryInfoTitle'
import { ETFInfoTable } from './ETFInfoTable'
import { TreeMap } from './TreeMap'
import { Footer } from '../main-view/Footer'

import './ETFDetailPage.scss'

export function ETFDetailPage({ info }) {
  return (
    <div className="etf-detail-page-contents">
      <div className="etf-detail-page-item-wrap">
        <ETFSummaryInfoTitle title={'ETF 정보 '} subTitle={'검색된 ETF의 정보입니다.'} />
        <ETFInfoTable info={info} />
        <ETFSummaryInfoTitle title={'종목 구성비 '} subTitle={'해당 ETF의 종목 구성비 입니다.'} />
        <TreeMap info={info} />
        <ETFSummaryInfoTitle title={'뉴스 '} subTitle={'관련 뉴스입니다.'} />
      </div>
      <Footer />
    </div>
  )
}
