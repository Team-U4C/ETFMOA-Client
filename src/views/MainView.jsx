import React, { useRef, useEffect, useState } from 'react'

// dummy data
import { dummyData, yieldTop10DummyData } from '../dummyData'

// components
import { ETFSummaryInfoItem } from '../components/ETFSummaryInfoItem'

// library
import * as _ from 'lodash'
import './MainView.scss'

export function MainView() {
  const [data, setData] = useState(dummyData.data[0])

  return (
    <React.Fragment>
      <div className="main-view">
        <div className="logo">
          <img className="logo-image" src="/assets/images/mainview/logo.png"></img>
        </div>
        <div className="search-bar">
          <input className="bar text-xxl" placeholder="종목명 혹은 ETF를 검색하세요" />
          <div className="button">
            <img className="button-image" src="/assets/images/mainview/search-svg.svg"></img>
          </div>
        </div>
        <div className="top10-yield">
          {_.map(yieldTop10DummyData.data, (v, i) => (
            <ETFSummaryInfoItem
              key={i}
              rank={i}
              name={v.name}
              investManager={v.investManager}
              incrementRatio={v.incrementRatio}
              price={v.price}
              increment={v.increment}
              onClick={() => {
                setData(dummyData.data[i])
                //isDrawn = false
              }}
            />
          ))}
        </div>
      </div>
    </React.Fragment>
  )
}
