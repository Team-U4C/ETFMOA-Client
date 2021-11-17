import './App.scss'
import React, { useRef, useEffect, useState } from 'react'
import { select, selectAll, hierarchy, treemap } from 'd3'

// views
import { MainView } from './views/MainView'

function App() {
  return (
    <React.Fragment>
      <MainView />
    </React.Fragment>
  )
}

export default App
