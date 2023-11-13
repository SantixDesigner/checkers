import { useState } from "react";
import FichaContext from "./FichaContext";

const FichasProvider = ({ children }) => {
    const [movimiento, setMovimiento] = useState([0])
    const [posiColumna, setPosiColumna] = useState(-1)
    const [decisionMovimiento, setDecisionMovimiento] = useState(false)
    const [positivo, setPositivo] = useState(false)
    const [negativo, setNegativo] = useState(false)
    const [blancas, setBlancas] = useState([
        [undefined,2,undefined, 4,undefined, 6,undefined, 8],
        [1,undefined, 3,undefined, 5,undefined, 7, undefined,],
        [undefined,2,undefined, 4,undefined, 6,undefined, 8],
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

        if (color == "negra") {
            if (columna == 1 || columna == 8) {
                columna == 1 ? setMovimiento({ columnaPositiva: columna + 1, fila: fila - 1, columnaActual: columna, filaActual: fila }) : setMovimiento({ columnaNegativa: columna - 1, fila: fila - 1, columnaActual: columna, filaActual: fila })
            }
            else {
                setMovimiento({ columnaPositiva: columna + 1, columnaNegativa: columna - 1, fila: fila - 1, columnaActual: columna, filaActual: fila })
            }
        }
        else {
            if (columna == 1 || columna == 8) {
                columna == 1 ? setMovimiento({ columnaPositiva: columna + 1, fila: fila + 1, columnaActual: columna, filaActual: fila }) : setMovimiento({ columnaNegativa: columna - 1, fila: fila + 1, columnaActual: columna, filaActual: fila })
            }
            else {
                setMovimiento({ columnaPositiva: columna + 1, columnaNegativa: columna - 1, fila: fila + 1, columnaActual: columna, filaActual: fila })
            }
        }
        setDecisionMovimiento(false)
        return movimiento;
    }

    return (
        <FichaContext.Provider value={{ posibleMovimiento, filasCheckers, movimiento, setMovimiento, negras, blancas, setNegras, decisionMovimiento, setDecisionMovimiento, posiColumna, setPosiColumna, positivo, setPositivo, setNegativo, negativo, setBlancas }}>
            {children}
        </FichaContext.Provider>
    )
}

export default FichasProvider;
