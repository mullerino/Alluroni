import { useEffect, useState } from 'react';
import Item from './Item'
import cardapio from './itens.json'
import styles from './itens.module.scss'

interface IItens{
    busca: string;
    filtro: number | null;
    ordenador: string;
}

const Itens = ({busca,filtro,ordenador}:IItens)=>{
    const [lista,setLista] = useState(cardapio)

    const testaFiltro = (id: number | null)=>{
        if(filtro !== null){
            return filtro === id
        }
        return true;
    }

    const ordenadorPor = (item: typeof cardapio)=>{
        switch(ordenador){
            case "porcao":
                return item.sort((a,b)=> a.size > b.size? -1:1 )
            case "qtd_pessoas":
                return item.sort((a,b) => a.serving > b.serving? -1:1)
            case "preco":
                return item.sort((a,b) => a.price > b.price? -1:1)
            default:
                return item
        }
    }

    useEffect(()=>{
        const novaLista = cardapio.filter(item => item.title.toLocaleLowerCase().includes(busca) && testaFiltro(item.category.id))
        setLista(ordenadorPor(novaLista))

    },[busca, filtro, ordenador])

    return (
        <div className= {styles.itens}>
            {lista.map(item => (
                <Item key={item.id} title = {item.title} description = {item.description} img = {item.photo} tamanho = {item.size} serve = {item.serving} price ={item.price} category = {item.category}/>
            ))}
        </div>
    )
}

export default Itens