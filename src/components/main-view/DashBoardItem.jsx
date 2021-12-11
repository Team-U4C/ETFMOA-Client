import React from 'react'

import './DashBoardItem.scss'
export function DashBoardItem({ indexName, indexValue, increment, incrementRatio }) {
  //TODO: 이컴포넌트 말고 전체적으로 음수도 양수도 아닌경우 흑색 처리를 해줘야한다. 보통 ETF에서 그러기 쉽지 않지..
  function getColorStyle(strValue) {
    let value = parseFloat(strValue)
    if (value < 0) {
      return {
        color: '#308AFE',
      }
    } else if (value > 0) {
      return {
        color: '#DD2626',
      }
    } else {
      return {
        color: '#000000',
      }
    }
  }

  return (
    <div className="dashboard-item">
      <div className="dashboard-item-indexName">{indexName}</div>
      <div className="dashboard-item-indexValue" style={getColorStyle(increment)}>
        {indexValue}
      </div>
      <div className="dashboard-item-increment" style={getColorStyle(increment)}>
        {increment < 0 ? increment.substring(1) : increment}
      </div>
      <div
        className="dashboard-item-incrementRatio"
        style={getColorStyle(increment)}
      >{`(${incrementRatio})`}</div>
    </div>
  )
}
