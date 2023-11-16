import { useContext } from "react"
import FichaContext from "../context/FichaContext"

const InicioJuego = ({setElegido}) => {
    const {setTurno} = useContext(FichaContext)
    return (
        <div>
            <button onClick={() => {
                setTurno("marron")
                setElegido(true)
            }}>Elegir marron</button>
            <button onClick={() => {
                setTurno("negra")
                setElegido(true)
            }}>Elegir blancas</button>
        </div>
    )
}

export default InicioJuego