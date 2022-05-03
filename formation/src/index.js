import React from 'react'
import { render } from 'react-dom'
import App from './App'

const name = 'Mathieu'
const notes = [12, 15, 8, 16, 9]

function Hello({ name, age }) {
  return (
    <h1>
      Bonjour Mr {name}, vous avez {age} ans.
    </h1>
  )
}

function BigText({ children }) {
  return (
    <div>
      <p>Voici un big text :</p>
      <h1>{children}</h1>
    </div>
  )
}

const html = (
  <div>
    <h1>Bienvenue {name}</h1>
    <ul>
      {notes.map((note, index) => (
        <li key={`note-${index}`}>{note} / 20</li>
      ))}
    </ul>
    <Hello name="Wilkosz" age={19} />
    <Hello name="Igor" age={20} />
    <Hello name="Robin" age={21} />
    <Hello name="Pierre" age={22} />
    <BigText>
      Bonjour
      <br />
      <span>Comment allez vous ?</span>
      <br />
      <br />
      <br />
    </BigText>
  </div>
)

const div = document.querySelector('#root')

// Render tout le reste
// render(html, div)

render(<App />, div)
