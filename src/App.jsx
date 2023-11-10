import './App.css'
import GameCheckers from './containers/GameCheckers'
import FichasProvider from './context/FichasProvider'

function App() {
  return (
    <FichasProvider>
      <GameCheckers />
    </FichasProvider>
  )
}

export default App
