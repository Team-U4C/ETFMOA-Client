import './App.scss'
import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

// views
import { MainView } from './views/MainView'
import { ETFInfoView } from './views/ETFInfoView'

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<MainView />} />
          <Route path="/detail/:itemId" element={<ETFInfoView />} />
        </Routes>
      </Router>
    </React.Fragment>
  )
}

export default App
