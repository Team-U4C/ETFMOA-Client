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
        <div className="investManager">{investManager}</div>
        <div className="name">{name}</div>
        <div className="incrementRatio text-xs">{incrementRatio}</div>
        <div className="price-row">
          <div className="price">{price}</div>
          <div className="increment">{increment}</div>
        </div>
      </div>
    </React.Fragment>
  )
}
