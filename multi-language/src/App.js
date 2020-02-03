import React, { Suspense } from 'react'
import './App.css'
import './i18n'
import Hello from './Hello'
import ThankYou from './thanks'
import LanguageSelector from './LNGUgeSelector'
import "./styles/main.scss";

const App = () => {
    return (
      <div>
        <Suspense fallback={null}>
          <LanguageSelector/>
          <Hello />
          <ThankYou />
        </Suspense>
      </div>
    )
};

export default App
