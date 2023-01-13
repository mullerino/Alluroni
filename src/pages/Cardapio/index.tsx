import styles from './Cardapio.module.scss'
import logo from '../../assets/logo.svg'

const Cardapio = ()=>{
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
        </main>
    )
}

export default Cardapio