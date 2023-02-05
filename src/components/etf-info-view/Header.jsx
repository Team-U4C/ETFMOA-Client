//libraries
import React, {useState} from 'react'
import ReactSearchBox from 'react-search-box'
import { useNavigate } from 'react-router-dom'

import './Header.scss'
export function Header() {
  const navigate = useNavigate()
  const [keyword, setKeyword] = useState('')
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
            autoFocus={true}
            onSelect={(item) => {
              navigate('/detail' + `/${item.item.value}`)
            }}
   
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                setKeyword('')
                navigate('/detail' + `/${e.target.defaultValue}`)
              }
            }}
            clearOnSelect={true}
            onChange={value => setKeyword(value)}
            data={[
              {
                key: '삼성전자',
                value: '삼성전자',
              },
              {
                key: 'TIGER 차이나전기차 SOLACTIVE',
                value: 'TIGER 차이나전기차 SOLACTIVE ',
              },

            ]}
          />
        </div>
        <div className="button" onClick={()=>{
          navigate('/detail' + `/${keyword}`)
          setKeyword('')
        }}>
          <img className="button-image" src="/assets/images/mainview/search-svg.svg"></img>
        </div>
      </div>
    </div>
  )
}
