import { useState } from "react";
import FichaContext from "./fichaContext";

const FichasProvider = ({ children }) => {
    const [movimiento, setMovimiento] = useState([]);
    const [posiColumna, setPosiColumna] = useState(10)
    const [decisionMovimiento, setDecisionMovimiento] = useState(false)
    const blancas = [
        [2, 4, 6, 8],
        [1, 3, 5, 7],
        [2, 4, 6, 8],
        [],
        [],
        [],
        [],
        [],
    ]
    const [negras, setNegras] = useState([
        [],
        [],
        [],
        [],
        [],
        [1, 3, 5, 7],
        [2, 4, 6, 8],
        [1, 3, 5, 7],
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
                columna == 1 ? setMovimiento({ columnaPositiva: columna + 1, fila: fila - 1, columnaActual: columna, filaActual: fila, columnaParaMover:posiColumna }) : setMovimiento({ columnaNegativa: columna - 1, fila: fila - 1, columnaActual: columna, filaActual: fila })
            }
            else {
                setMovimiento({ columnaPositiva: columna + 1, columnaNegativa: columna - 1, fila: fila - 1, columnaActual: columna, filaActual: fila })
            }
        }
        else {
            if (columna == 1 || columna == 8) {
                columna == 1 ? setMovimiento({ columna: columna + 1, fila: fila + 1, columnaActual: columna, filaActual: fila, columnaParaMover:posiColumna }) : setMovimiento({ columna: columna - 1, fila: fila + 1, columnaActual: columna, filaActual: fila, columnaParaMover:posiColumna })
            }
            else {
                setMovimiento({ columnaPositiva: columna + 1, columnaNegativa: columna - 1, fila: fila + 1, columnaActual: columna, filaActual: fila, columnaParaMover:posiColumna })
            }
        }
        setDecisionMovimiento(false)
        return movimiento;
    }

    return (
        <FichaContext.Provider value={{ posibleMovimiento, filasCheckers, movimiento, setMovimiento, negras, blancas, setNegras, decisionMovimiento, setDecisionMovimiento, posiColumna, setPosiColumna }}>
            {children}
        </FichaContext.Provider>
    )
}

export default FichasProvider;