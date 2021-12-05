import React from 'react'
import './ETFSummaryInfoTitle.scss'
export function ETFSummaryInfoTitle({ title, subTitle }) {
  return (
    <div className="title-row">
      <div className="title-block">
        <div className="title">{`${title}`}</div>
        <img className="arrow-image" src="/assets/images/mainview/arrow.png" />
      </div>
      <div className="sub-title">{`${subTitle}`}</div>
    </div>
  )
}
