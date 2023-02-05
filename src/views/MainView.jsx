import React, { useRef, useEffect, useState } from 'react'

// dummy data
import { dummyData, yieldTop10DummyData } from '../dummyData'

// components
import { DashBoard } from '../components/main-view/DashBoard'
import { ETFSummaryInfoItem } from '../components/main-view/ETFSummaryInfoItem'
import { ETFSummaryInfoTitle } from '../components/ETFSummaryInfoTitle'
import { Footer } from '../components/main-view/Footer'
import { Carousel } from '../components/main-view/Carousel'

// librarys
import * as _ from 'lodash'
import './MainView.scss'
import { useNavigate } from 'react-router-dom'
import ReactSearchBox from 'react-search-box'
//import ReactSearchBox from '../utils/custom_node_modules/react-search-box/react-search-box.umd'
// components
import { CountryTab } from '../components/main-view/CountryTab'

// API
import { getETFList, getStockList, getTop10, getIndex } from '../utils/api/main-view-api'

export function MainView() {
  const navigate = useNavigate()
  const [data, setData] = useState(null)
  const [items, setItems] = useState([])
  const [top10DiffRate, setTop10DiffRate] = useState([])
  const [top10Quant, setTop10Quant] = useState([])
  const [top10Earn3m, setTop10Earn3m] = useState([])
  const [top10MarketCap, setTop10MarketCap] = useState([])
  const [top10WeekSearch, setTop10WeekSearch] = useState([])

  const [country, setCountry] = useState('KR')
  const [keyword, setKeyword] = useState('')
  useEffect(async () => {
    const etfData = await getETFList()
    const etfList = etfData.map((v) => {
      return { key: v.code, value: v.name }
    })
    const stockData = await getStockList()
    const stockList = stockData.map((v) => {
      return { key: v.code, value: v.name }
    })
    setItems(etfList.concat(stockList))

    // 수익률
    const top10DiffRateData = await getTop10(country, 'diffrate')
    setTop10DiffRate(top10DiffRateData)

    // 거래량
    const top10QuantData = await getTop10(country, 'quant')
    setTop10Quant(top10QuantData)

    // 3개월 수익률
    const top10Earn3mData = await getTop10(country, 'earn3m')
    setTop10Earn3m(top10Earn3mData)

    // 시가총액
    const top10MarketCapData = await getTop10(country, 'marketcap')
    setTop10MarketCap(top10MarketCapData)

  }, [country])

  return (
    <React.Fragment>
      <div className="main-view">
        <DashBoard />
        <div className="logo">
          <img className="logo-image" src="/assets/images/mainview/logo.png"></img>
        </div>

        <div className="search-bar">
          <div className="bar">
            <ReactSearchBox
              placeholder="종목명 혹은 ETF를 검색하세요"
              autoFocus={true}
              fuseConfigs={{ threshold: 0.5 }}
              onSelect={(item) => {
                navigate('/detail' + `/${item.item.value}`)
              }}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  navigate('/detail' + `/${e.target.defaultValue}`)
                }
              }}
              onChange={value=>{
                setKeyword(value)
              }}
              clearOnSelect={true}
              data={items}
            />
          </div>
          <div className="button" onClick={
           () => navigate('/detail' + `/${keyword}`)
          }>
            <img className="button-image" src="/assets/images/mainview/search-svg.svg"></img>
          </div>
        </div>
        <div className="etf-contents">
          <div className="etf-contents-wrap">
            <CountryTab
              country={country}
              clickCallBackFunc={(country) => {
                setCountry(country)
              }}
            />
          </div>

          <div className="etf-summary-info-item-wrap">
            <ETFSummaryInfoTitle
              title={'수익률 상위 10 '}
              subTitle={'하루 수익률 증가 순위 입니다.'}
            />
          </div>
          <div className="top10-yield">
            <Carousel>
              {_.map(top10DiffRate, (v, i) => (
                <ETFSummaryInfoItem
                  key={v.code}
                  rank={i}
                  name={v.name}
                  investManager={v.manager}
                  incrementRatio={v.diffrate}
                  price={v.curval}
                  increment={v.diffval}
                  quant={v.quant}
                  type={'diffRate'}
                  onClick={() => {
                    navigate('/detail' + `/${v.name}`)
                  }}
                />
              ))}
            </Carousel>
          </div>
          <div className="etf-summary-info-item-wrap">
            <ETFSummaryInfoTitle
              title={'거래량 상위 10 '}
              subTitle={'하루 거래량 증가 순위 입니다.'}
            />
          </div>
          <div className="top10-yield">
            <Carousel>
              {_.map(top10Quant, (v, i) => (
                <ETFSummaryInfoItem
                  key={v.code}
                  rank={i}
                  name={v.name}
                  investManager={v.manager}
                  incrementRatio={v.diffrate}
                  price={v.curval}
                  increment={v.diffval}
                  quant={v.quant}
                  type={'quant'}
                  onClick={() => {
                    navigate('/detail' + `/${v.name}`)
                  }}
                />
              ))}
            </Carousel>
          </div>
          <div className="etf-summary-info-item-wrap">
            <ETFSummaryInfoTitle
              title={'3개월 수익률 상위 10 '}
              subTitle={'3개월간 수익률 증가 순위 입니다.'}
            />
          </div>
          <div className="top10-yield">
            <Carousel>
              {_.map(top10Earn3m, (v, i) => (
                <ETFSummaryInfoItem
                  key={v.code}
                  rank={i}
                  name={v.name}
                  investManager={v.manager}
                  incrementRatio={v.diffrate}
                  price={v.curval}
                  increment={v.diffval}
                  quant={v.quant}
                  earn3m={v.earn3m}
                  type={'earn3m'}
                  onClick={() => {
                    navigate('/detail' + `/${v.name}`)
                  }}
                />
              ))}
            </Carousel>
          </div>
          <div className="etf-summary-info-item-wrap">
            <ETFSummaryInfoTitle title={'시가총액 상위 10 '} subTitle={'시가총액 순위 입니다.'} />
          </div>
          <div className="top10-yield">
            <Carousel>
              {_.map(top10MarketCap, (v, i) => (
                <ETFSummaryInfoItem
                  key={v.code}
                  rank={i}
                  name={v.name}
                  investManager={v.manager}
                  incrementRatio={v.diffrate}
                  price={v.curval}
                  increment={v.diffval}
                  quant={v.quant}
                  marketCap={v.marketCap}
                  type={'marketCap'}
                  onClick={() => {
                    navigate('/detail' + `/${v.name}`)
                  }}
                />
              ))}
            </Carousel>
          </div>
          <div className="etf-summary-info-item-wrap">
            <ETFSummaryInfoTitle
              title={'주간 검색량 상위 10 '}
              subTitle={'주간 검색량 순위 입니다.'}
            />
          </div>
          <div className="top10-yield">
            <Carousel>
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
                    navigate('/detail' + `/${v.name}`)
                  }}
                />
              ))}
            </Carousel>
          </div>
          <Footer />
        </div>
      </div>
    </React.Fragment>
  )
}