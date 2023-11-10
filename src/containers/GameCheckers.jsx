import './GameCheckers.scss'
import PieceNegra from './PieceNegra';
import PieceBlanca from './PieceBlanca';
import PiezaMovimiento from './PiezaMovimiento'
import { useContext} from 'react';
import FichaContext from '../context/fichaContext';
const GameCheckers = () => {
    const {filasCheckers, movimiento, decisionMovimiento, setPosiColumna} = useContext(FichaContext)
    const filasCheckersMapeo = filasCheckers()
    return (<>
        <div className="checkers">
            {filasCheckersMapeo.map((idFila, i) => {
                return (
                    <div key={Math.random()*100000} className={`fila fila-${i + 1}`}>
                        {idFila.map((idColumna) => {
                            return (
                                <div key={Math.random()*100000} className={`fila-${i + 1} columna columna-${idColumna}`}>
                                    {
                                        !decisionMovimiento && <PiezaMovimiento columna={idColumna} fila={i+1} key={Math.random()*1000000}/>
                                    }
                                    
                                    <PieceBlanca columna={idColumna} fila={i+1} key={Math.random()*100000}/>
                                    <PieceNegra columna={idColumna} fila={i+1} key={Math.random()*100000}/>
                                </div>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    </>)
}
export default GameCheckers