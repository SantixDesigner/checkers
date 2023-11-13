
import { useContext, useState } from 'react'
import './fichas.scss'
import { Pieza } from './Pieza'
import FichaContext from '../context/FichaContext'
const PieceNegra = ({ fila, columna }) => {
    const { movimiento, negras, setNegras, decisionMovimiento, posiColumna, setPosiColumna } = useContext(FichaContext)
    return (
        movimiento && posiColumna == -1 ?
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
                        if (movimiento.columnaActual == columna && movimiento.filaActual == fila && decisionMovimiento) {
                            console.log(negras[movimiento.fila-1][movimiento.columnaActual])
                            if (negras[movimiento.fila - 1][movimiento.columnaActual] == undefined) {
                                negras[movimiento.fila - 1][movimiento.columnaActual] =
                                    posiColumna
                            }
                            else{
                                negras[movimiento.fila - 1][movimiento.columnaActual+1] =
                                posiColumna
                            }
                            let copiaNegras = negras;
                            setNegras(copiaNegras)

                            setPosiColumna(-1)
                            copiaNegras[id][idCol] = [];
                            return (
                                <>
                                    <Pieza color={"negra"} filaUbicada={movimiento.fila} columnaUbicada={posiColumna} key={Math.random() * 100000} />
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
