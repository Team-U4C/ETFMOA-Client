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

//API
import { getDetailInfo } from '../utils/api/etf-info-view-api'
export function ETFInfoView() {
  const { itemId } = useParams()
  const navigate = useNavigate()
  const [pageType, setPageType] = useState(0)
  const [data, setData] = useState(null)
  useEffect(async () => {
    const detailData = await getDetailInfo(itemId)
    console.log(detailData)
  }, [])

  let pages = [<SingleStockDetailPage />, <ETFDetailPage />, <KeywordDetailPage />]
  return (
    <div className="etfInfo-view">
      <Header />
      {pages[pageType]}
    </div>
  )
}
