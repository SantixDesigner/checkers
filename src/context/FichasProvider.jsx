import { useState } from "react";
import FichaContext from "./FichaContext";

const FichasProvider = ({ children }) => {
    const [movimientoNegra, setMovimientoNegra] = useState([0])
    const [posiColumna, setPosiColumna] = useState(-1)
    const [posiColumnaDamaNegra, setPosiColumnaDamaNegra] = useState(-1)
    const [posiColumnaDamaBlanca, setPosiColumnaDamaBlanca] = useState(-1)
    const [movimientoBlanca, setMovimientoBlanca] = useState([0])
    const [decisionMovimiento, setDecisionMovimiento] = useState(false)
    const [movimientoDamaNegra, setMovimientoDamaNegra] = useState([0])
    const [movimientoDamaBlanca, setMovimientoDamaBlanca] = useState([0])
    const [positivo, setPositivo] = useState(false)
    const [negativo, setNegativo] = useState(false)
    const [eventZ, setEvent] = useState()
    const [positivoAtras, setPositivoAtras] = useState(false)
    const [positivoAdelante, setPositivoAdelante] = useState(false)
    const [negativoAtras, setNegativoAtras] = useState(false)
    const [negativoAdelante, setNegativoAdelante] = useState(false)
    const [turno, setTurno] = useState("esperando turno")
    const [movimientoDeComer, setMovimientoDeComer] = useState(false)
    const [fichaPrioritaria, setFichaPrioritaria] = useState(false)
    const [columnaPrioritaria, setColumnaPrioritaria] = useState(0)
    const [filaPrioritaria, setFilaPrioritaria] = useState(0)
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
    const [negrasDamas, setNegrasDamas] = useState([
        [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
        [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
        [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
        [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
        [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
        [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
        [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
        [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]
    ])
    const [blancasDamas, setBlancasDama] = useState([
        [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
        [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
        [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
        [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
        [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
        [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
        [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
        [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]
    ])
    const posibleMovimiento = (fila, columna, color, isDamaNegra, isDamaBlanca, event) => {
        setEvent(event)
        if (!isDamaNegra && color == "negra" && color == turno) {
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
                if (blancas[fila - 2][columna] && columna - 1 > 0 && columna + 2 < 9 && fila - 3 > -1 && !blancas[fila - 3][columna + 1]) {
                    if (blancas[fila - 2][columna - 2]) {
                        setMovimientoNegra({ columnaPositiva: columna + 2, columnaNegativa: columna - 2, fila: fila - 2, columnaActual: columna, filaActual: fila })
                    }
                    else {
                        setMovimientoNegra({ columnaPositiva: columna + 2, columnaNegativa: 9, fila: fila - 2, columnaActual: columna, filaActual: fila })
                    }
                }
                else if (blancas[fila - 2][columna - 2] && fila - 3 > -1 && columna - 1 > 0 && columna + 1 < 9 && !blancas[fila - 3][columna - 3]) {
                    if (columna - 3 > -1) {
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
        else if (color == "marron" && color == turno && !isDamaBlanca) {
            console.log(movimientoDamaBlanca)
            if (columna == 1 || columna == 8) {
                if (negras[fila][columna] || negrasDamas[fila][columna] && fila + 2 < 9) {
                    if (!negras[fila + 1][columna + 1] && !negrasDamas[fila + 1][columna + 1]) {
                        if ((negras[fila][columna - 2] || negrasDamas[fila][columna - 2]) && (!negras[fila + 1][columna - 3] && !negrasDamas[fila + 1][columna - 3])) {
                            setMovimientoBlanca({ columnaPositiva: columna + 2, columnaNegativa: columna - 2, fila: fila + 2, columnaActual: columna, filaActual: fila })
                        }
                        else {
                            setMovimientoBlanca({ columnaPositiva: columna + 2, columnaNegativa: 9, fila: fila + 2, columnaActual: columna, filaActual: fila })
                        }
                    }
                    else {
                        setMovimientoBlanca({ columnaPositiva: columna + 1, columnaNegativa: columna - 1, fila: fila + 1, columnaActual: columna, filaActual: fila })
                    }
                }
                else if ((negras[fila][columna - 2] || negrasDamas[fila][columna - 2]) && fila + 2 < 9) {

                    if (!negras[fila + 1][columna - 3] || !negrasDamas[fila + 1][columna - 3]) {
                        if ((negras[fila][columna] || negrasDamas[fila][columna]) && (!negras[fila + 1][columna - 3] && !negrasDamas[fila + 1][columna - 3])) {
                            setMovimientoBlanca({ columnaPositiva: columna + 2, columnaNegativa: columna - 2, fila: fila + 2, columnaActual: columna, filaActual: fila })
                        }
                        else {
                            setMovimientoBlanca({ columnaPositiva: 9, columnaNegativa: columna - 2, fila: fila + 2, columnaActual: columna, filaActual: fila })
                        }
                    }
                }
                else {

                    columna == 1 ? setMovimientoBlanca({ columnaPositiva: columna + 1, fila: fila + 1, columnaActual: columna, filaActual: fila, columnaNegativa: 9 }) : setMovimientoBlanca({ columnaNegativa: columna - 1, fila: fila + 1, columnaActual: columna, filaActual: fila, columnaPositiva: 9 })
                }
            }
            else {

                if ((negras[fila][columna] || negrasDamas[fila][columna]) && columna - 2 > -1 && columna + 1 < 9 && fila + 1 < 8 && (!negras[fila + 1][columna + 1] && !negrasDamas[fila + 1][columna + 1])) {
                    console.log("hola")
                    if ((negras[fila][columna - 2] || negrasDamas[fila][columna - 2]) && (!negras[fila + 1][columna - 3] && !negrasDamas[fila + 1][columna - 3])) {
                        setMovimientoBlanca({ columnaPositiva: columna + 2, columnaNegativa: columna - 2, fila: fila + 2, columnaActual: columna, filaActual: fila })
                    }
                    else if (negras[fila][columna - 1] || negrasDamas[fila][columna - 1]) {
                        setMovimientoBlanca({ columnaPositiva: columna + 2, columnaNegativa: columna - 2, fila: fila + 2, columnaActual: columna, filaActual: fila })
                    }
                    else {
                        setMovimientoBlanca({ columnaPositiva: columna + 2, columnaNegativa: 9, fila: fila + 2, columnaActual: columna, filaActual: fila })
                    }
                }
                else if ((negras[fila][columna - 2] || negrasDamas[fila][columna - 2]) && fila + 1 < 8 && columna - 2 > -1 && columna + 1 < 9 && (!negras[fila + 1][columna - 3] && !negrasDamas[fila + 1][columna - 3])) {
                    if (columna - 3 > -1) {
                        if (!negras[fila + 1][columna - 3] && !negrasDamas[fila + 1][columna - 3]) {
                            if ((negras[fila][columna] || negrasDamas[fila][columna]) && (!negras[fila + 1][columna - 3] && !negrasDamas[fila + 1][columna - 3])) {
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
        else if (color == "negra" && color == turno && isDamaNegra) {
            if ((columna - 2 == 0 || columna == 1) && (columna + 2 < 9 || columna == 8)) {
                if (fila - 2 > -1 && blancas[fila - 2][columna]) {
                    setMovimientoDamaNegra({ columnaPositiva: columna + 1, columnaNegativa: columna - 1, columnaPositivaAdelante: columna + 2, columnaNegativaAdelante: columna - 9, columnaPositivaAtras: columna + 9, columnaNegativaAtras: columna - 9, fila: fila - 1, filaActual: fila, filaAtras: fila + 1, filaAdelante: fila - 2, columnaActual: columna })
                }
                else if (blancas[fila][columna]) {

                    setMovimientoDamaNegra({ columnaPositiva: columna + 1, columnaNegativa: columna - 1, columnaPositivaAdelante: columna + 1, columnaNegativaAdelante: columna - 9, columnaPositivaAtras: columna + 2, columnaNegativaAtras: columna - 9, fila: fila - 1, filaActual: fila, filaAtras: fila + 2, filaAdelante: fila - 1, columnaActual: columna })
                }
                else {
                    console.log("hola")
                    setMovimientoDamaNegra({ columnaPositiva: columna + 1, columnaNegativa: columna - 1, columnaPositivaAdelante: columna + 1, columnaNegativaAdelante: columna - 1, columnaPositivaAtras: columna + 1, columnaNegativaAtras: columna - 1, fila: fila - 1, filaActual: fila, filaAtras: fila + 1, filaAdelante: fila - 1, columnaActual: columna })
                }
            }
            else if (blancas[fila][columna] && fila + 1 < 9 && columna < 9 && columna - 2 > 0 && !blancas[fila + 1][columna + 1] && !negras[fila + 1][columna + 1]) {
                if (blancas[fila][columna - 2] && !blancas[fila + 1][columna - 3] && !negras[fila + 1][columna - 3]) {
                    if (fila - 3 > -1 && blancas[fila - 2][columna] && !blancas[fila - 3][columna + 1]) {
                        if (blancas[fila - 2][columna - 2] && !blancas[fila - 3][columna - 3]) {
                            setMovimientoDamaNegra({ columnaPositiva: columna + 1, columnaNegativa: columna - 1, columnaPositivaAdelante: columna + 2, columnaNegativaAdelante: columna - 2, columnaPositivaAtras: columna + 2, columnaNegativaAtras: columna - 2, fila: fila - 1, filaActual: fila, filaAtras: fila + 2, filaAdelante: fila - 2, columnaActual: columna })
                        } else {
                            setMovimientoDamaNegra({ columnaPositiva: columna + 1, columnaNegativa: columna - 1, columnaPositivaAdelante: columna + 2, columnaNegativaAdelante: columna - 9, columnaPositivaAtras: columna + 2, columnaNegativaAtras: columna - 2, fila: fila - 1, filaActual: fila, filaAtras: fila + 2, filaAdelante: fila - 2, columnaActual: columna })
                        }
                    }
                    else {
                        setMovimientoDamaNegra({ columnaPositiva: columna + 1, columnaNegativa: columna - 1, columnaPositivaAdelante: columna + 1, columnaNegativaAdelante: columna - 1, columnaPositivaAtras: columna + 2, columnaNegativaAtras: columna - 2, fila: fila - 1, filaActual: fila, filaAtras: fila + 2, filaAdelante: fila - 1, columnaActual: columna })
                    }
                }
                else {

                    if (fila - 2 > 0 && blancas[fila - 2][columna - 2] && !blancas[fila - 3][columna - 3]) {

                        setMovimientoDamaNegra({ columnaPositiva: columna + 1, columnaNegativa: columna - 1, columnaPositivaAdelante: columna + 9, columnaNegativaAdelante: columna - 2, columnaPositivaAtras: columna + 2, columnaNegativaAtras: columna - 9, fila: fila - 1, filaActual: fila, filaAtras: fila + 2, filaAdelante: fila - 2, columnaActual: columna })
                    }
                    else {
                        setMovimientoDamaNegra({ columnaPositiva: columna + 1, columnaNegativa: columna - 1, columnaPositivaAdelante: columna + 1, columnaNegativaAdelante: columna - 1, columnaPositivaAtras: columna + 2, columnaNegativaAtras: columna - 9, fila: fila - 1, filaActual: fila, filaAtras: fila + 2, filaAdelante: fila - 9, columnaActual: columna })
                    }
                }
            }
            else if (fila < 9 && columna < 9 && columna - 2 > 0 && blancas[fila][columna - 2] && !blancas[fila + 1][columna - 3] && fila > -1) {
                if (blancas[fila][columna] && !blancas[fila + 1][columna - 3]) {
                    setMovimientoDamaNegra({ columnaPositiva: columna + 1, columnaNegativa: columna - 1, columnaPositivaAdelante: columna + 1, columnaNegativaAdelante: columna - 1, columnaPositivaAtras: columna + 2, columnaNegativaAtras: columna - 2, fila: fila - 1, filaActual: fila, filaAtras: fila + 2, filaAdelante: fila - 9, columnaActual: columna })
                }
                if (fila - 2 > 0 && blancas[fila - 2][columna] && !blancas[fila - 3][columna + 1]) {
                    console.log(blancas)
                    if (blancas[fila - 2][columna - 2] && !blancas[fila - 3][columna - 3]) {
                        setMovimientoDamaNegra({ columnaPositiva: columna + 1, columnaNegativa: columna - 1, columnaPositivaAdelante: columna + 2, columnaNegativaAdelante: columna - 2, columnaPositivaAtras: columna + 2, columnaNegativaAtras: columna - 2, fila: fila - 1, filaActual: fila, filaAtras: fila + 2, filaAdelante: fila - 2, columnaActual: columna })
                    }
                    else {
                        setMovimientoDamaNegra({ columnaPositiva: columna + 1, columnaNegativa: columna - 1, columnaPositivaAdelante: columna + 2, columnaNegativaAdelante: columna - 9, columnaPositivaAtras: columna + 2, columnaNegativaAtras: columna - 2, fila: fila - 1, filaActual: fila, filaAtras: fila + 2, filaAdelante: fila - 2, columnaActual: columna })
                    }
                }
                if (fila - 2 > 0 && blancas[fila - 2][columna - 2] && !blancas[fila - 3][columna - 3]) {
                    setMovimientoDamaNegra({ columnaPositiva: columna + 1, columnaNegativa: columna - 1, columnaPositivaAdelante: columna + 2, columnaNegativaAdelante: columna - 2, columnaPositivaAtras: columna + 9, columnaNegativaAtras: columna - 2, fila: fila - 1, filaActual: fila, filaAtras: fila + 2, filaAdelante: fila - 2, columnaActual: columna })
                }
                else {
                    setMovimientoDamaNegra({ columnaPositiva: columna + 1, columnaNegativa: columna - 1, columnaPositivaAdelante: columna + 1, columnaNegativaAdelante: columna - 1, columnaPositivaAtras: columna + 9, columnaNegativaAtras: columna - 2, fila: fila - 1, filaActual: fila, filaAtras: fila + 2, filaAdelante: fila - 9, columnaActual: columna })
                }
            }
            else if (fila >= 1 && columna < 9 && columna - 2 > 0 && fila - 2 > 0 && blancas[fila - 2][columna] && !blancas[fila - 3][columna + 1]) {
                if (blancas[fila - 2][columna - 2] && !blancas[fila - 3][columna - 3]) {
                    if (blancas[fila][columna] && !blancas[fila + 1][columna + 1]) {
                        if (blancas[fila][columna - 2] && !blancas[fila + 1][columna - 3]) {
                            setMovimientoDamaNegra({ columnaPositiva: columna + 1, columnaNegativa: columna - 1, columnaPositivaAdelante: columna + 2, columnaNegativaAdelante: columna - 2, columnaPositivaAtras: columna + 2, columnaNegativaAtras: columna - 2, fila: fila - 1, filaActual: fila, filaAtras: fila + 2, filaAdelante: fila - 2, columnaActual: columna })
                        }
                        else {
                            setMovimientoDamaNegra({ columnaPositiva: columna + 1, columnaNegativa: columna - 1, columnaPositivaAdelante: columna + 2, columnaNegativaAdelante: columna - 2, columnaPositivaAtras: columna + 9, columnaNegativaAtras: columna - 2, fila: fila - 1, filaActual: fila, filaAtras: fila + 2, filaAdelante: fila - 2, columnaActual: columna })
                        }
                    }
                    else {
                        setMovimientoDamaNegra({ columnaPositiva: columna + 1, columnaNegativa: columna - 1, columnaPositivaAdelante: columna + 2, columnaNegativaAdelante: columna - 2, columnaPositivaAtras: columna + 2, columnaNegativaAtras: columna - 2, fila: fila - 1, filaActual: fila, filaAtras: fila + 9, filaAdelante: fila - 2, columnaActual: columna })
                    }
                } else {
                    if (columna + 1 == 8 || columna - 1 == 0) {
                        console.log("hola")
                        setMovimientoDamaNegra({ columnaPositiva: columna + 1, columnaNegativa: columna - 1, columnaPositivaAdelante: columna + 1, columnaNegativaAdelante: columna - 1, columnaPositivaAtras: columna + 1, columnaNegativaAtras: columna - 1, fila: fila - 1, filaActual: fila, filaAtras: fila + 1, filaAdelante: fila - 1, columnaActual: columna })
                    }
                    else {
                        setMovimientoDamaNegra({ columnaPositiva: columna + 1, columnaNegativa: columna - 1, columnaPositivaAdelante: columna + 2, columnaNegativaAdelante: columna - 9, columnaPositivaAtras: columna + 2, columnaNegativaAtras: columna - 2, fila: fila - 1, filaActual: fila, filaAtras: fila + 9, filaAdelante: fila - 2, columnaActual: columna })
                    }
                }
            }
            else if (fila >= 1 && columna < 9 && columna - 2 > 0 && fila - 2 > 0 && blancas[fila - 2][columna - 2] && !blancas[fila - 3][columna - 3]) {
                if (blancas[fila - 2][columna] && !blancas[fila - 3][columna + 1]) {
                    if (blancas[fila][columna] && !blancas[fila + 1][columna + 1]) {
                        if (blancas[fila][columna - 2] && !blancas[fila + 1][columna - 3]) {
                            setMovimientoDamaNegra({ columnaPositiva: columna + 1, columnaNegativa: columna - 1, columnaPositivaAdelante: columna + 2, columnaNegativaAdelante: columna - 2, columnaPositivaAtras: columna + 2, columnaNegativaAtras: columna - 2, fila: fila - 1, filaActual: fila, filaAtras: fila + 2, filaAdelante: fila - 2, columnaActual: columna })
                        }
                        else {
                            setMovimientoDamaNegra({ columnaPositiva: columna + 1, columnaNegativa: columna - 1, columnaPositivaAdelante: columna + 2, columnaNegativaAdelante: columna - 2, columnaPositivaAtras: columna + 2, columnaNegativaAtras: columna - 9, fila: fila - 1, filaActual: fila, filaAtras: fila + 2, filaAdelante: fila - 2, columnaActual: columna })
                        }
                    }
                    else {
                        setMovimientoDamaNegra({ columnaPositiva: columna + 1, columnaNegativa: columna - 1, columnaPositivaAdelante: columna + 2, columnaNegativaAdelante: columna - 2, columnaPositivaAtras: columna + 2, columnaNegativaAtras: columna - 2, fila: fila - 1, filaActual: fila, filaAtras: fila + 9, filaAdelante: fila - 2, columnaActual: columna })
                    }
                }
                else {
                    setMovimientoDamaNegra({ columnaPositiva: columna + 1, columnaNegativa: columna - 1, columnaPositivaAdelante: columna + 9, columnaNegativaAdelante: columna - 2, columnaPositivaAtras: columna + 9, columnaNegativaAtras: columna - 2, fila: fila - 1, filaActual: fila, filaAtras: fila + 9, filaAdelante: fila - 2, columnaActual: columna })
                }
            }
            else {
                setMovimientoDamaNegra({ columnaPositiva: columna + 1, columnaNegativa: columna - 1, columnaPositivaAdelante: columna + 1, columnaNegativaAdelante: columna - 1, columnaPositivaAtras: columna + 1, columnaNegativaAtras: columna - 1, fila: fila - 1, filaActual: fila, filaAtras: fila + 1, filaAdelante: fila - 1, columnaActual: columna })
            }
            console.log(movimientoDamaNegra)
        }
        else if (color == "marron" && color == turno && isDamaBlanca) {
            if ((columna - 2 == 0 || columna == 1) && (columna + 2 < 9 || columna == 8)) {
                console.log("hola")
                if (fila - 2 > -1 && negras[fila - 2][columna]) {
                    setMovimientoDamaBlanca({ columnaPositiva: columna + 1, columnaNegativa: columna - 1, columnaPositivaAdelante: columna + 2, columnaNegativaAdelante: columna - 9, columnaPositivaAtras: columna + 9, columnaNegativaAtras: columna - 9, fila: fila - 1, filaActual: fila, filaAtras: fila + 1, filaAdelante: fila - 2, columnaActual: columna })
                }
                else if (negras[fila][columna]) {

                    setMovimientoDamaBlanca({ columnaPositiva: columna + 1, columnaNegativa: columna - 1, columnaPositivaAdelante: columna + 1, columnaNegativaAdelante: columna - 9, columnaPositivaAtras: columna + 2, columnaNegativaAtras: columna - 9, fila: fila - 1, filaActual: fila, filaAtras: fila + 2, filaAdelante: fila - 1, columnaActual: columna })
                }
                else {
                    console.log("hola")
                    setMovimientoDamaBlanca({ columnaPositiva: columna + 1, columnaNegativa: columna - 1, columnaPositivaAdelante: columna + 1, columnaNegativaAdelante: columna - 1, columnaPositivaAtras: columna + 1, columnaNegativaAtras: columna - 1, fila: fila - 1, filaActual: fila, filaAtras: fila + 1, filaAdelante: fila - 1, columnaActual: columna })
                }
            }
            else if (fila + 1 < 9 && negras[fila][columna] && columna + 1 < 9 && columna - 2 > 0 && !negras[fila + 1][columna + 1] && !blancas[fila + 1][columna + 1]) {
                if (negras[fila][columna - 2] && !negras[fila + 1][columna - 3] && !blancas[fila + 1][columna - 3]) {
                    if (fila - 3 > -1 && negras[fila - 2][columna] && !negras[fila - 3][columna + 1]) {
                        if (negras[fila - 2][columna - 2] && !negras[fila - 3][columna - 3]) {
                            setMovimientoDamaBlanca({ columnaPositiva: columna + 1, columnaNegativa: columna - 1, columnaPositivaAdelante: columna + 2, columnaNegativaAdelante: columna - 2, columnaPositivaAtras: columna + 2, columnaNegativaAtras: columna - 2, fila: fila - 1, filaActual: fila, filaAtras: fila + 2, filaAdelante: fila - 2, columnaActual: columna })
                        } else {
                            setMovimientoDamaBlanca({ columnaPositiva: columna + 1, columnaNegativa: columna - 1, columnaPositivaAdelante: columna + 2, columnaNegativaAdelante: columna - 9, columnaPositivaAtras: columna + 2, columnaNegativaAtras: columna - 2, fila: fila - 1, filaActual: fila, filaAtras: fila + 2, filaAdelante: fila - 2, columnaActual: columna })
                        }
                    }
                    else {
                        setMovimientoDamaBlanca({ columnaPositiva: columna + 1, columnaNegativa: columna - 1, columnaPositivaAdelante: columna + 1, columnaNegativaAdelante: columna - 1, columnaPositivaAtras: columna + 2, columnaNegativaAtras: columna - 2, fila: fila - 1, filaActual: fila, filaAtras: fila + 2, filaAdelante: fila - 1, columnaActual: columna })
                    }
                }
                else {

                    if (fila - 2 > 0 && negras[fila - 2][columna - 2] && !negras[fila - 3][columna - 3]) {

                        setMovimientoDamaBlanca({ columnaPositiva: columna + 1, columnaNegativa: columna - 1, columnaPositivaAdelante: columna + 9, columnaNegativaAdelante: columna - 2, columnaPositivaAtras: columna + 2, columnaNegativaAtras: columna - 9, fila: fila - 1, filaActual: fila, filaAtras: fila + 2, filaAdelante: fila - 2, columnaActual: columna })
                    }
                    else {
                        setMovimientoDamaBlanca({ columnaPositiva: columna + 1, columnaNegativa: columna - 1, columnaPositivaAdelante: columna + 1, columnaNegativaAdelante: columna - 1, columnaPositivaAtras: columna + 2, columnaNegativaAtras: columna - 9, fila: fila - 1, filaActual: fila, filaAtras: fila + 2, filaAdelante: fila - 9, columnaActual: columna })
                    }
                }
            }
            else if (fila+1 < 9 && columna+1 < 9 && columna - 2 > 0 && negras[fila][columna - 2] && !negras[fila + 1][columna - 3] && fila > -1) {
                if (negras[fila][columna] && !negras[fila + 1][columna - 3]) {
                    setMovimientoDamaBlanca({ columnaPositiva: columna + 1, columnaNegativa: columna - 1, columnaPositivaAdelante: columna + 1, columnaNegativaAdelante: columna - 1, columnaPositivaAtras: columna + 2, columnaNegativaAtras: columna - 2, fila: fila - 1, filaActual: fila, filaAtras: fila + 2, filaAdelante: fila - 9, columnaActual: columna })
                }
                if (fila - 2 > 0 && negras[fila - 2][columna] && !negras[fila - 3][columna + 1]) {
                    console.log(negras)
                    if (negras[fila - 2][columna - 2] && !negras[fila - 3][columna - 3]) {
                        setMovimientoDamaBlanca({ columnaPositiva: columna + 1, columnaNegativa: columna - 1, columnaPositivaAdelante: columna + 2, columnaNegativaAdelante: columna - 2, columnaPositivaAtras: columna + 2, columnaNegativaAtras: columna - 2, fila: fila - 1, filaActual: fila, filaAtras: fila + 2, filaAdelante: fila - 2, columnaActual: columna })
                    }
                    else {
                        setMovimientoDamaBlanca({ columnaPositiva: columna + 1, columnaNegativa: columna - 1, columnaPositivaAdelante: columna + 2, columnaNegativaAdelante: columna - 9, columnaPositivaAtras: columna + 2, columnaNegativaAtras: columna - 2, fila: fila - 1, filaActual: fila, filaAtras: fila + 2, filaAdelante: fila - 2, columnaActual: columna })
                    }
                }
                if (fila - 2 > 0 && negras[fila - 2][columna - 2] && !negras[fila - 3][columna - 3]) {
                    setMovimientoDamaBlanca({ columnaPositiva: columna + 1, columnaNegativa: columna - 1, columnaPositivaAdelante: columna + 2, columnaNegativaAdelante: columna - 2, columnaPositivaAtras: columna + 9, columnaNegativaAtras: columna - 2, fila: fila - 1, filaActual: fila, filaAtras: fila + 2, filaAdelante: fila - 2, columnaActual: columna })
                }
                else {
                    setMovimientoDamaBlanca({ columnaPositiva: columna + 1, columnaNegativa: columna - 1, columnaPositivaAdelante: columna + 1, columnaNegativaAdelante: columna - 1, columnaPositivaAtras: columna + 9, columnaNegativaAtras: columna - 2, fila: fila - 1, filaActual: fila, filaAtras: fila + 2, filaAdelante: fila - 9, columnaActual: columna })
                }
            }
            else if (fila >= 1 && columna < 9 && columna - 2 > 0 && fila - 2 > 0 && negras[fila - 2][columna] && !negras[fila - 3][columna + 1]) {
                if (negras[fila - 2][columna - 2] && !negras[fila - 3][columna - 3]) {
                    if (negras[fila][columna] && !negras[fila + 1][columna + 1]) {
                        if (negras[fila][columna - 2] && !negras[fila + 1][columna - 3]) {
                            setMovimientoDamaBlanca({ columnaPositiva: columna + 1, columnaNegativa: columna - 1, columnaPositivaAdelante: columna + 2, columnaNegativaAdelante: columna - 2, columnaPositivaAtras: columna + 2, columnaNegativaAtras: columna - 2, fila: fila - 1, filaActual: fila, filaAtras: fila + 2, filaAdelante: fila - 2, columnaActual: columna })
                        }
                        else {
                            setMovimientoDamaBlanca({ columnaPositiva: columna + 1, columnaNegativa: columna - 1, columnaPositivaAdelante: columna + 2, columnaNegativaAdelante: columna - 2, columnaPositivaAtras: columna + 9, columnaNegativaAtras: columna - 2, fila: fila - 1, filaActual: fila, filaAtras: fila + 2, filaAdelante: fila - 2, columnaActual: columna })
                        }
                    }
                    else {
                        setMovimientoDamaBlanca({ columnaPositiva: columna + 1, columnaNegativa: columna - 1, columnaPositivaAdelante: columna + 2, columnaNegativaAdelante: columna - 2, columnaPositivaAtras: columna + 2, columnaNegativaAtras: columna - 2, fila: fila - 1, filaActual: fila, filaAtras: fila + 9, filaAdelante: fila - 2, columnaActual: columna })
                    }
                } else {
                    if (columna + 1 == 8 || columna - 1 == 0) {
                        console.log("hola")
                        setMovimientoDamaBlanca({ columnaPositiva: columna + 1, columnaNegativa: columna - 1, columnaPositivaAdelante: columna + 1, columnaNegativaAdelante: columna - 1, columnaPositivaAtras: columna + 1, columnaNegativaAtras: columna - 1, fila: fila - 1, filaActual: fila, filaAtras: fila + 1, filaAdelante: fila - 1, columnaActual: columna })
                    }
                    else {
                        setMovimientoDamaBlanca({ columnaPositiva: columna + 1, columnaNegativa: columna - 1, columnaPositivaAdelante: columna + 2, columnaNegativaAdelante: columna - 9, columnaPositivaAtras: columna + 2, columnaNegativaAtras: columna - 2, fila: fila - 1, filaActual: fila, filaAtras: fila + 9, filaAdelante: fila - 2, columnaActual: columna })
                    }
                }
            }
            else if (fila >= 1 && columna < 9 && columna - 2 > 0 && fila - 2 > 0 && negras[fila - 2][columna - 2] && !negras[fila - 3][columna - 3]) {
                if (negras[fila - 2][columna] && !negras[fila - 3][columna + 1]) {
                    if (negras[fila][columna] && !negras[fila + 1][columna + 1]) {
                        if (negras[fila][columna - 2] && !negras[fila + 1][columna - 3]) {
                            setMovimientoDamaBlanca({ columnaPositiva: columna + 1, columnaNegativa: columna - 1, columnaPositivaAdelante: columna + 2, columnaNegativaAdelante: columna - 2, columnaPositivaAtras: columna + 2, columnaNegativaAtras: columna - 2, fila: fila - 1, filaActual: fila, filaAtras: fila + 2, filaAdelante: fila - 2, columnaActual: columna })
                        }
                        else {
                            setMovimientoDamaBlanca({ columnaPositiva: columna + 1, columnaNegativa: columna - 1, columnaPositivaAdelante: columna + 2, columnaNegativaAdelante: columna - 2, columnaPositivaAtras: columna + 2, columnaNegativaAtras: columna - 9, fila: fila - 1, filaActual: fila, filaAtras: fila + 2, filaAdelante: fila - 2, columnaActual: columna })
                        }
                    }
                    else {
                        setMovimientoDamaBlanca({ columnaPositiva: columna + 1, columnaNegativa: columna - 1, columnaPositivaAdelante: columna + 2, columnaNegativaAdelante: columna - 2, columnaPositivaAtras: columna + 2, columnaNegativaAtras: columna - 2, fila: fila - 1, filaActual: fila, filaAtras: fila + 9, filaAdelante: fila - 2, columnaActual: columna })
                    }
                }
                else {
                    setMovimientoDamaBlanca({ columnaPositiva: columna + 1, columnaNegativa: columna - 1, columnaPositivaAdelante: columna + 9, columnaNegativaAdelante: columna - 2, columnaPositivaAtras: columna + 9, columnaNegativaAtras: columna - 2, fila: fila - 1, filaActual: fila, filaAtras: fila + 9, filaAdelante: fila - 2, columnaActual: columna })
                }
            }
            else {
                console.log(blancasDamas)
                setMovimientoDamaBlanca({ columnaPositiva: columna + 1, columnaNegativa: columna - 1, columnaPositivaAdelante: columna + 1, columnaNegativaAdelante: columna - 1, columnaPositivaAtras: columna + 1, columnaNegativaAtras: columna - 1, fila: fila - 1, filaActual: fila, filaAtras: fila + 1, filaAdelante: fila - 1, columnaActual: columna })
                console.log(movimientoDamaBlanca)
            }
        }
        setDecisionMovimiento(false)
        if (turno == "negra") {
            if (isDamaNegra) {
                return movimientoDamaNegra
            }
            else {
                return movimientoNegra
            }
        }
        else if (turno == "marron") {
            if (isDamaBlanca) {
                return movimientoDamaBlanca
            }
            else {
                return movimientoBlanca
            }
        }
    }
    return (
        <FichaContext.Provider value={{ posibleMovimiento, filasCheckers, movimientoNegra, setMovimientoNegra, negras, blancas, setNegras, decisionMovimiento, setDecisionMovimiento, posiColumna, setPosiColumna, positivo, setPositivo, setNegativo, negativo, setBlancas, turno, setTurno, movimientoBlanca, setMovimientoBlanca, setNegrasDamas, negrasDamas, fichaPrioritaria, setFichaPrioritaria, columnaPrioritaria, setColumnaPrioritaria, setFilaPrioritaria, filaPrioritaria, positivoAtras, positivoAdelante, setPositivoAdelante, setPositivoAtras, negativoAdelante, setNegativoAdelante, setNegativoAtras, negativoAtras, movimientoDamaNegra, setMovimientoDamaNegra, eventZ, setPosiColumnaDamaNegra, posiColumnaDamaNegra, movimientoDeComer, setMovimientoDeComer, blancasDamas, setBlancasDama, setPosiColumnaDamaBlanca, posiColumnaDamaBlanca, movimientoDamaBlanca, setMovimientoDamaBlanca }}>
            {children}
        </FichaContext.Provider>
    )
}

export default FichasProvider;
