import * as React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Homepage from '../pages/Homepage'
import ConWallet from '../pages/ConWallet'
import GameGuide from '../pages/GameGuide'
import Header from '../component/Header'

const RouterControl = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={< Homepage />} />
          <Route path="connect_wallet" element={< ConWallet />} />
          <Route path="connect_wallet/gameguide" element={< GameGuide />} />
        </Routes>
      </Router>
    </>
  )
}

export default RouterControl