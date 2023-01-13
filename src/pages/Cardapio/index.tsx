import styles from './Cardapio.module.scss'
import logo from '../../assets/logo.svg'

const Cardapio = ()=>{
    return (
        <main>
            <nav className={styles.menu}>
                <img src={logo} alt='logo'/>
            </nav>
        </main>
    )
}

export default Cardapio