import { useContext, useEffect } from "react"
import './fichas.scss'
import FichaContext from "../context/fichaContext"

const PiezaMovimiento = ({ columna, fila}) => {
    const { movimiento, setDecisionMovimiento, decisionMovimiento, setMovimiento, setPosiColumna, posiColumna} = useContext(FichaContext)
    if (movimiento.length != []){
        if((movimiento.columnaPositiva == columna || movimiento.columnaNegativa == columna) && movimiento.fila == fila){
            return(
                <div className="movement" onClick={() => {
                    setPosiColumna(columna)
                    console.log(posiColumna)
                    setDecisionMovimiento(true)
                }}></div>
            )
        }
    }
}

export default PiezaMovimiento