
import { useContext, useState } from 'react'
import './fichas.scss'
import { Pieza } from './Pieza'
import FichaContext from '../context/FichaContext'
const PieceNegra = ({ fila, columna }) => {
    const { movimientoNegra, negras, setNegras, decisionMovimiento, posiColumna, setPosiColumna, setPositivo, setNegativo, negativo, positivo, blancas } = useContext(FichaContext)
    return (
        movimientoNegra != [0] && posiColumna == -1 ?
            negras.map((item, id) => {
                return item.map((negra) => {
                    if (negra == columna && id + 1 == fila) {
                        return (
                            <>
                                <Pieza color={"negra"} filaUbicada={id + 1} columnaUbicada={columna} key={Math.random() * 100000} />
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
                                negras[movimientoNegra.fila - 1][movimientoNegra.columnaActual + 1] =
                                    posiColumna
                                setPositivo(!positivo)
                            }
                            else {
                                negras[movimientoNegra.fila - 1][movimientoNegra.columnaActual - 1] =
                                    posiColumna
                                setNegativo(!negativo)
                            }

                            let copiaNegras = negras;
                            setNegras(copiaNegras)
                            setPosiColumna(-1)
                            console.log(negras)
                            copiaNegras[id][idCol] = undefined;
                            return (
                                <>
                                    <Pieza color={"negra"} filaUbicada={movimientoNegra.fila} columnaUbicada={posiColumna} key={Math.random() * 100000} />
                                </>
                            )
                        }
                        else {
                            return (
                                <>
                                    <Pieza color={"negra"} filaUbicada={id + 1} columnaUbicada={columna} key={Math.random() * 100000} />
                                </>
                            )
                        }
                    }

                })
            })
    )
}

export default PieceNegra
