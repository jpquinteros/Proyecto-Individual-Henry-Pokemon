import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { getAllPokemons, getTypes } from "../actions";
import { Link } from "react-router-dom";
import Card from "./Card";
import Paginado from "./Paginado";
import NavBar from './NavBar';

export default function Home(){
    const dispatch = useDispatch()
    const allPokemons = useSelector((state) => state.pokemons);
    const allPokeTypes = useSelector((state) => state.types)
    const [currentPage, setCurrentPage] = useState(1);
    const [pokemonsPerPage, setPokemonsPerPage] = useState(12);
    const [orderPoke, setOrderPoke] = useState('');
    const indexOfLastPokemon = currentPage * pokemonsPerPage;
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
    const currentPokemons = allPokemons.slice(indexOfFirstPokemon, indexOfLastPokemon)
    
    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    // console.log(allPokemons)

    useEffect (()=>{
        dispatch(getAllPokemons());

    }, [dispatch])

    useEffect (()=>{
        dispatch(getTypes());
    }, [dispatch])

    return (
        <div>
            <NavBar  types = {allPokeTypes} setOrderPoke = {setOrderPoke} setCurrentPage = {setCurrentPage} />
            <Link to='/pokemons'>Create Pokemon</Link>
            <h1>Create your own Pokemon</h1>
            {/* <button onClick={e=>{handlerClick(e)}}>
                Reload all Pokemons
            </button> */}
            <div>
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
            </div>
        </div>
    )

}

