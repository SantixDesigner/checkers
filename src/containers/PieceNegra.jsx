import { useContext } from 'react'
import './fichas.scss'
import { Pieza } from './Pieza'
import FichaContext from '../context/fichaContext'
const PieceNegra = ({ fila, columna}) => {
    const { movimiento, negras, setNegras, decisionMovimiento, posiColumna} = useContext(FichaContext)
    return (
        movimiento.length == 0 && posiColumna == 10 ?
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
                return item.map((negra,idCol) => {
                    negras[movimiento.fila-1][movimiento.columnaParaMover] = movimiento.columnaParaMover
                    console.log(movimiento.columnaParaMover)
                    if (negra == columna && id + 1 == fila) {
                        if (movimiento.columnaActual == columna && movimiento.filaActual == fila && decisionMovimiento) {
                            negras[id][idCol] = []
                            setNegras(negras)
                            console.log(negras)
                            return (
                                <>
                                    <Pieza color={"negra"} filaUbicada={movimiento.fila} columnaUbicada={movimiento.columnaParaMover} key={Math.random() * 100000}/>
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
/*
*/

export default PieceNegra