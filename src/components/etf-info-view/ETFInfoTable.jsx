//libraries
import React from 'react'
import './ETFInfoTable.scss'

//utils
import { addComma2Number } from '../../utils/commonFunction'
export function ETFInfoTable({ info }) {
  return (
    <div className="etf-info-table-wrap">
      <div className="etf-info-table-ci-row">
        <img
          src="/assets/images/components/etf-search-info/miraeasset-ci.png"
          className="etf-info-table-ci-img"
        />
        <div className="etf-info-table-ci-name">{info.name}</div>
      </div>
      <div className="etf-info-splitter"></div>
      <div className="content-wrap">
        <div className="left-side">
          <div className="price-row">
            <div className="etf-info-table-title">{'현재가'}</div>
            <div className="etf-info-table-value">{addComma2Number(info.curval)}</div>
          </div>
          <div className="etf-info-splitter"></div>
          <div className="ytd-diff-row">
            <div className="etf-info-table-title">{'전일대비'}</div>
            {info.diffrate !== '0.000' ? (
              parseFloat(info.diffrate) > 0 ? (
                <div className="etf-info-table-value-up">{addComma2Number(info.diffval)}</div>
              ) : (
                <div className="etf-info-table-value-down">{addComma2Number(info.diffval)}</div>
              )
            ) : (
              <div className="etf-info-table-value-same">{addComma2Number(info.diffval)}</div>
            )}
          </div>
          <div className="etf-info-splitter"></div>
          <div className="increment-ratio-one-month-row">
            <div className="etf-info-table-title">{'1개월 수익률'}</div>
            {info.earn1m !== '0.000' ? (
              parseFloat(info.earn1m) > 0 ? (
                <div className="etf-info-table-value-up">{`${info.earn1m}%`}</div>
              ) : (
                <div className="etf-info-table-value-down">{`${info.earn1m}%`}</div>
              )
            ) : (
              <div className="etf-info-table-value-same">{`${info.earn1m}%`}</div>
            )}
          </div>
          <div className="etf-info-splitter"></div>
          <div className="increment-ratio-three-months-row">
            <div className="etf-info-table-title">{'3개월 수익률'}</div>
            {info.earn3m !== '0.000' ? (
              parseFloat(info.earn3m) > 0 ? (
                <div className="etf-info-table-value-up">{`${info.earn3m}%`}</div>
              ) : (
                <div className="etf-info-table-value-down">{`${info.earn3m}%`}</div>
              )
            ) : (
              <div className="etf-info-table-value-same">{`${info.earn3m}%`}</div>
            )}
          </div>
          <div className="etf-info-splitter"></div>
          <div className="increment-ratio-one-year-row">
            <div className="etf-info-table-title">{'1년 수익률'}</div>
            {info.earn1y !== '0.000' ? (
              parseFloat(info.earn1y) > 0 ? (
                <div className="etf-info-table-value-up">{`${info.earn1y}%`}</div>
              ) : (
                <div className="etf-info-table-value-down">{`${info.earn1y}%`}</div>
              )
            ) : (
              <div className="etf-info-table-value-same">{`${info.earn1y}%`}</div>
            )}
          </div>
          <div className="etf-info-splitter"></div>
          <div className="fund-compensation-row">
            <div className="etf-info-table-title">{'펀드보수'}</div>
            <div className="etf-info-table-value">{'미구연'}</div>
          </div>
          <div className="etf-info-splitter"></div>
          <div className="disparate-ratio-row">
            <div className="etf-info-table-title">{'괴리율'}</div>
            <div className="etf-info-table-value">{'미구연'}</div>
          </div>
          <div className="etf-info-splitter"></div>
          <div className="share-ratio-row">
            <div className="etf-info-table-title">{'분배율'}</div>
            <div className="etf-info-table-value">{'미구연'}</div>
          </div>
          <div className="etf-info-splitter"></div>
          <div className="category-row">
            <div className="etf-info-table-title">{'카테고리'}</div>
            <div className="etf-info-table-value">{'미구연'}</div>
          </div>
        </div>
        <div className="right-side">
          <div className="increment-row">
            <div className="etf-info-table-title">{'증감액'}</div>
            <div className="etf-info-table-value">{'전일대비?'}</div>
          </div>
          <div className="etf-info-splitter"></div>
          <div className="increment-ratio-row">
            <div className="etf-info-table-title">{'증감률'}</div>
            {info.diffrate !== '0.000' ? (
              parseFloat(info.diffrate) > 0 ? (
                <div className="etf-info-table-value-up">{`${info.diffrate}%`}</div>
              ) : (
                <div className="etf-info-table-value-down">{`${info.diffrate}%`}</div>
              )
            ) : (
              <div className="etf-info-table-value-same">{`${info.diffrate}%`}</div>
            )}
          </div>
          <div className="etf-info-splitter"></div>
          <div className="nav-row">
            <div className="etf-info-table-title">{'NAV'}</div>
            <div className="etf-info-table-value">{addComma2Number(info.nav)}</div>
          </div>
          <div className="etf-info-splitter"></div>
          <div className="trading-volume-row">
            <div className="etf-info-table-title">{'거래량'}</div>
            <div className="etf-info-table-value">{`${addComma2Number(info.quant)}주`}</div>
          </div>
          <div className="etf-info-splitter"></div>
          <div className="transaction-amount-row">
            <div className="etf-info-table-title">{'거래대금'}</div>
            <div className="etf-info-table-value">{'미구현 백만원'}</div>
          </div>
          <div className="etf-info-splitter"></div>
          <div className="market-cap-row">
            <div className="etf-info-table-title">{'시가총액'}</div>
            <div className="etf-info-table-value">{`${addComma2Number(
              info.marketcap
            )}단위 미정`}</div>
          </div>
          <div className="etf-info-splitter"></div>
          <div className="tracked-index-row">
            <div className="etf-info-table-title">{'추종지수'}</div>
            <div className="etf-info-table-value">{info.findex}</div>
          </div>
          <div className="etf-info-splitter"></div>
          <div className="asset-management-row">
            <div className="etf-info-table-title">{'자산운용사'}</div>
            <div className="etf-info-table-value">{info.manager}</div>
          </div>
          <div className="etf-info-splitter"></div>
        </div>
      </div>
      <div className="etf-info-splitter"></div>
    </div>
  )
}
