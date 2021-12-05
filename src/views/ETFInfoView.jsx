//librarys
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { useNavigate } from 'react-router-dom'

//components
import { BarChart } from '../components/etf-info-view/BarChart'
import { Header } from '../components/etf-info-view/Header'
import { SingleStockDetailPage } from '../components/etf-info-view/SingleStockDetailPage'
import { ETFDetailPage } from '../components/etf-info-view/ETFDetailPage'
import { KeywordDetailPage } from '../components/etf-info-view/KeywordDetailPage'

import './ETFInfoView.scss'

export function ETFInfoView() {
  const { itemId } = useParams()
  const navigate = useNavigate()
  const [pageType, setPageType] = useState(0)

  let pages = [<SingleStockDetailPage />, <ETFDetailPage />, <KeywordDetailPage />]
  return (
    <div className="etfInfo-view">
      <Header />
      {pages[pageType]}
    </div>
  )
}
