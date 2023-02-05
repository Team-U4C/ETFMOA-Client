//libraries
import React, { useState } from 'react'

//components
import { ETFSummaryInfoTitle } from '../ETFSummaryInfoTitle'
import { ETFSearchInfo } from './ETFSearchInfo'
import { Pagination } from './Pagination'
import { Footer } from '../main-view/Footer'

import './KeywordDetailPage.scss'

export function KeywordDetailPage({ relatedETFs }) {
  const itemNumPerPage = 20

  const [currentPage, setCurrentPage] = useState(1)
  return (
    <div className="keyword-detail-page-contents">
      <div className="keyword-detail-page-wrap">
        <ETFSummaryInfoTitle title={'연관 ETF '} subTitle={'검색 결과와 연관된 ETF입니다.'} />
        {relatedETFs.map((value, index) => {
          if (index >= (currentPage - 1) * 20 && index <= currentPage * 20 - 1) {
            return (
              <div className="keyword-detail-page-search-result" key={index}>
                <ETFSearchInfo etfInfo={value} />
                <div className="splitter"></div>
              </div>
            )
          }
        })}

        <Pagination
          totalItemNum={relatedETFs.length}
          itemNumPerPage={itemNumPerPage}
          onClickEventHandler={(page) => {
            setCurrentPage(page)
          }}
          currentPage={currentPage}
        />
      </div>
      <Footer />
    </div>
  )
}
