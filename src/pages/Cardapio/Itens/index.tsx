import Item from './Item'
import cardapio from './itens.json'
import styles from './itens.module.scss'

interface IItens{
    busca: string;
    filtro: number | null;
}

const Itens = ({busca,filtro}:IItens)=>{
    const cardapioFilter = cardapio.filter(item => item.title.toLocaleLowerCase().includes(busca))
    
    return (
        <div className= {styles.itens}>

            {filtro === null ? cardapioFilter.map(item => (
                <Item key={item.id} title = {item.title} description = {item.description} img = {item.photo} tamanho = {item.size} serve = {item.serving} price ={item.price} category = {item.category}/>
            )): ''}
        </div>
    )
}

export default Itens