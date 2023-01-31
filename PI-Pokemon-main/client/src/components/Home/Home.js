
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPokemons, getTypes } from '../../redux/actions';
import { PokemonCard } from '../PokemonCard/PokemonCard';
import { Paginado } from '../Pagination/Pagination.js';
import { Nav } from '../Nav/Nav'
import style from './Home.module.css'

export const Home = function () {
  const dispatch = useDispatch();
  const AllPokemons = useSelector((state) => state.pokemons);
  const allTypes = useSelector((state) => state.types)
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonsPerPage, setPokemonsPerPage] = useState(13);
  const [order, setOrder] = useState("");
  const indexOfLastPokemon = currentPage * pokemonsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
  const currentPokemons = AllPokemons?.slice(indexOfFirstPokemon, indexOfLastPokemon)
  

  const paginado = (pageNumber) => { setCurrentPage(pageNumber) }


  useEffect(() => {
    dispatch(getAllPokemons())
  }, [dispatch]);

  useEffect(() => {
    dispatch(getTypes());

  }, [dispatch]);

  return (
    <div key={style.Homessc} className={style.Homessc} >
      <Nav key={Nav} types={allTypes} setOrder={setOrder} setCurrentPage={setCurrentPage} />
      <div className={style.cardContainer}>
      { currentPokemons.map((pokemon) => {
        return (
          <PokemonCard
          key={pokemon.id}
          id={pokemon.id}
          name={pokemon.name}
          image={pokemon.image}
          type={pokemon.type}
          />
          );
        })}
        </div>
        <Paginado
          key = {Paginado}
          currentPage={currentPage}
          pokemonsPerPage={pokemonsPerPage}
          allPokemons={AllPokemons.length}
          paginado={paginado}
        />
      
    </div>
  )
}

