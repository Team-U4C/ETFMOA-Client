//libraries
import _ from 'lodash'
import React, { useState, useEffect } from 'react'

import './Pagination.scss'

export function Pagination({ totalItemNum, itemNumPerPage, onClick }) {
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {}, [])
  let pageList = []
  let lastPage = Number.isInteger(totalItemNum / itemNumPerPage)
    ? totalItemNum / itemNumPerPage
    : Number.parseInt(totalItemNum / itemNumPerPage) + 1
  for (let i = 1; i <= lastPage; i++) {
    if (currentPage != i) {
      pageList.push(
        <div
          className="page"
          onClick={() => {
            setCurrentPage(i)
          }}
        >
          {i}
        </div>
      )
    } else {
      pageList.push(
        <div
          className="page selected"
          onClick={() => {
            setCurrentPage(i)
          }}
        >
          {i}
        </div>
      )
    }

    if (i !== lastPage) {
      pageList.push(<div className="page-splitter"></div>)
    }
  }

  return <div className="page-wrap">{pageList}</div>
}
