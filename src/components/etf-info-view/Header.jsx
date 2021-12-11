//libraries
import React from 'react'
import ReactSearchBox from 'react-search-box'
import { useNavigate } from 'react-router-dom'

import './Header.scss'
export function Header() {
  const navigate = useNavigate()

  return (
    <div className="etf-info-view-header">
      <div
        className="logo"
        onClick={() => {
          navigate('/')
        }}
      >
        <img className="logo-image" src="/assets/images/mainview/logo.png"></img>
      </div>
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
                key: '삼성전자',
                value: '삼성전자',
              },
              {
                key: '삼성전자',
                value: '삼성전자',
              },
              {
                key: '삼성전자',
                value: '삼성전자',
              },
            ]}
          />
        </div>
        <div className="button">
          <img className="button-image" src="/assets/images/mainview/search-svg.svg"></img>
        </div>
      </div>
    </div>
  )
}
