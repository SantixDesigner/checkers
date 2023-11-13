
import { useContext, useEffect, useState } from "react"
import './fichas.scss'
import FichaContext from "../context/FichaContext"

const PiezaMovimiento = ({ columna, fila }) => {
    const { movimiento, setDecisionMovimiento, setPosiColumna, negras, setNegativo, setPositivo } = useContext(FichaContext)
    if (movimiento.length != 0) {
        if ((movimiento.columnaPositiva == columna || movimiento.columnaNegativa == columna) && movimiento.fila == fila) {
            return (
                <div className={columna < movimiento.columnaPositiva ? "movement movement-negativo" : "movement movement-positivo"} onClick={(e) => {
                    negras.map((item, id) => {
                        if (id == movimiento.filaActual - 1) {
                            item.map((itemZ, idem) => {
                                if(e.target.className == "movement movement-negativo"){
                                    console.log(e.target.className)
                                    setPosiColumna(columna)
                                    setNegativo(true)
                                }
                                else{
                                    setPosiColumna(columna)
                                    setPositivo(true)
                                }
                                
                            })
                        }
                    })
                    setDecisionMovimiento(true)
                }}></div>
            )
        }
    }
}

export default PiezaMovimiento
