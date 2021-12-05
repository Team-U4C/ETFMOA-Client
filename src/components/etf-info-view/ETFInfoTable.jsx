//libraries
import React from 'react'
import './ETFInfoTable.scss'

export function ETFInfoTable() {
  return (
    <div className="etf-info-table-wrap">
      <div className="etf-info-splitter"></div>
      <div className="content-wrap">
        <div className="left-side">
          <div className="price-row">
            <div className="etf-info-table-title">{'현재가'}</div>
            <div className="etf-info-table-value">{39.23}</div>
          </div>
          <div className="etf-info-splitter"></div>
          <div className="ytd-diff-row">
            <div className="etf-info-table-title">{'전일대비'}</div>
            <div className="etf-info-table-value">{290}</div>
          </div>
          <div className="etf-info-splitter"></div>
          <div className="increment-ratio-one-month-row">
            <div className="etf-info-table-title">{'1개월 수익률'}</div>
            <div className="etf-info-table-value">{'+0.48%'}</div>
          </div>
          <div className="etf-info-splitter"></div>
          <div className="increment-ratio-three-months-row">
            <div className="etf-info-table-title">{'3개월 수익률'}</div>
            <div className="etf-info-table-value">{'-4.05%'}</div>
          </div>
          <div className="etf-info-splitter"></div>
          <div className="increment-ratio-one-year-row">
            <div className="etf-info-table-title">{'1년 수익률'}</div>
            <div className="etf-info-table-value">{'+15.21%'}</div>
          </div>
          <div className="etf-info-splitter"></div>
          <div className="fund-compensation-row">
            <div className="etf-info-table-title">{'펀드보수'}</div>
            <div className="etf-info-table-value">{'연 0.150%'}</div>
          </div>
          <div className="etf-info-splitter"></div>
          <div className="disparate-ratio-row">
            <div className="etf-info-table-title">{'괴리율'}</div>
            <div className="etf-info-table-value">{'0.12%'}</div>
          </div>
          <div className="etf-info-splitter"></div>
        </div>
        <div className="right-side">
          <div className="increment-row">
            <div className="etf-info-table-title">{'증감액'}</div>
            <div className="etf-info-table-value">{(+211, 795)}</div>
          </div>
          <div className="etf-info-splitter"></div>
        </div>
      </div>
    </div>
  )
}
