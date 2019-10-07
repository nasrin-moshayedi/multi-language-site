import React, { Component, Suspense } from 'react'
import './App.css'
import './i18n'
import Hello from './Hello'
import ThankYou from './thanks'
import LanguageSelector from './LNGUgeSelector'

const App = () => {
    return (
      <div>
        <Suspense fallback={null}>
          <LanguageSelector />
          <Hello />
          <ThankYou />
        </Suspense>
      </div>
    )
}

export default App