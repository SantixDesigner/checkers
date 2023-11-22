import { useContext, useState } from "react";
import './fichas.scss'
import { Pieza } from "./Pieza";
import FichaContext from "../context/FichaContext";

const PieceDamaNegra = ({ fila, columna }) => {
    const { movimientoDamaNegra, decisionMovimiento, posiColumnaDamaNegra, setPosiColumnaDamaNegra, negativoAtras, positivoAtras, setPositivoAtras, setNegativoAtras, setNegrasDamas, negrasDamas, positivoAdelante, setPositivoAdelante, negativoAdelante, setNegativoAdelante } = useContext(FichaContext)
    const isDamaNegra = true;
    return (
        movimientoDamaNegra != [0] && posiColumnaDamaNegra == -1 ?
            negrasDamas.map((item, id) => {
                return item.map((ndama, idcol) => {
                    if (ndama == columna && id + 1 == fila) {
                        return (
                            <Pieza color={"negra"} filaUbicada={id + 1} columnaUbicada={columna} key={[id, idcol]} isDamaNegra={isDamaNegra} />
                        )
                    }
                })
            })
            : negrasDamas.map((item, id) => {
                return item.map((ndama, idCol) => {
                    if (ndama == columna && id + 1 == fila) {
                        if (movimientoDamaNegra.columnaActual == columna && movimientoDamaNegra.filaActual == fila && decisionMovimiento) {
                            console.log(decisionMovimiento)
                            if (positivoAtras) {
                                negrasDamas[movimientoDamaNegra.filaAtras - 1][movimientoDamaNegra.columnaPositivaAtras - 1] = posiColumnaDamaNegra
                                setPositivoAtras(!positivoAtras)
                            }
                            else if (negativoAtras) {
                                negrasDamas[movimientoDamaNegra.filaAtras - 1][movimientoDamaNegra.columnaNegativaAtras - 1] = posiColumnaDamaNegra
                                setNegativoAtras(!negativoAtras)
                            }
                            else if (positivoAdelante) {
                                negrasDamas[movimientoDamaNegra.filaAdelante - 1][movimientoDamaNegra.columnaPositivaAdelante - 1] = posiColumnaDamaNegra
                                setPositivoAdelante(!positivoAdelante)
                            }
                            else {
                                negrasDamas[movimientoDamaNegra.filaAdelante - 1][movimientoDamaNegra.columnaNegativaAdelante - 1] = posiColumnaDamaNegra
                                setNegativoAdelante(!negativoAdelante)
                            }
                            console.log(negrasDamas)
                            let copiaDamasNegras = negrasDamas
                            setNegrasDamas(copiaDamasNegras)
                            setPosiColumnaDamaNegra(-1)
                            copiaDamasNegras[id][idCol] = undefined
                            return (
                                <>
                                    <Pieza color={"negra"} filaUbicada={movimientoDamaNegra.fila} columnaUbicada={posiColumnaDamaNegra} key={[id, idCol]} isDamaNegra={isDamaNegra} />
                                </>
                            )
                        }
                        else {
                            return (
                                <>
                                    <Pieza color={"negra"} filaUbicada={id + 1} columnaUbicada={columna} key={[id, idCol]} isDamaNegra={isDamaNegra} />
                                </>
                            )
                        }

                    }
                })
            })
    )
}
export default PieceDamaNegra