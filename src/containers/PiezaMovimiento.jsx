
import { useContext, useEffect, useState } from "react"
import './fichas.scss'
import FichaContext from "../context/FichaContext"

const PiezaMovimiento = ({ columna, fila }) => {
    const { movimiento, setDecisionMovimiento, setPosiColumna, negras } = useContext(FichaContext)
    if (movimiento.length != 0) {
        if ((movimiento.columnaPositiva == columna || movimiento.columnaNegativa == columna) && movimiento.fila == fila) {
            return (
                <div className={columna < movimiento.columnaPositiva ? "movement movement-negativo" : "movement movement-positivo"} onClick={(e) => {
                    negras.map((item, id) => {
                        if (id == movimiento.filaActual - 1) {
                            item.map((itemZ, idem) => {
                                setPosiColumna(columna)
                            })
                        }
                    })
                    setDecisionMovimiento(true)
                }}></div>
            )
        }
    }
}

export default PiezaMovimiento
