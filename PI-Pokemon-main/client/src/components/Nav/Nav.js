import React, { Component } from 'react';
import {useDispatch} from 'react-redux';
import { getAllPokemons,filterByType,  orderAlphabetically, orderByAttack, filterCreated} from '../../redux/actions'
import { useHistory } from "react-router-dom";
import SearchBar from '../SearchBar/SearchBar';


export function Nav ({types, setOrder, setCurrentPage}) {
       
    const dispatch = useDispatch();
    const history = useHistory();
    
    function handleOrderByAbc(e){
        //e.preventDefault();
        dispatch(orderAlphabetically(e.target.value));
        setCurrentPage(1);
        setOrder(`Ordered by ${e.target.value}`)
    }

    function handleOrderByPower(e){
        //e.preventDefault();
        dispatch(orderByAttack(e.target.value));
        setCurrentPage(1);
        setOrder(`Ordered by ${e.target.value}`)
    }

     function handleFilterType (e){
        e.preventDefault();
        dispatch(filterByType(e.target.value));
       
        setCurrentPage(1);
        setOrder(`Filter by ${e.target.value}`)
    }

    const handleCreated = (e) => {
        // e.preventDefault();
        dispatch(filterCreated(e.target.value));
        setCurrentPage(1);
        history.push("/home");
      };

      const resetFilters = () => {
        dispatch(getAllPokemons());
        setCurrentPage(1);
        history.push("/home");
      };

     

    return <div className='filters'>
        <select className='filterAbc' onChange={(e) => handleOrderByAbc(e)}>
            <option className='option0' value="all">Alphabetical Order</option>
            <option className='option' value="asc">A to Z</option>
            <option className='option' value="desc">Z to A</option>
        </select>
        
        <select className='filterType' onChange={(e) => handleFilterType(e)}>
            <option className='option0' value="All">All Types</option>
            {
                types?.map( e => {
                    return <option className='option' value={e.name} key={e.id}>{e.name}</option>
                })
            }
        </select>
    
         <select className='filterStrength' onChange={(e) => handleOrderByPower(e)}> 
            <option className='option0' value="all">Strength Order</option>
            <option className='option' value="AttackAsc">Powerfull</option>
            <option className='option' value="AttackDesc">Weak</option>
        </select>

        <select onChange={(e) => handleCreated(e)}>
          <option hidden>Filter by</option>
          <option value="created">Created</option>
          <option value="api">API</option>
        </select>
        <div>
        <button onClick={() => history.push("/create")}>
          <header>CREATE</header>
        </button>

        <button  onClick={() => resetFilters()}>
        RESET FILTERS
      </button>
      </div>
    
<SearchBar setCurrentPage = {setCurrentPage} />
       
    </div>
    
}