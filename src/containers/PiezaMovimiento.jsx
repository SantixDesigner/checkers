
import { useContext } from "react"
import './fichas.scss'
import FichaContext from "../context/FichaContext"

const PiezaMovimiento = ({ columna, fila }) => {
    const { movimientoNegra, setDecisionMovimiento, setPosiColumna, negras, setNegativo, setPositivo, turno, setTurno, movimientoBlanca, blancas, setMovimientoBlanca, setMovimientoNegra, setBlancas } = useContext(FichaContext)
    if (turno == "negra") {
        if (movimientoNegra) {
            if ((movimientoNegra.columnaPositiva == columna || movimientoNegra.columnaNegativa == columna) && movimientoNegra.fila == fila) {
                
                return (
                    <div className={columna < movimientoNegra.columnaPositiva ? "movement movement-negativo" : "movement movement-positivo"} onClick={(e) => {
                        negras.map((item, id) => {
                            if (id == movimientoNegra.filaActual - 1) {
                                item.map(() => {
                                    if (e.target.className == "movement movement-negativo") {
                                        setPosiColumna(columna)
                                        blancas[fila][columna] = undefined
                                        setBlancas(blancas)
                                        setNegativo(true)
                                        setTimeout(() => {
                                            setMovimientoNegra([0])
                                        }, 10)
                                    }
                                    else {
                                        blancas[fila][columna-2] = undefined
                                        setBlancas(blancas)
                                        setPosiColumna(columna)
                                        setPositivo(true)
                                        setTimeout(() => {
                                            setMovimientoNegra([0])
                                        }, 10)
                                    }
                                    setTurno("marron")

                                })
                            }
                        })
                        setDecisionMovimiento(true)
                    }}></div>
                )
            }
        }
    }
    else if (turno == "marron") {
        if (movimientoBlanca) {
            if ((movimientoBlanca.columnaPositiva == columna || movimientoBlanca.columnaNegativa == columna) && movimientoBlanca.fila == fila) {
                return (
                    <div className={columna < movimientoBlanca.columnaPositiva ? "movement movement-negativo" : "movement movement-positivo"} onClick={(e) => {
                        blancas.map((item, id) => {
                            if (id == movimientoBlanca.filaActual - 1) {
                                item.map(() => {
                                    if (e.target.className == "movement movement-negativo") {
                                        setPosiColumna(columna)
                                        setNegativo(true)
                                    }
                                    else {
                                        setPosiColumna(columna)
                                        setPositivo(true)

                                    }
                                    setTurno("negra")
                                    setTimeout(() => {
                                        setMovimientoBlanca([0])
                                    }, 10)
                                })
                            }
                        })
                        setDecisionMovimiento(true)
                    }}></div>
                )
            }
        }
    }
}

export default PiezaMovimiento
