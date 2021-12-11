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
          indexValue={'2962.42'}
          increment={'-34.79'}
          incrementRatio={'-1.16%'}
        />
        <DashBoardItem
          indexName={'NASDAQ'}
          indexValue={'15973.86'}
          increment={'4.63'}
          incrementRatio={'1.17%'}
        />
        <DashBoardItem
          indexName={'심천종합'}
          indexValue={'2477.02'}
          increment={'27.06'}
          incrementRatio={'1.11%'}
        />
      </div>
      <div className="dashboard-bottom-line"></div>
    </div>
  )
}
