//libraries
import _ from 'lodash'
import React, { useState, useEffect } from 'react'

import './Pagination.scss'

export function Pagination({ totalPage, itemNumPerPage, onClick }) {
  const [currentPage, setCurrentPage] = useState(1)
  //const [totalPage, setTotalPage] = useState(null)

  useEffect(() => {}, [])
  let pageList = []
  for (let i = 0; i < 5; i++) {
    pageList.push(<div className="page">{i}</div>)
    if (i !== 4) {
      pageList.push(<div className="page-splitter"></div>)
    }
  }

  return <div className="page-wrap">{pageList}</div>
}
