import styles from "./ordenador.module.scss"
import opcoes from "./opcoes.json"
import { useState } from "react"
import classNames from "classnames"
import {BsArrowUpShort,BsArrowDownShort} from 'react-icons/bs'

interface IOrdenador{
    ordenador: string;
    setOrdenador: React.Dispatch<React.SetStateAction<string>>;
}

const Ordenador =({ordenador,setOrdenador}:IOrdenador)=>{
    const [aberto,setAberto] = useState<boolean>(false)
    const nomeOrdenador = ordenador && opcoes.find(opcao => ordenador === opcao.value)?.nome

    return (
        <button className={classNames({
            [styles.ordenador]: true,
            [styles["ordenador--ativo"]]: ordenador !== ""
        })}
        onClick={()=>setAberto(!aberto)} 
        onBlur={()=>setAberto(false)}>
            <span>{nomeOrdenador || "Ordenar Por"}</span>
            {aberto? <BsArrowUpShort size={20}></BsArrowUpShort>: <BsArrowDownShort size={20}></BsArrowDownShort> }
            <div className={classNames({
                [styles.ordenador_options]: true,
                [styles["ordenador_options--ativo"]]: aberto

            })}>
                {opcoes.map(opcao=>(
                    <div className={styles.ordenador_option} key ={opcao.value} onClick={()=>setOrdenador(opcao.value)}>
                        {opcao.nome}
                    </div>
                ))}
            </div>
        </button>
    )
}

export default Ordenador