import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { getAllPokemons, filterPokemonsByType } from "../actions";
import { Link } from "react-router-dom";
import Card from "./Card";
import { pruebaAction } from "../actions";
import Paginado from "./Paginado";

export default function Home(){
    const dispatch = useDispatch()
    const allPokemons = useSelector((state) => state.pokemons);
    const [currentPage, setCurrentPage] = useState(1);
    const [pokemonsPerPage, setPokemonsPerPage] = useState(12);
    const indexOfLastPokemon = currentPage * pokemonsPerPage;
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
    const currentPokemons = allPokemons.slice(indexOfFirstPokemon, indexOfLastPokemon)
    
    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    useEffect (()=>{
        dispatch(getAllPokemons());

    }, [dispatch])

    function handlerClick(e){
        e.preventDefault();
        dispatch(getAllPokemons);
    }

    function handleFilterStatus(e){
        dispatch(filterPokemonsByType(e.target.value))
    }

    return (
        <div>
            <Link to='/pokemons'>Create Pokemon</Link>
            <h1>Create your own Pokemon</h1>
            <button onClick={e=>{handlerClick(e)}}>
                Reload all Pokemons
            </button>
            <div>
                <select>
                    <option value='asc'>Ascending</option>
                    <option value='desc'>Descending</option>
                </select>
                <select onChange={e => handleFilterStatus(e)}>
                    <option value='All'>All</option>
                    <option value='normal'>Normal</option>
                    <option value='fighting'>Fighting</option>
                    <option value='flying'>Flying</option>
                    <option value='poison'>Poison</option>
                    <option value='ground'>Ground</option>
                    <option value='rock'>Rock</option>
                    <option value='bug'>Bug</option>
                    <option value='ghost'>Ghost</option>
                    <option value='steel'>Steel</option>
                    <option value='fire'>Fire</option>
                    <option value='water'>Water</option>
                    <option value='grass'>Grass</option>
                    <option value='electric'>Electric</option>
                    <option value='phychic'>Phychic</option>
                    <option value='ice'>Ice</option>
                    <option value='dragon'>Dragon</option>
                    <option value='dark'>Dark</option>
                    <option value='fairy'>Fairy</option>
                    <option value='unknown'>Unknown</option>
                    <option value='shadow'>Shadow</option>
                </select>
                <select>
                    <option value='all'>All</option>
                    <option value='api'>Original Pokemons</option>
                    <option value='created'>Created</option>
                </select>
                <Paginado
                pokemonsPerPage={pokemonsPerPage}
                allPokemons={allPokemons.length}
                paginado = {paginado}
                />
                { currentPokemons?.map((e) =>{
                    return (
                            <Link to={'/home/'}>
                                <Card key={e.id} name={e.name} image={e.image} type={e.type} />
                            </Link>    
                    )
                })

                }
            <button onClick={()=> dispatch(getAllPokemons()) }>Boton de prueba</button>
            </div>
        </div>
    )

}

