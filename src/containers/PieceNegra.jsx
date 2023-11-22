
import { useContext, useState } from 'react'
import './fichas.scss'
import { Pieza } from './Pieza'
import FichaContext from '../context/FichaContext'
const PieceNegra = ({ fila, columna }) => {
    const { movimientoNegra, negras, setNegras, decisionMovimiento, posiColumna, setPosiColumna, setPositivo, setNegativo, negativo, positivo, setNegrasDamas, negrasDamas, posiColumnaDamaNegra, setPosiColumnaDamaNegra } = useContext(FichaContext)
    const isDamaNegra = false
    return (
        movimientoNegra != [0] && posiColumna == -1 ?
            negras.map((item, id) => {
                return item.map((negra) => {
                    if (negra == columna && id + 1 == fila) {
                        return (
                            <>
                                <Pieza color={"negra"} filaUbicada={id + 1} columnaUbicada={columna} key={Math.random() * 100000} isDamaNegra={isDamaNegra}/>
                            </>
                        )
                    }
                })
            })
            : negras.map((item, id) => {
                return item.map((negra, idCol) => {
                    if (negra == columna && id + 1 == fila) {
                        if (movimientoNegra.columnaActual == columna && movimientoNegra.filaActual == fila && decisionMovimiento) {
                            if (positivo) {
                                if (movimientoNegra.fila > 1) {
                                    negras[movimientoNegra.fila - 1][movimientoNegra.columnaPositiva - 1] =
                                        posiColumna
                                }
                                else if (movimientoNegra.fila == 1) {
                                    setPosiColumnaDamaNegra(posiColumna)
                                        negrasDamas[movimientoNegra.fila - 1][movimientoNegra.columnaPositiva - 1] = posiColumna
                                    negras[movimientoNegra.fila + 1][movimientoNegra.columnaPositiva - 2] = undefined
                                }
                                setPositivo(!positivo)
                            }
                            else {
                                if (movimientoNegra.fila > 1) {
                                    negras[movimientoNegra.fila - 1][movimientoNegra.columnaNegativa - 1] =
                                        posiColumna
                                }
                                else if (movimientoNegra.fila == 1) {
                                    setPosiColumnaDamaNegra(posiColumna)
                                    negrasDamas[movimientoNegra.fila - 1][movimientoNegra.columnaNegativa - 1] = posiColumna
                                    negras[movimientoNegra.fila + 1][movimientoNegra.columnaNegativa - 2] = undefined
                                }
                                setNegativo(!negativo)
                            }
                            let copiaNegras = negras;
                            let copiaNegrasDamas = negrasDamas
                            setNegras(copiaNegras)
                            setNegrasDamas(copiaNegrasDamas)
                            setPosiColumna(-1)
                            copiaNegras[id][idCol] = undefined;
                            return (
                                <>
                                    <Pieza color={"negra"} filaUbicada={movimientoNegra.fila} columnaUbicada={posiColumna} key={Math.random() * 100000} isDamaNegra={isDamaNegra} />
                                </>
                            )
                        }
                        else {
                            return (
                                <>
                                    <Pieza color={"negra"} filaUbicada={id + 1} columnaUbicada={columna} key={Math.random() * 100000} isDamaNegra={isDamaNegra}/>
                                </>
                            )
                        }
                    }

                })
            })
    )
}

export default PieceNegra
