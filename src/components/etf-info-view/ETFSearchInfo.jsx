import React from 'react'

import './ETFSearchInfo.scss'

//util
import { addComma2Number } from '../../utils/commonFunction'

export function ETFSearchInfo({ etfInfo }) {
  return (
    <div className="search-info-row">
      <div className="ci-cell">
        <img
          className="ci-image"
          src="/assets/images/components/etf-search-info/miraeasset-ci.png"
        />
        <div className="etf-name">{etfInfo.name}</div>
      </div>
      <div className="splitter"></div>
      <div className="price-cell">
        <div className="title">{'현재가(원)'}</div>
        <div className="value">{addComma2Number(etfInfo.curval)}</div>
        <div className="unit-block">
          <img
            className="unit-img"
            src={'/assets/images/components/etf-search-info/triangle-up.png'}
          />
          <div className="unit">{'95.00'}</div>
        </div>
      </div>
      <div className="splitter"></div>

      <div className="increment-ratio-one-month-cell">
        <div className="title">{'수익률'}</div>
        <div className="value">{'-10.23'}</div>
        <div className="unit">{'1개월'}</div>
      </div>
      <div className="splitter"></div>

      <div className="increment-ratio-three-month-cell">
        <div className="value">{'+40.23'}</div>
        <div className="unit">{'3개월'}</div>
      </div>
      <div className="splitter"></div>

      <div className="increment-ratio-one-year-cell">
        <div className="value">{'+123.32'}</div>
        <div className="unit">{'1년'}</div>
      </div>
      <div className="splitter"></div>

      <div className="tradingVolume">
        <div className="title">{'거래량'}</div>
        <div className="value">{addComma2Number(etfInfo.quant)}</div>
      </div>
      <div className="splitter"></div>

      <div className="market-cap-cell">
        <div className="title">{'시가총액'}</div>
        <div className="value">{addComma2Number(etfInfo.marketcap)}</div>
        <div className="unit">{'억'}</div>
      </div>
      <div className="splitter"></div>

      <div className="category">
        <div className="title">{'카테고리'}</div>
        <div className="value">{'원자재'}</div>
      </div>
    </div>
  )
}
