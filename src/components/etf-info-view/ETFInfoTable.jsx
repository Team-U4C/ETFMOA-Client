//libraries
import React from 'react'
import './ETFInfoTable.scss'

export function ETFInfoTable() {
  return (
    <div className="etf-info-table-wrap">
      <div className='etf-info-table-ci-row'>
        <img src='/assets/images/components/etf-search-info/miraeasset-ci.png' className='etf-info-table-ci-img'/>
        <div className='etf-info-table-ci-name'>{'TIGER TOP 10'}</div>
      </div>
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
          <div className="share-ratio-row">
            <div className="etf-info-table-title">{'분배율'}</div>
            <div className="etf-info-table-value">{'0.21%'}</div>
          </div>
          <div className="etf-info-splitter"></div>
          <div className="category-row">
            <div className="etf-info-table-title">{'카테고리'}</div>
            <div className="etf-info-table-value">{'국내 시장지수'}</div>
          </div>
        </div>
        <div className="right-side">
          <div className="increment-row">
            <div className="etf-info-table-title">{'증감액'}</div>
            <div className="etf-info-table-value">{'+211,795'}</div>
          </div>
          <div className="etf-info-splitter"></div>
          <div className="increment-ratio-row">
            <div className="etf-info-table-title">{'증감률'}</div>
            <div className="etf-info-table-value">{'+0.79%'}</div>
          </div>
          <div className="etf-info-splitter"></div>
          <div className="nav-row">
            <div className="etf-info-table-title">{'NAV'}</div>
            <div className="etf-info-table-value">{'39,218'}</div>
          </div>
          <div className="etf-info-splitter"></div>
          <div className="trading-volume-row">
            <div className="etf-info-table-title">{'거래량'}</div>
            <div className="etf-info-table-value">{'5,758,295주'}</div>
          </div>
          <div className="etf-info-splitter"></div>
          <div className="transaction-amount-row">
            <div className="etf-info-table-title">{'거래대금'}</div>
            <div className="etf-info-table-value">{'227,770백만원'}</div>
          </div>
          <div className="etf-info-splitter"></div>
          <div className="market-cap-row">
            <div className="etf-info-table-title">{'시가총액'}</div>
            <div className="etf-info-table-value">{'53,945억원'}</div>
          </div>
          <div className="etf-info-splitter"></div>
          <div className="tracked-index-row">
            <div className="etf-info-table-title">{'추종지수'}</div>
            <div className="etf-info-table-value">{'코스피 200'}</div>
          </div>
          <div className="etf-info-splitter"></div>
          <div className="asset-management-row">
            <div className="etf-info-table-title">{'자산운용사'}</div>
            <div className="etf-info-table-value">{'삼성자산운용'}</div>
          </div>
          <div className="etf-info-splitter"></div>
        </div>
      </div>
      <div className="etf-info-splitter"></div>

    </div>
  )
}
