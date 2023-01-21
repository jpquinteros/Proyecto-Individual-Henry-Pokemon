import React from "react";
import { useState, useEffect } from "react";
import getAllPokemons from "../redux/actions";


const Home = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const getPokemons = getAllPokemons()
    return (
        <div>
            <h1>
                {getPokemons.map((elemento) => {
                    return elemento.name
                 }
                )}
            </h1>
        </div>
    )
}

export default Home;
