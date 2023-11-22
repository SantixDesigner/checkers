import { useContext, useEffect } from "react"
import FichaContext from "../context/FichaContext"

export const Pieza = ({ color, filaUbicada, columnaUbicada, isDamaNegra }) => {
    const { posibleMovimiento } = useContext(FichaContext)
    return (
        <div className={`ficha ficha-${color} ${isDamaNegra && `dama-negra`}`} onClick={(e) => {
            posibleMovimiento(filaUbicada, columnaUbicada, color, isDamaNegra, e.target.className)
        }}></div>
    )
}