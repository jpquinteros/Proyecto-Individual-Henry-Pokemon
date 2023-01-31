import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPokemonById } from "../../redux/actions";
import style from './PokemonDetails.module.css'
import { Link } from "react-router-dom";


export default function PokemonDetails(){
    const {id} = useParams()
    const dispatch = useDispatch()
    const pokeDetails = useSelector((state)=> state.pokemonDetail )
    const { name, hp, attack, defense, speed, height, weight, image, type} = pokeDetails
    useEffect(()=>{
        dispatch(getPokemonById(id))
    },[dispatch, id])

    return(
        <div className={style.body}>
            <div className={style.img}>
                <img src={image} alt={name} width="200px" height="250px" />
            </div>
            <div className={style.name}><h1>{name}</h1></div>
        <div key={id} className={style.stats}>
            <div>
                <p className={style.p}>ID: {id}</p>
                <p className={style.p}>HP: {hp}</p>
                <p className={style.p}>Attack: {attack}</p>
                <p className={style.p}>Defense: {defense}</p>
                <p className={style.p}>Speed: {speed}</p>
                <p className={style.p}>Height: {height}</p>
                <p className={style.p}>Weight: {weight}</p>
                {type && type.map((e) => {
                 return (
                 <p className={style.p} key = {e.name}>Type: {e.name}</p>
            );
            })}
            <div>
                <Link to={'/home'}>
                <button className={style.button}>Go back home</button>
                </Link>
                </div>
            </div>
        </div>
        </div>
    )
}