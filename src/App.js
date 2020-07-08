import React from 'react'
import Grid from './components/Grid'
import { library } from '@fortawesome/fontawesome-svg-core'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import './styles/App.css'

library.add(far, fas)

function App() {
  return (
    <div className="app">
      <Grid />
    </div>
  )
}

export default App
