import { useContext } from "react"
import FichaContext from "../context/fichaContext"

export const Pieza = ({color, filaUbicada, columnaUbicada}) => {
    const {posibleMovimiento} = useContext(FichaContext)
    return(
        <div className={`ficha ficha-${color}`} onClick={() => {
            posibleMovimiento(filaUbicada, columnaUbicada, color)
        }}></div>
    )
}