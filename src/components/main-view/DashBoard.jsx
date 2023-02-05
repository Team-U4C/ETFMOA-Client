import React from 'react'

import './DashBoard.scss'

//components
import { DashBoardItem } from './DashBoardItem'
export function DashBoard() {
  return (
    <div className="dashboard-row">
      <div className="dashboard-top-line"></div>
      <div className="dashboard-block">
        <DashBoardItem
          indexName={'KOSPI'}
          indexValue={'2480.40'}
          increment={'11.52'}
          incrementRatio={'0.47%'}
        />
        <DashBoardItem
          indexName={'NASDAQ'}
          indexValue={'12,006.96'}
          increment={'-193.86'}
          incrementRatio={'-1.59%'}
        />
        <DashBoardItem
          indexName={'심천종합'}
          indexValue={'2163.28'}
          increment={'-9.21'}
          incrementRatio={'-0.42%'}
        />
      </div>
      <div className="dashboard-bottom-line"></div>
    </div>
  )
}
