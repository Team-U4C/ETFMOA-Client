//libraries
import React from 'react'

//components
import { ETFSummaryInfoTitle } from '../ETFSummaryInfoTitle'
import { ETFInfoTable } from './ETFInfoTable'
import { TreeMap } from './TreeMap'

import './ETFDetailPage.scss'

export function ETFDetailPage() {
  return (
    <div className='etf-detail-page-contents'>
      <div className='etf-detail-page-item-wrap'>
        <ETFSummaryInfoTitle title={'ETF 정보 '} subTitle={'검색된 ETF의 정보입니다.'} />
        <ETFInfoTable />
        <ETFSummaryInfoTitle title={'종목 구성비 '} subTitle={'해당 ETF의 종목 구성비 입니다.'} />
        <TreeMap/>
        <ETFSummaryInfoTitle title={'뉴스 '} subTitle={'관련 뉴스입니다.'} />

      </div>
    </div>
  )
}
