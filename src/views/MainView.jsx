import React, { useRef, useEffect, useState } from 'react'

// dummy data
import { dummyData, yieldTop10DummyData } from '../dummyData'

// components
import { ETFSummaryInfoItem } from '../components/main-view/ETFSummaryInfoItem'
import { ETFSummaryInfoTitle } from '../components/ETFSummaryInfoTitle'
import { Footer } from '../components/main-view/Footer'
import { Carousel } from '../components/main-view/Carousel'

// librarys
import * as _ from 'lodash'
import './MainView.scss'
import { useNavigate } from 'react-router-dom'
import ReactSearchBox from 'react-search-box'

// components
import { CountryTab } from '../components/main-view/CountryTab'

//TODO: div 태그에 마우스 호버링시 마우스 아이콘 클릭 아이콘으로 변경
export function MainView() {
  const navigate = useNavigate()
  const [data, setData] = useState(dummyData.data[0])
  const [country, setCountry] = useState('US')
  return (
    <React.Fragment>
      <div className="main-view">
        <div className="logo">
          <img className="logo-image" src="/assets/images/mainview/logo.png"></img>
        </div>
        {/* <div className="search-bar">
          <input className="bar text-xxl" placeholder="종목명 혹은 ETF를 검색하세요" />
          <div className="button">
            <img className="button-image" src="/assets/images/mainview/search-svg.svg"></img>
          </div>
        </div> */}
        <div className="search-bar">
          <div className="bar">
            <ReactSearchBox
              placeholder="종목명 혹은 ETF를 검색하세요"
              fuseConfigs={{}}
              onSelect={(item) => {
                navigate('/detail' + `/${item.item.value}`)
              }}
              data={[
                {
                  key: '삼성전자',
                  value: '삼성전자',
                },
                {
                  key: '삼성물산',
                  value: '삼성물산',
                },
                {
                  key: '삼성전기',
                  value: '삼성전기',
                },
                {
                  key: '삼성바이오로직스',
                  value: '삼성바이오로직스',
                },
                {
                  key: '삼성디스플레이',
                  value: '삼성디스플레이',
                },
                {
                  key: '삼성SDS',
                  value: '삼성SDS',
                },
                {
                  key: '삼성화재',
                  value: '삼성화재',
                },
                {
                  key: '삼성생명',
                  value: '삼성생명',
                },
                {
                  key: '삼성생명',
                  value: '삼성생명',
                },
                {
                  key: '삼성생명',
                  value: '삼성생명',
                },
                {
                  key: '삼성생명',
                  value: '삼성생명',
                },
                {
                  key: '삼성생명',
                  value: '삼성생명',
                },
                {
                  key: '삼성생명',
                  value: '삼성생명',
                },
                {
                  key: '삼성생명',
                  value: '삼성생명',
                },
                {
                  key: '삼성생명',
                  value: '삼성생명',
                },
                {
                  key: '삼성생명',
                  value: '삼성생명',
                },
                {
                  key: '삼성생명',
                  value: '삼성생명',
                },
                {
                  key: '삼성생명',
                  value: '삼성생명',
                },
                {
                  key: '삼성생명',
                  value: '삼성생명',
                },
                {
                  key: '삼성생명',
                  value: '삼성생명',
                },
                {
                  key: '삼성생명',
                  value: '삼성생명',
                },
                {
                  key: '삼성생명',
                  value: '삼성생명',
                },
                {
                  key: '삼성생명',
                  value: '삼성생명',
                },
                {
                  key: '삼성생명',
                  value: '삼성생명',
                },
                {
                  key: '삼성생명',
                  value: '삼성생명',
                },
                {
                  key: '엘지전자',
                  value: '엘지전자',
                },
                {
                  key: '엘지디스플레이',
                  value: '엘지디스플레이',
                },
                {
                  key: '네이버',
                  value: '네이버',
                },
              ]}
            />
          </div>
          <div className="button">
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
          <div className="etf-summary-info-item-wrap">
            <ETFSummaryInfoTitle
              title={'거래량 상위 10 '}
              subTitle={'하루 거래량 증가 순위 입니다.'}
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
          <div className="etf-summary-info-item-wrap">
            <ETFSummaryInfoTitle
              title={'3개월 수익률 상위 10 '}
              subTitle={'3개월간 수익률 증가 순위 입니다.'}
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
          <div className="etf-summary-info-item-wrap">
            <ETFSummaryInfoTitle title={'시가총액 상위 10 '} subTitle={'시가총액 순위 입니다.'} />
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
