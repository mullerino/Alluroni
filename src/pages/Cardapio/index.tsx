import styles from './Cardapio.module.scss'
import logo from '../../assets/logo.svg'
import Buscador from './Buscador'
import { useState } from 'react'
import Filtros from './Filtros'
import Ordenador from './Ordenador'
import Itens from './Itens'

const Cardapio = ()=>{
    const [busca,setBusca] = useState<string>('')
    const [filtro,setFiltro] = useState<number | null>(null)
    const [ordenador, setOrdenador] = useState<string>('')

    console.log(filtro)
    return (
        <main>
            <nav className={styles.menu}>
                <img src={logo} alt='logo'/>
            </nav>
            <header className={styles.header}>
                <div className={styles.header_text}>
                    A casa do código na massa
                </div>
            </header>
            <section className={styles.cardapio}>
                <h3 className={styles.cardapio_titulo}>Cardápio</h3>
                <Buscador busca = {busca} setBusca = {setBusca}/>
                <div className={styles.cardapio_filtros}>
                    <Filtros filtro ={filtro} setFiltro={setFiltro}></Filtros>
                    <Ordenador ordenador = {ordenador} setOrdenador = {setOrdenador}></Ordenador>
                </div>
            <Itens busca = {busca} filtro = {filtro}></Itens>
            </section>
        </main>
    )
}

export default Cardapio