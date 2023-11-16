import { useContext } from 'react'
import './fichas.scss'
import { Pieza } from './Pieza'
import FichaContext from '../context/FichaContext'
const PieceBlanca = ({ fila, columna }) => {
    const { blancas, decisionMovimiento, posiColumna, setPosiColumna, setPositivo, setNegativo, negativo, positivo, movimientoBlanca, setBlancas } = useContext(FichaContext)
    return (
        movimientoBlanca != [0] && posiColumna == -1 ?
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
                        if (movimientoBlanca.columnaActual == columna && movimientoBlanca.filaActual == fila && decisionMovimiento) {
                            if (positivo) {
                                blancas[movimientoBlanca.fila - 1][movimientoBlanca.columnaActual + 1] =
                                    posiColumna
                                setPositivo(!positivo)
                            }
                            else {
                                blancas[movimientoBlanca.fila - 1][movimientoBlanca.columnaActual - 1] =
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
                                    <Pieza color={"marron"} filaUbicada={movimientoBlanca.fila} columnaUbicada={posiColumna} key={Math.random() * 100000} />
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