import { useState } from "react";
import FichaContext from "./FichaContext";

const FichasProvider = ({ children }) => {
    const [movimientoNegra, setMovimientoNegra] = useState([0])
    const [posiColumna, setPosiColumna] = useState(-1)
    const [movimientoBlanca, setMovimientoBlanca] = useState([0])
    const [decisionMovimiento, setDecisionMovimiento] = useState(false)
    const [positivo, setPositivo] = useState(false)
    const [negativo, setNegativo] = useState(false)
    const [turno, setTurno] = useState("esperando turno")
    const [blancas, setBlancas] = useState([
        [undefined, 2, undefined, 4, undefined, 6, undefined, 8],
        [1, undefined, 3, undefined, 5, undefined, 7, undefined,],
        [undefined, 2, undefined, 4, undefined, 6, undefined, 8],
        [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
        [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
        [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
        [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
        [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
    ])
    const [negras, setNegras] = useState([
        [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
        [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
        [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
        [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
        [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
        [1, undefined, 3, undefined, 5, undefined, 7, undefined],
        [undefined, 2, undefined, 4, undefined, 6, undefined, 8],
        [1, undefined, 3, undefined, 5, undefined, 7, undefined],
    ])
    const filasCheckers = () => {
        const sacarFichas = [
            [1, 2, 3, 4, 5, 6, 7, 8],
            [1, 2, 3, 4, 5, 6, 7, 8],
            [1, 2, 3, 4, 5, 6, 7, 8],
            [1, 2, 3, 4, 5, 6, 7, 8],
            [1, 2, 3, 4, 5, 6, 7, 8],
            [1, 2, 3, 4, 5, 6, 7, 8],
            [1, 2, 3, 4, 5, 6, 7, 8],
            [1, 2, 3, 4, 5, 6, 7, 8],
        ]
        return sacarFichas
    }
    const posibleMovimiento = (fila, columna, color) => {
        if (color == "negra" && color == turno) {
            if (columna == 1 || columna == 8) {
                if (blancas[fila - 2][columna] && fila - 3 > -1) {
                    if (!blancas[fila - 3][columna + 1]) {
                        if (blancas[fila - 2][columna - 2] && !blancas[fila - 3][columna - 3]) {
                            setMovimientoNegra({ columnaPositiva: columna + 2, columnaNegativa: columna - 2, fila: fila - 2, columnaActual: columna, filaActual: fila })
                        }
                        else {
                            setMovimientoNegra({ columnaPositiva: columna + 2, columnaNegativa: 9, fila: fila - 2, columnaActual: columna, filaActual: fila })
                        }
                    }
                    else {
                        setMovimientoNegra({ columnaPositiva: columna + 1, columnaNegativa: columna - 1, fila: fila - 1, columnaActual: columna, filaActual: fila })
                    }
                }
                else if (blancas[fila - 2][columna - 2] && fila - 3 > -1) {
                    if (!blancas[fila - 3][columna - 3]) {
                        if (blancas[fila - 2][columna] && !blancas[fila - 3][columna - 3]) {
                            setMovimientoNegra({ columnaPositiva: columna + 2, columnaNegativa: columna - 2, fila: fila - 2, columnaActual: columna, filaActual: fila })
                        }
                        else {
                            setMovimientoNegra({ columnaPositiva: 9, columnaNegativa: columna - 2, fila: fila - 2, columnaActual: columna, filaActual: fila })
                        }
                    }
                    else {
                        setMovimientoNegra({ columnaPositiva: columna + 1, columnaNegativa: columna - 1, fila: fila - 1, columnaActual: columna, filaActual: fila })
                    }
                }
                else {
                    columna == 1 ? setMovimientoNegra({ columnaPositiva: columna + 1, fila: fila - 1, columnaActual: columna, filaActual: fila, columnaNegativa: 9 }) : setMovimientoNegra({ columnaNegativa: columna - 1, fila: fila - 1, columnaActual: columna, filaActual: fila, columnaPositiva: 9 })
                }
            }
            else {
                
                if (blancas[fila - 2][columna] && columna - 1 > 0 && columna - 1 < 9 && fila - 3 > -1 && !blancas[fila - 3][columna + 1]) {

                    if (blancas[fila - 2][columna - 2]) {
                        setMovimientoNegra({ columnaPositiva: columna + 2, columnaNegativa: columna - 2, fila: fila - 2, columnaActual: columna, filaActual: fila })
                    }
                    else {
                        setMovimientoNegra({ columnaPositiva: columna + 2, columnaNegativa: 9, fila: fila - 2, columnaActual: columna, filaActual: fila })
                    }
                }
                else if (blancas[fila - 2][columna - 2] && fila - 3 > -1 && columna - 1 > 0 && columna + 1 < 9 && !blancas[fila - 3][columna - 3]) {
                    if (columna - 3 > 0) {
                        if (!blancas[fila - 3][columna - 3]) {
                            if (blancas[fila - 2][columna] && !blancas[fila - 3][columna - 3]) {
                                setMovimientoNegra({ columnaPositiva: columna + 2, columnaNegativa: columna - 2, fila: fila - 2, columnaActual: columna, filaActual: fila })
                            }
                            else {
                                setMovimientoNegra({ columnaPositiva: 9, columnaNegativa: columna - 2, fila: fila - 2, columnaActual: columna, filaActual: fila })
                            }
                        }
                    }
                    else {
                        setMovimientoNegra({ columnaPositiva: columna + 1, columnaNegativa: columna - 1, fila: fila - 1, columnaActual: columna, filaActual: fila })
                    }
                }
                else {
                    setMovimientoNegra({ columnaPositiva: columna + 1, columnaNegativa: columna - 1, fila: fila - 1, columnaActual: columna, filaActual: fila })
                }
            }
        }
        else if (color == "marron" && color == turno) {

            if (columna == 1 || columna == 8) {

                columna == 1 ? setMovimientoBlanca({ columnaPositiva: columna + 1, fila: fila + 1, columnaActual: columna, filaActual: fila, columnaNegativa: 9 }) : setMovimientoBlanca({ columnaNegativa: columna - 1, fila: fila + 1, columnaActual: columna, filaActual: fila, columnaPositiva: 9 })
            }
            else {
                if (negras[fila][columna] && columna - 1 > 0 && columna + 1 < 9 && fila + 1 < 9 && !negras[fila + 1][columna + 1]) {

                    if (negras[fila][columna - 1]) {
                        setMovimientoBlanca({ columnaPositiva: columna + 2, columnaNegativa: columna - 2, fila: fila + 2, columnaActual: columna, filaActual: fila })
                    }
                    else {
                        setMovimientoBlanca({ columnaPositiva: columna + 2, columnaNegativa: 9, fila: fila + 2, columnaActual: columna, filaActual: fila })
                    }
                }
                else if (negras[fila][columna - 2] && fila + 1 < 9 && columna - 1 > 0 && columna + 1 < 9 && !negras[fila + 1][columna - 3]) {
                    if (columna - 3 > 0) {
                        if (!negras[fila + 1][columna - 3]) {
                            if (negras[fila][columna] && !negras[fila + 1][columna - 3]) {
                                setMovimientoBlanca({ columnaPositiva: columna + 2, columnaNegativa: columna - 2, fila: fila + 2, columnaActual: columna, filaActual: fila })
                            }
                            else {
                                setMovimientoBlanca({ columnaPositiva: 9, columnaNegativa: columna - 2, fila: fila + 2, columnaActual: columna, filaActual: fila })
                            }
                        }
                    }
                    else {
                        setMovimientoBlanca({ columnaPositiva: columna + 1, columnaNegativa: columna - 1, fila: fila + 1, columnaActual: columna, filaActual: fila })
                    }
                }
                else {
                    setMovimientoBlanca({ columnaPositiva: columna + 1, columnaNegativa: columna - 1, fila: fila + 1, columnaActual: columna, filaActual: fila })
                }
            }
        }
        setDecisionMovimiento(false)
        return turno == "negra" ? movimientoNegra : movimientoBlanca;
    }
    return (
        <FichaContext.Provider value={{ posibleMovimiento, filasCheckers, movimientoNegra, setMovimientoNegra, negras, blancas, setNegras, decisionMovimiento, setDecisionMovimiento, posiColumna, setPosiColumna, positivo, setPositivo, setNegativo, negativo, setBlancas, turno, setTurno, movimientoBlanca, setMovimientoBlanca }}>
            {children}
        </FichaContext.Provider>
    )
}

export default FichasProvider;
