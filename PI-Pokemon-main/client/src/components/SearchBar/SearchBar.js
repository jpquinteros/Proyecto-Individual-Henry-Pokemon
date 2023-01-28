import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getPokemonByName } from '../../redux/actions';

export default function SearchBar({setCurrentPage}){
    const [search, setSearch] = useState('')
    const dispatch = useDispatch();
    const handlerInput = (event) => {
        setSearch(event.target.value)
    }
    const updateInput = () => {
        setCurrentPage(1)
        dispatch(getPokemonByName(search))
        setSearch('')
    }
    return (<div>
                <input onChange={(e)=>handlerInput(e)} type='text'></input>
                <button onClick={(e)=>updateInput(e)}>Find</button>
            </div>
        
    )
}