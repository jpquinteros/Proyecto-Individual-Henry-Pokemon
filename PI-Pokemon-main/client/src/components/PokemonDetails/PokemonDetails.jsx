import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPokemonById } from "../../redux/actions";


export default function PokemonDetails(){
    const {id} = useParams()
    const dispatch = useDispatch()
    const pokeDetails = useSelector((state)=> state.pokemonDetail )
    const { name, hp, attack, defense, speed, height, weight, image, type} = pokeDetails
    useEffect(()=>{
        dispatch(getPokemonById(id))
    },[dispatch, id])

    return(
        <div key={id} className='details'>
            <h3>{name}</h3>
            <h4>HP: {hp}</h4>
            <h4>Attack: {attack}</h4>
            <h4>Defense: {defense}</h4>
            <h4>Speed: {speed}</h4>
            <h4>Height: {height}</h4>
            <h4>Weight: {weight}</h4>
            {type && type.map((e) => {
            return (
            <h4 key = {e.name}>Type: {e.name}</h4>
            );
            })}
            <img src={image} alt={name} width="200px" height="250px" />

        </div>
    )
}