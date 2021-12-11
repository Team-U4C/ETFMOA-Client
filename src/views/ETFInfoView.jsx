//librarys
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { useNavigate } from 'react-router-dom'

//components
import { BarChart } from '../components/etf-info-view/BarChart'
import { Header } from '../components/etf-info-view/Header'
import { Footer } from '../components/main-view/Footer'
import { SingleStockDetailPage } from '../components/etf-info-view/SingleStockDetailPage'
import { ETFDetailPage } from '../components/etf-info-view/ETFDetailPage'
import { KeywordDetailPage } from '../components/etf-info-view/KeywordDetailPage'

import './ETFInfoView.scss'

export function ETFInfoView() {
  const { itemId } = useParams()
  const navigate = useNavigate()
  const [pageType, setPageType] = useState(2)

  console.log(itemId)
  // api 테스트
  fetch(`http://localhost:3000/etf/${itemId}`, {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'include', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res)
    })
  let pages = [<SingleStockDetailPage />, <ETFDetailPage />, <KeywordDetailPage />]
  return (
    <div className="etfInfo-view">
      <Header />
      {pages[pageType]}
    </div>
  )
}
