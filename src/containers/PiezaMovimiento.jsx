
import { useContext } from "react"
import './fichas.scss'
import FichaContext from "../context/FichaContext"

const PiezaMovimiento = ({ columna, fila }) => {
    const { movimientoNegra, setDecisionMovimiento, setPosiColumna, negras, setNegativo, setPositivo, turno, setTurno, movimientoBlanca, blancas, setMovimientoBlanca, setMovimientoNegra, setBlancas, setNegras, movimientoDamaNegra, negrasDamas, setPositivoAtras, setPositivoAdelante, setNegativoAtras, setNegativoAdelante, negativoAtras, setMovimientoDamaNegra, setPosiColumnaDamaNegra, posiColumnaDamaNegra, eventZ } = useContext(FichaContext)
    if (turno == "negra") {
        if (movimientoNegra != [0] && (eventZ == "ficha ficha-negra false")) {
            if ((movimientoNegra.columnaPositiva == columna || movimientoNegra.columnaNegativa == columna) && movimientoNegra.fila == fila) {
                return (
                    <div className={columna < movimientoNegra.columnaPositiva ? "movement movement-negativo" : "movement movement-positivo"} onClick={(e) => {
                        negras.map((item, id) => {
                            if (id == movimientoNegra.filaActual - 1) {
                                item.map(() => {
                                    if (e.target.className == "movement movement-negativo") {
                                        setPosiColumna(columna)
                                        if(blancas[fila][columna]){
                                            negras[fila][columna] == blancas[fila][columna]
                                        }
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
        else if(movimientoDamaNegra && eventZ === "ficha ficha-negra dama-negra"){
            if((movimientoDamaNegra.columnaPositivaAdelante == columna && movimientoDamaNegra.filaAdelante == fila) || (movimientoDamaNegra.columnaPositivaAtras == columna && movimientoDamaNegra.filaAtras == fila) || (movimientoDamaNegra.columnaNegativaAtras == columna && movimientoDamaNegra.filaAtras == fila) || (movimientoDamaNegra.columnaNegativaAdelante == columna && movimientoDamaNegra.filaAdelante == fila)){
                return(
                    <div className={fila < movimientoDamaNegra.filaAtras ? (columna < movimientoDamaNegra.columnaPositivaAdelante ? "movement movement-negativo adelante" : "movement movement-positivo adelante") : (columna < movimientoDamaNegra.columnaPositivaAtras ? "movement movement-negativo atras" : "movement movement-positivo atras")} onClick={(e) => {
                        negrasDamas.map((item, id) => {
                            if (id == movimientoDamaNegra.filaActual - 1){
                                item.map(() => {
                                    console.log(e.target.className)
                                    if (e.target.className == "movement movement-negativo atras"){
                                        blancas[fila-2][columna] = undefined
                                        setPosiColumnaDamaNegra(columna)
                                        setNegativoAtras(true)
                                        setTimeout(() => {
                                            setMovimientoDamaNegra([0])
                                        }, 10)
                                    }
                                    else if(e.target.className == "movement movement-positivo atras"){
                                        setPosiColumnaDamaNegra(columna)
                                        console.log(fila,columna)
                                        blancas[fila-2][columna-2] = undefined
                                        setPositivoAtras(true)
                                        setTimeout(() => {
                                            setMovimientoDamaNegra([0])
                                        }, 10)
                                    }
                                    else if (e.target.className == "movement movement-positivo adelante"){
                                        setPosiColumnaDamaNegra(columna)
                                        setPositivoAdelante(true)
                                        setTimeout(() => {
                                            setMovimientoDamaNegra([0])
                                        }, 10)
                                    }
                                    else if (e.target.className == "movement movement-negativo adelante"){
                                        setPosiColumnaDamaNegra(columna)
                                        setNegativoAdelante(true)
                                        setTimeout(() => {
                                            setMovimientoDamaNegra([0])
                                        }, 10)
                                    }
                                    setTurno("marron")
                                })
                            }
                        }) 
                        setDecisionMovimiento(true)
                    }}>
                    </div>
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
                                        negras[fila-2][columna] = undefined
                                        setNegras(negras)
                                        setNegativo(true)
                                        setTimeout(() => {
                                            setMovimientoBlanca([0])
                                        }, 10)
                                    }
                                    else {
                                        negras[fila-2][columna-2] = undefined
                                        setNegras(negras)
                                        setPosiColumna(columna)
                                        setPositivo(true)
                                        setTimeout(() => {
                                            setMovimientoBlanca([0])
                                        }, 10)
                                    }
                                    setTurno("negra")
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
