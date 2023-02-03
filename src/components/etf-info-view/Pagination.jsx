//libraries
import _ from 'lodash'
import React, { useState, useEffect } from 'react'

import './Pagination.scss'

export function Pagination({ totalItemNum, itemNumPerPage, onClickEventHandler, currentPage }) {
  useEffect(() => {}, [])
  let pageList = []
  let lastPage = Number.isInteger(totalItemNum / itemNumPerPage)
    ? totalItemNum / itemNumPerPage
    : Number.parseInt(totalItemNum / itemNumPerPage) + 1

  for (let i = 1; i <= lastPage * 2 - 1; i++) {
    let page = Number.parseInt(i / 2) + 1

    if (currentPage != page) {
      if (i % 2 == 1) {
        pageList.push(
          <div
            key={i}
            className="page"
            onClick={() => {
              onClickEventHandler(page)
            }}
          >
            {page}
          </div>
        )
      } else {
        pageList.push(<div className="page-splitter" key={i}></div>)
      }
    } else {
      if (i % 2 == 1) {
        pageList.push(
          <div
            key={i}
            className="page selected"
            onClick={() => {
              onClickEventHandler(page)
            }}
          >
            {page}
          </div>
        )
      } else {
        pageList.push(<div className="page-splitter" key={i}></div>)
      }
    }
  }

  return <div className="page-wrap">{pageList}</div>
}
