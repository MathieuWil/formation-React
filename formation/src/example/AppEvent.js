import React, { useState } from 'react'

export default function AppEvent() {
  const [compteur, setCompteur] = useState(0)

  const onPlus = () => {
    setCompteur(compteur + 1)
  }

  const onMoins = () => {
    setCompteur(compteur - 1)
  }

  return (
    <div>
      <button onClick={onMoins}>-</button>
      <p>Conteur : {compteur}</p>
      <button onClick={onPlus}>+</button>
    </div>
  )
}
