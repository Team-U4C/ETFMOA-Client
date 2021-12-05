import React from 'react'
import './CountryTab.scss'

export function CountryTab({ country, clickCallBackFunc }) {
  return (
    <div className="tab-row">
      <div
        className={country === 'US' ? 'tab' : 'unselected-tab'}
        onClick={() => {
          clickCallBackFunc('US')
        }}
      >
        <div className={country === 'US' ? 'selected' : 'unselected'}>{'미국'}</div>
      </div>
      <div
        className={country === 'KR' ? 'tab' : 'unselected-tab'}
        onClick={() => {
          clickCallBackFunc('KR')
        }}
      >
        <div className={country === 'KR' ? 'selected' : 'unselected'}>{'한국'}</div>
      </div>
      <div
        className={country === 'CN' ? 'tab' : 'unselected-tab'}
        onClick={() => {
          clickCallBackFunc('CN')
        }}
      >
        <div className={country === 'CN' ? 'selected' : 'unselected'}>{'중국'}</div>
      </div>
    </div>
  )
}
