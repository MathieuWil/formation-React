import React from 'react'
import Rectanglebleu, { Recmarron } from '../design4/App'
import './design2.css'

export default function Boxrose() {
  return (
    <div className="wow">
      <div className="boiterose"></div>
      <div className="boiterose"></div>
      <div className="boiterose">
        <Rectanglebleu />
        <Recmarron />
      </div>
    </div>
  )
}
