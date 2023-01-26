import React from 'react';
import {useDispatch} from 'react-redux';
import {filterPokemonsByType}  from '../actions/index'
import { useHistory } from "react-router-dom";


export default function Nav ({types, setOrderPoke, setCurrentPage}) {
       
    const dispatch = useDispatch();
    const history = useHistory();
    
    // function handleOrderByAbc(e){
    //     e.preventDefault();
    //     dispatch(orderAlphabetically(e.target.value));
    //     setCurrentPage(1);
    //     setOrder(`Ordenado by ${e.target.value}`)
    // }

     function handleFilterType (e){
        e.preventDefault();
        dispatch(filterPokemonsByType(e.target.value));
       
        setCurrentPage(1);
        setOrderPoke(`Filter by ${e.target.value}`)
    }

    return <div className='filters'>
      
        <select className='filterType' onChange={(e) => handleFilterType(e)}>
            <option className='option0' value="All">Type Filter</option>
            {
                types?.map( pt => {
                    return <option className='option' value={pt.name} key={pt.id}>{pt.name}</option>
                })
            }
        </select>
    
     
    </div>
};
