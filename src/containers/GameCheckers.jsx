import './GameCheckers.scss'
import PieceNegra from './PieceNegra';
import PieceBlanca from './PieceBlanca';
import PiezaMovimiento from './PiezaMovimiento'
import { useContext } from 'react';
import FichaContext from '../context/FichaContext';
const GameCheckers = () => {
    //blancas[fila - 1][columna] && !blancas[fila - 2][columna - 1]) {
    const { filasCheckers, movimiento, decisionMovimiento, setPosiColumna, turno, blancas, movimientoNegra } = useContext(FichaContext)
    const filasCheckersMapeo = filasCheckers()
    return (<>
        <div>
            <div className='div-turnos'>
                <p>Turno de {turno == "negra" ? <span style={{ color: "black" }}>blancas</span> : <span style={{ color: "red" }}>Rojas</span>}</p>
            </div>
            <div className="checkers">
                {filasCheckersMapeo.map((idFila, i) => {
                    return (
                        <div key={Math.random() * 100000} className={`fila fila-${i + 1}`}>
                            {idFila.map((idColumna) => {
                                return (
                                    <div key={Math.random() * 100000} className={`fila-${i + 1} columna columna-${idColumna}`}>

                                        <PieceBlanca columna={idColumna} fila={i + 1} key={Math.random() * 100000} />
                                        <PieceNegra columna={idColumna} fila={i + 1} key={Math.random() * 100000} />
                                        {
                                            !decisionMovimiento &&         <PiezaMovimiento columna={idColumna} fila={i + 1} key={Math.random() * 1000000} />
                                        }
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
        </div>
    </>)
}
export default GameCheckers