import { useContext} from "react";
import './fichas.scss'
import { Pieza } from "./Pieza";
import FichaContext from "../context/FichaContext";

const PieceDamaBlanca = ({ fila, columna }) => {
    const { decisionMovimiento, posiColumnaDamaBlanca, setPosiColumnaDamaBlanca, negativoAtras, positivoAtras, setPositivoAtras, setNegativoAtras, setBlancasDama, blancasDamas, positivoAdelante, setPositivoAdelante, negativoAdelante, setNegativoAdelante,movimientoDamaBlanca } = useContext(FichaContext)
    const isDamaBlanca = true;
    return (
        movimientoDamaBlanca != [0] && posiColumnaDamaBlanca == -1 ?
            blancasDamas.map((item, id) => {
                return item.map((bdama, idcol) => {
                    if (bdama == columna && id + 1 == fila) {
                        return (
                            <Pieza color={"marron"} filaUbicada={id + 1} columnaUbicada={columna} key={[id, idcol]} isDamaBlanca={isDamaBlanca} />
                        )
                    }
                })
            })
            : blancasDamas.map((item, id) => {
                return item.map((bdama, idCol) => {
                    if (bdama == columna && id + 1 == fila) {
                        if (movimientoDamaBlanca.columnaActual == columna && movimientoDamaBlanca.filaActual == fila && decisionMovimiento) {
                            console.log(decisionMovimiento)
                            console.log(posiColumnaDamaBlanca)
                            if (positivoAtras) {
                                blancasDamas[movimientoDamaBlanca.filaAtras - 1][movimientoDamaBlanca.columnaPositivaAtras - 1] = posiColumnaDamaBlanca
                                setPositivoAtras(!positivoAtras)
                            }
                            else if (negativoAtras) {
                                blancasDamas[movimientoDamaBlanca.filaAtras - 1][movimientoDamaBlanca.columnaNegativaAtras - 1] = posiColumnaDamaBlanca
                                setNegativoAtras(!negativoAtras)
                            }
                            else if (positivoAdelante) {
                                blancasDamas[movimientoDamaBlanca.filaAdelante - 1][movimientoDamaBlanca.columnaPositivaAdelante - 1] = posiColumnaDamaBlanca
                                setPositivoAdelante(!positivoAdelante)
                            }
                            else {
                                blancasDamas[movimientoDamaBlanca.filaAdelante - 1][movimientoDamaBlanca.columnaNegativaAdelante - 1] = posiColumnaDamaBlanca
                                setNegativoAdelante(!negativoAdelante)
                            }
                            console.log(blancasDamas)
                            let copiaDamasBlanca = blancasDamas
                            setBlancasDama(copiaDamasBlanca)
                            setPosiColumnaDamaBlanca(-1)
                            copiaDamasBlanca[id][idCol] = undefined
                            return (
                                <>
                                    <Pieza color={"marron"} filaUbicada={movimientoDamaBlanca.fila} columnaUbicada={posiColumnaDamaBlanca} key={[id, idCol]} isDamaBlanca={isDamaBlanca} />
                                </>
                            )
                        }
                        else {
                            return (
                                <>
                                    <Pieza color={"marron"} filaUbicada={id + 1} columnaUbicada={columna} key={[id, idCol]} isDamaBlanca={isDamaBlanca} />
                                </>
                            )
                        }

                    }
                })
            })
    )
}
export default PieceDamaBlanca