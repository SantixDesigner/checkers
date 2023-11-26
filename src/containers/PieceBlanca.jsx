import { useContext } from 'react'
import './fichas.scss'
import { Pieza } from './Pieza'
import FichaContext from '../context/FichaContext'
const PieceBlanca = ({ fila, columna }) => {
    const { blancas, decisionMovimiento, posiColumna, setPosiColumna, setPositivo, setNegativo, negativo, positivo, movimientoBlanca, setBlancas, setPosiColumnaDamaBlanca, blancasDamas, setBlancasDama } = useContext(FichaContext)
    const isDamaBlanca = false
    return (
        movimientoBlanca != [0] && posiColumna == -1 ?
            blancas.map((item, id) => {
                return item.map((blanca) => {
                    if (blanca == columna && id + 1 == fila) {
                        return (
                            <>
                                <Pieza color={"marron"} filaUbicada={id + 1} columnaUbicada={columna} key={Math.random() * 100000} isDamaBlanca={isDamaBlanca}/>
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
                                
                                console.log(fila, columna)
                                if (movimientoBlanca.fila < 8) {
                                    blancas[movimientoBlanca.fila-1][movimientoBlanca.columnaPositiva - 1] =
                                        posiColumna
                                }
                                else if (movimientoBlanca.fila == 8) {
                                    setPosiColumnaDamaBlanca(posiColumna)
                                    blancasDamas[movimientoBlanca.fila-1][movimientoBlanca.columnaPositiva - 1] = posiColumna
                                    console.log(blancasDamas)
                                    blancas[movimientoBlanca.fila - 1][movimientoBlanca.columnaPositiva - 2] = undefined
                                }
                                setPositivo(!positivo)
                            }
                            else {
                                if (movimientoBlanca.fila < 8) {
                                    blancas[movimientoBlanca.fila - 1][movimientoBlanca.columnaNegativa - 1] =
                                        posiColumna
                                }
                                else if (movimientoBlanca.fila == 8) {
                                    setPosiColumnaDamaBlanca(posiColumna)
                                    blancasDamas[movimientoBlanca.fila-1][movimientoBlanca.columnaNegativa - 1] = posiColumna
                                    blancas[movimientoBlanca.fila - 1][movimientoBlanca.columnaNegativa - 2] = undefined
                                }
                                setNegativo(!negativo)
                            }
                            let copiaBlancas = blancas;
                            let copiaBlancasDamas = blancasDamas
                            setBlancas(copiaBlancas)
                            setBlancasDama(copiaBlancasDamas)
                            setPosiColumna(-1)
                            copiaBlancas[id][idCol] = undefined;
                            return (
                                <>
                                    <Pieza color={"marron"} filaUbicada={movimientoBlanca.fila} columnaUbicada={posiColumna} key={Math.random() * 100000} isDamaBlanca={isDamaBlanca} />
                                </>
                            )
                        }
                        else {
                            return (
                                <>
                                    <Pieza color={"marron"} filaUbicada={id + 1} columnaUbicada={columna} key={Math.random() * 100000} isDamaBlanca={isDamaBlanca}/>
                                </>
                            )
                        }
                    }

                })
            })
    )
}

export default PieceBlanca