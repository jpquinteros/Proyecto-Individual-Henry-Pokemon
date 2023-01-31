import React from "react";
import style from './Pagination.module.css';

export function Paginado({pokemonsPerPage, allPokemons, paginado}){
    const pageNumbers = []

    for(let i=1; i<=Math.ceil(allPokemons/pokemonsPerPage); i++){
        pageNumbers.push(i)
    }

    return(
        <nav>
            <ul className={style.paginado}>
                { pageNumbers &&
                pageNumbers.map(number =>(
                    <span key={number}>
                        <button className={style.button} onClick={()=> paginado(number)}> {number } </button>
                    </span>
                ))}
            </ul>
        </nav>
    )
}