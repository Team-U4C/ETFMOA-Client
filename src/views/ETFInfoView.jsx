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

  const [pageType, setPageType] = useState(2)
  const [data, setData] = useState(null)
  const [relatedETFs, setRelatedETFs] = useState([])
  const [ETFInfo, setETFInfo] = useState({})
  useEffect(async () => {
    const detailData = await getDetailInfo(itemId)
    if (detailData.type === 'keyword') {
      setRelatedETFs(detailData.list)
      setPageType(2)
    } else if (detailData.type === 'detail') {
      setPageType(0)
    } else if (detailData.type === 'etf') {
      setETFInfo(detailData.info)
      setPageType(1)
    }
  }, [itemId])

  let pages = [
    <SingleStockDetailPage />,
    <ETFDetailPage info={ETFInfo} />,
    <KeywordDetailPage relatedETFs={relatedETFs} />,
  ]
  return (
    <div className="etfInfo-view">
      <Header />
      {pages[pageType]}
    </div>
  )
}
