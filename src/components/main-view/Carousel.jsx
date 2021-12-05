//libraries
import React, { useEffect, useRef, useState } from 'react'

//components

import './Carousel.scss'

export function Carousel({ children }) {
  const slideRef = useRef(null)
  const [page, setPage] = useState(1)
  useEffect(() => {
    slideRef.current.style.transition = 'all 0.7s ease-in-out'
    if (page === 1) {
      slideRef.current.style.transform = 'translateX(0%)'
    } else if (page === 2) {
      slideRef.current.style.transform = 'translateX(-100%)'
    }
  }, [page])
  return (
    <React.Fragment>
      <div className="carousel-row">
        <div className="left-arrow-wrap" onClick={() => setPage(1)}>
          <img className="left-arrow" src="/assets/images/mainview/carousel-left-arrow.png" />
        </div>
        <div className="carousel-wrap">
          <div className="carousel" ref={slideRef}>
            {children}
          </div>
        </div>
        <div className="right-arrow-wrap" onClick={() => setPage(2)}>
          <img className="right-arrow" src="/assets/images/mainview/carousel-right-arrow.png" />
        </div>
      </div>
    </React.Fragment>
  )
}
