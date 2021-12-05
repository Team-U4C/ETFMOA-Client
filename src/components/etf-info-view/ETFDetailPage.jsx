//libraries
import React from 'react'

//components
import { ETFSummaryInfoTitle } from '../ETFSummaryInfoTitle'
import { ETFInfoTable } from './ETFInfoTable'

export function ETFDetailPage() {
  return (
    <React.Fragment>
      <ETFSummaryInfoTitle title={'ETF 정보 '} subTitle={'검색된 ETF의 정보입니다.'} />
      <ETFInfoTable />
    </React.Fragment>
  )
}
