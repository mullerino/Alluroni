import filtros from './filtros.json'
import styles from './filtros.module.scss'
import classNames from 'classnames';

type IOpcao = typeof filtros[0]

interface IFiltros{
    filtro: number | null;
    setFiltro: React.Dispatch<React.SetStateAction<number | null>>;
}

const Filtros = ({filtro, setFiltro} :IFiltros)=>{
    const selecionarFiltro = (opcao:IOpcao)=>{
        if(filtro === opcao.id){
            return setFiltro(null)
        }
        return setFiltro(opcao.id)
    }

    return (
        <div className={styles.filtros}>
            {filtros.map(opcao=>(
                <button className={classNames({
                    [styles.filtros_filtro]: true,
                    [styles["filtros_filtro--ativo"]]: filtro===opcao.id,
                })} 
                key={opcao.id} 
                onClick={()=> selecionarFiltro(opcao)}>
                    {opcao.label}
                </button>
            ))}
        </div>
    )
}

export default Filtros