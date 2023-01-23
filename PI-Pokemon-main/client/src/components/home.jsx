import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { getAllPokemons } from "../actions";
import { Link } from "react-router-dom";
import Card from "./Card";
import { pruebaAction } from "../actions";

export default function Home(){
    const dispatch = useDispatch()
    const allPokemons = useSelector((state) => state.pokemons);
    console.log(allPokemons)
    
    useEffect (()=>{
        dispatch(getAllPokemons());

    }, [dispatch])

    function handlerClick(e){
        e.preventDefault();
        dispatch(getAllPokemons);
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
                <select>
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
                {!allPokemons.length?<div><h1>Pokemons not found</h1></div>:
                   allPokemons.map((e) =>{
                    return (
                        <fragment>
                            <Link to={'/home/'}>
                                <Card key={e.id} name={e.name} image={e.image} type={e.type} />
                            </Link>
                        </fragment>
                    )
                })

                }
            <button onClick={()=> dispatch(getAllPokemons()) }>Boton de prueba</button>
            </div>
        </div>
    )

}


// const Home = () => {
//     const [currentPage, setCurrentPage] = useState(1);
//     const getPokemons = getAllPokemons()
//     return (
//         <div>
//             <h1>
//                 {getPokemons.map((elemento) => {
//                     return (
//                         <div>
//                             {elemento.name}
//                         </div>
//                     )
//                  }
//                 )}
//             </h1>
//         </div>
//     )
// }

// export default Home;
