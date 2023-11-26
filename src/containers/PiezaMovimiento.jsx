
import { useContext, useState } from "react"
import './fichas.scss'
import FichaContext from "../context/FichaContext"

const PiezaMovimiento = ({ columna, fila }) => {
    const { movimientoNegra, setDecisionMovimiento, setPosiColumna, negras, setNegativo, setPositivo, turno, setTurno, movimientoBlanca, blancas, setMovimientoBlanca, setMovimientoNegra, setBlancas, setNegras, movimientoDamaNegra, negrasDamas, setPositivoAtras, setPositivoAdelante, setNegativoAtras, setNegativoAdelante, negativoAtras, setMovimientoDamaNegra, setPosiColumnaDamaNegra, posiColumnaDamaNegra, eventZ, setMovimientoDeComer, movimientoDeComer, movimientoDamaBlanca, setPosiColumnaDamaBlanca, setMovimientoDamaBlanca } = useContext(FichaContext)
    let aguantar = false;
    if (turno == "negra") {
        if (movimientoNegra != [0] && (eventZ == "ficha ficha-negra undefined")) {
            if ((movimientoNegra.columnaPositiva == columna || movimientoNegra.columnaNegativa == columna) && movimientoNegra.fila == fila) {
                return (
                    <div className={columna < movimientoNegra.columnaPositiva ? "movement movement-negativo" : "movement movement-positivo"} onClick={(e) => {
                        negras.map((item, id) => {
                            if (id == movimientoNegra.filaActual - 1) {
                                item.map(() => {
                                    if (e.target.className == "movement movement-negativo") {
                                        setPosiColumnaDamaNegra(-1)
                                        setPosiColumna(columna)
                                        if (blancas[fila][columna]) {
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
                                        setPosiColumnaDamaNegra(-1)
                                        blancas[fila][columna - 2] = undefined
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
        else if (movimientoDamaNegra && eventZ === "ficha ficha-negra dama-negra") {
            if ((movimientoDamaNegra.columnaPositivaAdelante == columna && movimientoDamaNegra.filaAdelante == fila) || (movimientoDamaNegra.columnaPositivaAtras == columna && movimientoDamaNegra.filaAtras == fila) || (movimientoDamaNegra.columnaNegativaAtras == columna && movimientoDamaNegra.filaAtras == fila) || (movimientoDamaNegra.columnaNegativaAdelante == columna && movimientoDamaNegra.filaAdelante == fila)) {
                return (
                    <div className={fila < movimientoDamaNegra.filaAtras ? (columna < movimientoDamaNegra.columnaPositivaAdelante ? "movement movement-negativo adelante" : "movement movement-positivo adelante") : (columna < movimientoDamaNegra.columnaPositivaAtras ? "movement movement-negativo atras" : "movement movement-positivo atras")} onClick={(e) => {
                        negrasDamas.map((item, id) => {
                            if (id == movimientoDamaNegra.filaActual - 1) {
                                item.map(() => {
                                    console.log(e.target.className)
                                    if (e.target.className == "movement movement-negativo atras") {
                                        blancas[fila - 2][columna] = undefined
                                        setPosiColumnaDamaNegra(columna)
                                        setPosiColumna(-1)
                                        setNegativoAtras(true)
                                        setTimeout(() => {
                                            setMovimientoDamaNegra([0])
                                        }, 10)
                                    }
                                    else if (e.target.className == "movement movement-positivo atras") {
                                        setPosiColumnaDamaNegra(columna)
                                        setPosiColumna(-1)
                                        blancas[fila - 2][columna - 2] = undefined
                                        setPositivoAtras(true)
                                        setTimeout(() => {
                                            setMovimientoDamaNegra([0])
                                        }, 10)
                                    }
                                    else if (e.target.className == "movement movement-positivo adelante") {
                                        console.log(fila, columna)
                                        blancas[fila][columna - 2] = undefined
                                        setPosiColumna(-1)
                                        setPosiColumnaDamaNegra(columna)
                                        setPositivoAdelante(true)
                                        setTimeout(() => {
                                            setMovimientoDamaNegra([0])
                                        }, 10)
                                    }
                                    else if (e.target.className == "movement movement-negativo adelante") {
                                        blancas[fila][columna] = undefined
                                        setPosiColumna(-1)
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
        if (movimientoBlanca != [0] && eventZ == "ficha ficha-marron false") {
            if ((movimientoBlanca.columnaPositiva == columna || movimientoBlanca.columnaNegativa == columna) && movimientoBlanca.fila == fila) {
                return (
                    <div className={columna < movimientoBlanca.columnaPositiva ? "movement movement-negativo" : "movement movement-positivo"} onClick={(e) => {
                        blancas.map((item, id) => {
                            if (id == movimientoBlanca.filaActual - 1) {
                                item.map(() => {
                                    if (e.target.className == "movement movement-negativo") {
                                        setPosiColumna(columna)
                                        negras[fila - 2][columna] = undefined
                                        negrasDamas[fila - 2][columna] = undefined
                                        setNegras(negras)
                                        setNegativo(true)
                                        setTimeout(() => {
                                            setMovimientoBlanca([0])
                                        }, 10)
                                        setTurno("negra")
                                        setDecisionMovimiento(true)
                                    }
                                    else {
                                        if (negras[fila - 2][columna - 2] || negrasDamas[fila - 2][columna - 2]) {
                                            negras[fila - 2][columna - 2] = undefined
                                            negrasDamas[fila - 2][columna - 2] = undefined
                                            console.log(negras[fila][columna], negras[fila - 1][columna + 1])
                                            if ((negras[fila][columna] || negrasDamas[fila][columna]) && (columna + 1 < 8 && fila + 1 < 8 && !negras[fila + 1][columna + 1] && !negrasDamas[fila + 1][columna + 1])) {
                                                console.log("hola")
                                                setDecisionMovimiento(true)
                                                setTurno("marron")
                                                aguantar = true
                                            }
                                            else {
                                                console.log("hola")
                                                setDecisionMovimiento(true)
                                                setTurno("negra")
                                            }
                                            blancas[fila - 1][columna - 1] = blancas[fila - 3][columna - 3]
                                        }
                                        else if (!aguantar) {
                                            console.log("hola")
                                            setDecisionMovimiento(true)
                                            setTurno("negra")
                                        }
                                        setNegras(negras)
                                        setPosiColumna(columna)
                                        setPositivo(true)
                                        setTimeout(() => {
                                            setMovimientoBlanca([0])
                                        }, 10)
                                    }
                                })
                            }

                        })
                    }}></div>
                )
            }
        }
        else if (movimientoDamaBlanca && eventZ === "ficha ficha-marron dama-marron") {
            if ((movimientoDamaBlanca.columnaPositivaAdelante == columna && movimientoDamaBlanca.filaAdelante == fila) || (movimientoDamaBlanca.columnaPositivaAtras == columna && movimientoDamaBlanca.filaAtras == fila) || (movimientoDamaBlanca.columnaNegativaAtras == columna && movimientoDamaBlanca.filaAtras == fila) || (movimientoDamaBlanca.columnaNegativaAdelante == columna && movimientoDamaBlanca.filaAdelante == fila)) {

                return (
                    <div className={fila < movimientoDamaBlanca.filaAtras ? (columna < movimientoDamaBlanca.columnaPositivaAdelante ? "movement movement-negativo adelante" : "movement movement-positivo adelante") : (columna < movimientoDamaBlanca.columnaPositivaAtras ? "movement movement-negativo atras" : "movement movement-positivo atras")} onClick={(e) => {
                        negrasDamas.map((item, id) => {
                            if (id == movimientoDamaBlanca.filaActual - 1) {
                                item.map(() => {
                                    console.log(e.target.className)
                                    if (e.target.className == "movement movement-negativo atras") {
                                        negras[fila - 2][columna] = undefined
                                        setPosiColumnaDamaBlanca(columna)
                                        setPosiColumna(-1)
                                        setNegativoAtras(true)
                                        setTimeout(() => {
                                            setMovimientoDamaBlanca([0])
                                        }, 10)
                                    }
                                    else if (e.target.className == "movement movement-positivo atras") {
                                        setPosiColumnaDamaBlanca(columna)
                                        setPosiColumna(-1)
                                        negras[fila - 2][columna - 2] = undefined
                                        setPositivoAtras(true)
                                        setTimeout(() => {
                                            setMovimientoDamaBlanca([0])
                                        }, 10)
                                    }
                                    else if (e.target.className == "movement movement-positivo adelante") {
                                        console.log(fila, columna)
                                        negras[fila][columna - 2] = undefined
                                        setPosiColumna(-1)
                                        setPosiColumnaDamaBlanca(columna)
                                        setPositivoAdelante(true)
                                        setTimeout(() => {
                                            setMovimientoDamaBlanca([0])
                                        }, 10)
                                    }
                                    else if (e.target.className == "movement movement-negativo adelante") {
                                        negras[fila][columna] = undefined
                                        setPosiColumna(-1)
                                        setPosiColumnaDamaBlanca(columna)
                                        setNegativoAdelante(true)
                                        setTimeout(() => {
                                            setMovimientoDamaBlanca([0])
                                        }, 10)
                                    }
                                    setTurno("negra")
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
}

export default PiezaMovimiento
