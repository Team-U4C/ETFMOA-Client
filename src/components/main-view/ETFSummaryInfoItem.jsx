import React, { useState } from 'react'
import './ETFSummaryInfoItem.scss'
export const ETFSummaryInfoItem = ({
  investManager,
  name,
  rank,
  incrementRatio,
  increment,
  price,
  onClick,
}) => {
  // const [name, setName] = useState(null)
  // const [investManager, setInvestManager] = useState(null)
  // const [rank, setRank] = useState(null)
  // const [price ,setPrice] = useState(null)
  // const [increment, setIncrement] = useState(null)
  // const [incrementRatio, setIncrementRatio] = useState(null)
  // const [tradingVolume, setTradingVolume] = useState(null)

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
        <div className="incrementRatio text-xxl">{incrementRatio}</div>
        <div className="price-row">
          {Number(increment) >= 0 ? (
            <div className="price-up text-sm">{price}</div>
          ) : (
            <div className="price-down text-sm">{price}</div>
          )}

          {Number(increment) >= 0 ? (
            <div className="increment-block">
              <img className="updown-img" src="/assets/images/mainview/up.png" />
              <div className="increment-up text-sm">{increment}</div>
            </div>
          ) : (
            <div className="increment-block">
              <img className="updown-img" src="/assets/images/mainview/down.png" />
              <div className="increment-down text-sm">{increment.substring(1)}</div>
            </div>
          )}
        </div>
        <div className="horizon-bar"></div>
        <div className="bottom-row">
          <div className="tradingVolume-title ">{'거래량'}</div>
          <div className="tradingVolume">{'147.3K'}</div>
        </div>
      </div>
    </React.Fragment>
  )
}
