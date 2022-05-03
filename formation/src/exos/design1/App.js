import React from 'react'
import './design1.css'
import Boxrose from '../design2/App'
import Rond from '../design3/App'
import Rectanglevert from '../design5/App'
import Rectanglevertfooter from '../design5/App'

export default function App() {
  return (
    <div>
      <header>
        <Rond />
        <Rectanglevert />
      </header>
      <main>
        <Boxrose />
      </main>
      <footer>
        <Rond />
        <Rectanglevertfooter />
      </footer>
    </div>
  )
}
