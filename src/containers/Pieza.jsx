import { useContext, useEffect } from "react"
import FichaContext from "../context/FichaContext"

export const Pieza = ({ color, filaUbicada, columnaUbicada, isDamaNegra, isDamaBlanca }) => {
    const { posibleMovimiento } = useContext(FichaContext)
    return (
        <div className={`ficha ficha-${color} ${isDamaNegra ? `dama-negra` : isDamaBlanca && `dama-marron`}`} onClick={(e) => {
            posibleMovimiento(filaUbicada, columnaUbicada, color, isDamaNegra, isDamaBlanca, e.target.className)
        }}></div>
    )
}