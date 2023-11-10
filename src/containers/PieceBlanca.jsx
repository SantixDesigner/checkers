import { useContext } from 'react'
import './fichas.scss'
import { Pieza } from './Pieza'
import FichaContext from '../context/fichaContext'
const PieceBlanca = ({ fila, columna }) => {
    const {blancas} = useContext(FichaContext)
    return(
        blancas.map((item, id) => {
            return item.map((blanca) => {
                if (blanca == columna && id + 1 == fila) {
                    return (
                        <>
                        <Pieza color={"marron"} filaUbicada={id+1} columnaUbicada={columna} key={Math.random()*100000}/>
                        </>
                    )
                }
            })
        })
    )
}

export default PieceBlanca