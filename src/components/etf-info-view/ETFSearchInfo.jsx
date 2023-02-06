import React from 'react'

import './ETFSearchInfo.scss'

//util
import { addComma2Number } from '../../utils/commonFunction'

export function ETFSearchInfo({ etfInfo }) {
  if(etfInfo === undefined) return <div>Loading...</div>
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
          {etfInfo.diffval !== '0' ? (
            parseFloat(etfInfo.earn1m) > 0 ? (
                <div className="unit-up text-sm">{etfInfo.diffval}</div>
              ) : (
                <div className="unit-down text-sm">{etfInfo.diffval}</div>
              )
            ) : (
              <div className="unit-same text-sm">{etfInfo.diffval}</div>
            )}
        </div>
      </div>
      <div className="splitter"></div>

      <div className="increment-ratio-one-month-cell">
        <div className="title">{'수익률'}</div>
          {etfInfo.earn1m !== '0.000' ? (
            parseFloat(etfInfo.earn1m) > 0 ? (
                <div className="increment-up text-sm">{`${etfInfo.earn1m}%`}</div>
              ) : (
                <div className="increment-down text-sm">{`${etfInfo.earn1m}%`}</div>
              )
            ) : (
              <div className="increment-same text-sm">{`${etfInfo.earn1m}%`}</div>
            )}

        <div className="unit">{'1개월'}</div>
      </div>
      <div className="splitter"></div>

      <div className="increment-ratio-three-month-cell">
        {etfInfo.earn1m !== '0.000' ? (
            parseFloat(etfInfo.earn3m) > 0 ? (
                <div className="increment-up text-sm">{`${etfInfo.earn3m}%`}</div>
              ) : (
                <div className="increment-down text-sm">{`${etfInfo.earn3m}%`}</div>
              )
            ) : (
              <div className="increment-same text-sm">{`${etfInfo.earn3m}%`}</div>
            )}
        <div className="unit">{'3개월'}</div>
      </div>
      <div className="splitter"></div>

      <div className="increment-ratio-one-year-cell">
        {etfInfo.earn1m !== '0.000' ? (
            parseFloat(etfInfo.earn1y) > 0 ? (
                <div className="increment-up text-sm">{`${etfInfo.earn1y}%`}</div>
              ) : (
                <div className="increment-down text-sm">{`${etfInfo.earn1y}%`}</div>
              )
            ) : (
              <div className="increment-same text-sm">{`${etfInfo.earn1y}%`}</div>
            )}
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
        <div className="value">{addComma2Number(etfInfo.marketCap)}</div>
        <div className="unit">{'억'}</div>
      </div>
      <div className="splitter"></div>

      <div className="category">
        <div className="title">{'카테고리'}</div>
        <div className="value">{etfInfo.category}</div>
      </div>
    </div>
  )
}
