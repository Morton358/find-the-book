import React from 'react'

import './App.css'
import SearchBook from "./containers/SearchBook/SearchBook";

const App: React.FC = () => {
  return (
    <div className="container main">
      <div className="row">
        <SearchBook />
      </div>
    </div>
  )
}

export default App
