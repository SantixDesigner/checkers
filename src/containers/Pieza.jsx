import { useContext, useEffect } from "react"
import FichaContext from "../context/FichaContext"

export const Pieza = ({ color, filaUbicada, columnaUbicada }) => {
    const { posibleMovimiento } = useContext(FichaContext)
    return (
        <div className={`ficha ficha-${color}`} onClick={() => {
            posibleMovimiento(filaUbicada, columnaUbicada, color)
        }}></div>
    )
}