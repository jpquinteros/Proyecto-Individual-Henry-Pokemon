import React from "react";
import { useState, useEffect } from "react";
import getAllPokemons from "../redux/actions";


const Homepage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    return (
        <div>{getAllPokemons.map((pokemon) => {
            return (<ul>
                <li> 
                    id= {pokemon.id}
                </li>
                <li>
                    name= {pokemon.name}
                </li>
                </ul>
            )
        })}</div>
    )
}

export default Homepage;
