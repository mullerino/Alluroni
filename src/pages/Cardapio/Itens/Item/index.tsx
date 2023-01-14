import styles from './item.module.scss'
import classNames from 'classnames';


interface IItens{
    title: string;
    description: string;
    img: string;
    tamanho: number;
    serve: number;
    price: number;
    category: {
        id: number;
        label: string;
    }
}

const Item = ({title,description,img,tamanho,serve,price,category}:IItens)=>{

    return (
    <div className={styles.item}>
        <div className={styles.item__imagem}>
            <img src={img} alt='imagem'></img>
        </div>
        <div className={styles.item__descricao}>
            <div className={styles.item__titulo}>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            <div className={styles.item__tags}>
                <div className={classNames({
                    [styles.item__tipo]: true,
                    [styles[`item__tipo__${category.label.toLocaleLowerCase()}`]]: true
                })}>
                    {category.label}
                </div>
                <div className={styles.item__porcao}>
                    {tamanho}g
                </div>
                <div className={styles.item__qtdpessoas}>
                    Serve {serve} pessoa{serve >1? 's':''}
                </div>
                <div className={styles.item__valor}>
                    R${price.toFixed(2)}
                </div>
            </div>
        </div>
    </div>
    )
}

export default Item