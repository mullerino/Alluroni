import styles from './buscador.module.scss'
import { CgSearch} from 'react-icons/cg'

interface buscadorProps{
    busca: string;
    setBusca: React.Dispatch<React.SetStateAction<string>>
}

const Buscador = ({ busca, setBusca}: buscadorProps)=>{
    return (
        <div className={styles.buscador}>
            <input 
            type='text'
            value={busca} 
            onChange={e=>setBusca(e.target.value)}
            placeholder='Buscar'>
            </input>
            <CgSearch size={20} color='#4C4D5E'/>
        </div>
    )
}

export default Buscador