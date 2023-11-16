import { useContext, useState } from 'react'
import './App.css'
import GameCheckers from './containers/GameCheckers'
import FichasProvider from './context/FichasProvider'
import InicioJuego from './containers/IniciarTurno'

function App() {
  const [elegido, setElegido] = useState(false)
  return (
      <FichasProvider>
        {elegido ? <GameCheckers /> : <InicioJuego setElegido={setElegido}/>}
      </FichasProvider>
  )
}

export default App
