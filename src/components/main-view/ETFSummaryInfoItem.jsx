import React, { useState } from 'react'
import './ETFSummaryInfoItem.scss'

//util
import { addComma2Number } from '../../utils/commonFunction'
export const ETFSummaryInfoItem = ({
  investManager,
  name,
  rank,
  incrementRatio,
  increment,
  price,
  quant,
  earn3m,
  marketCap,
  onClick,
  type,
}) => {
  return (
    <React.Fragment>
      <div
        className="rect"
        onClick={() => {
          onClick()
        }}
      >
        <div className="header-row">
          <div className="investManager text-sm">{investManager}</div>
          <div className="rank text-sm">{rank + 1}</div>
        </div>
        <div className="name text-base">{name}</div>
        {type === 'diffRate' && (
          <div className="incrementRatio text-xxl">{`${incrementRatio}%`}</div>
        )}
        {type === 'quant' && (
          <div className="incrementRatio text-xxl">{addComma2Number(quant)}</div>
        )}
        {type === 'earn3m' && <div className="incrementRatio text-xxl">{`${earn3m}%`}</div>}

        {type === 'marketCap' && (
          <div className="incrementRatio text-xxl">{`${addComma2Number(marketCap)}`}</div>
        )}
        {type === 'diffRate' && (
          <div className="price-row">
            {incrementRatio !== '0.000' ? (
              parseFloat(incrementRatio) > 0 ? (
                <div className="price-up text-sm">{addComma2Number(price)}</div>
              ) : (
                <div className="price-down text-sm">{addComma2Number(price)}</div>
              )
            ) : (
              <div className="price-same text-sm">{addComma2Number(price)}</div>
            )}

            {incrementRatio !== '0.000' ? (
              parseFloat(incrementRatio) > 0 ? (
                <div className="increment-block">
                  <img className="updown-img" src="/assets/images/mainview/up.png" />
                  <div className="increment-up text-sm">{addComma2Number(increment)}</div>
                </div>
              ) : (
                <div className="increment-block">
                  <img className="updown-img" src="/assets/images/mainview/down.png" />
                  <div className="increment-down text-sm">
                    {addComma2Number(increment)}
                  </div>
                </div>
              )
            ) : (
              <div className="increment-block">
                <div className="increment-same text-sm">{addComma2Number(increment)}</div>
              </div>
            )}
          </div>
        )}
        {type === 'quant' && <div className="field-name">{'누적 거래량'}</div>}
        {type === 'earn3m' && <div className="field-name">{'3개월 수익률'}</div>}
        {type === 'marketCap' && <div className="field-name">{'시가총액'}</div>}

        <div className="horizon-bar"></div>
        {type === 'diffRate' && (
          <div className="bottom-row">
            <div className="bottom-row-title ">{'거래량'}</div>
            <div className="tradingVolume">{addComma2Number(quant)}</div>
          </div>
        )}
        {type !== 'diffRate' && (
          <div className="bottom-row">
            <div className="bottom-row-title">{'현재가'}</div>
            {incrementRatio !== '0.000' ? (
              parseFloat(incrementRatio) > 0 ? (
                <div className="price-up text-sm">{addComma2Number(price)}</div>
              ) : (
                <div className="price-down text-sm">{addComma2Number(price)}</div>
              )
            ) : (
              <div className="price-same text-sm">{addComma2Number(price)}</div>
            )}
            {incrementRatio !== '0.000' ? (
              parseFloat(incrementRatio) > 0 ? (
                <div className="increment-ratio-up text-xxl">{`${incrementRatio}%`}</div>
              ) : (
                <div className="increment-ratio-down text-xxl">{`${incrementRatio}%`}</div>
              )
            ) : (
              <div className="increment-ratio-same text-xxl">{`${incrementRatio}%`}</div>
            )}
          </div>
        )}
      </div>
    </React.Fragment>
  )
}
