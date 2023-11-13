import { useContext } from 'react'
import './fichas.scss'
import { Pieza } from './Pieza'
import FichaContext from '../context/FichaContext'
const PieceBlanca = ({ fila, columna }) => {
    const { blancas, decisionMovimiento, posiColumna, setPosiColumna, setPositivo, setNegativo, negativo, positivo, movimiento, setBlancas } = useContext(FichaContext)
    return (
        movimiento && posiColumna == -1 ?
            blancas.map((item, id) => {
                return item.map((blanca) => {
                    if (blanca == columna && id + 1 == fila) {
                        return (
                            <>
                                <Pieza color={"marron"} filaUbicada={id + 1} columnaUbicada={columna} key={Math.random() * 100000} />
                            </>
                        )
                    }
                })
            })
            : blancas.map((item, id) => {
                return item.map((blanca, idCol) => {
                    if (blanca == columna && id + 1 == fila) {
                        console.log(movimiento)
                        if (movimiento.columnaActual == columna && movimiento.filaActual == fila && decisionMovimiento) {
                            if (positivo) {
                                blancas[movimiento.fila-1][movimiento.columnaActual + 1] =
                                    posiColumna
                                setPositivo(!positivo)
                            }
                            else {
                                blancas[movimiento.fila-1][movimiento.columnaActual - 1] =
                                    posiColumna
                                setNegativo(!negativo)
                            }
                            let copiaBlancas = blancas;
                            setBlancas(copiaBlancas)
                            setPosiColumna(-1)
                            console.log(blancas)
                            copiaBlancas[id][idCol] = [];
                            return (
                                <>
                                    <Pieza color={"marron"} filaUbicada={movimiento.fila} columnaUbicada={posiColumna} key={Math.random() * 100000} />
                                </>
                            )
                        }
                        else {
                            return (
                                <>
                                    <Pieza color={"marron"} filaUbicada={id + 1} columnaUbicada={columna} key={Math.random() * 100000} />
                                </>
                            )
                        }
                    }

                })
            })
    )
}

export default PieceBlanca