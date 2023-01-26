import React from "react";

export default function Paginado({pokemonsPerPage, allPokemons, paginado}){
    const pageNumbers = []

    for(let i=1; i<=Math.ceil(allPokemons/pokemonsPerPage); i++){
        pageNumbers.push(i)
    }

    return(
        <nav>
            <ul className="paginado">
                { pageNumbers &&
                pageNumbers.map(number =>(
                    <span className="number" key={number}>
                        <button onClick={()=> paginado(number)}>{number+' '}</button>
                    </span>
                ))}
            </ul>
        </nav>
    )
}