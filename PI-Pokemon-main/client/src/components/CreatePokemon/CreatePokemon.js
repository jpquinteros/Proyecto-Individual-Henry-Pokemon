
import React, { useState,useEffect } from 'react';
import { useDispatch,useSelector }from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { getAllPokemons, createPokemon,getTypes } from '../../redux/actions';
import style from './CreatePokemon.module.css'

const CreateForm=function(){
    const[input,setInput]=useState({
        name: "",
        hp: 0,
        attack: 0,
        defense: 0,
        speed: 0,
        height: 0,
        weight: 0,
        type1: "",
        type2: "",
        image: "",
      });

      const [error, setError] = useState({});

      const dispatch = useDispatch();
      const types = useSelector((state) => state.types);
      const pokemons = useSelector((state) => state.pokemons);
      const history = useHistory();

      useEffect(() => {
        dispatch(getTypes());
        dispatch(getAllPokemons());
      }, [dispatch]);


      let symbols = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
      let decimals = /^\d*\.\d+$/;
      let accents = /^[a-zA-Z]+$/;
      //Funciones controladoras
      function formValidate(input) {
        let error = {};
        if (!input.name.trim()) {
          error.name = "Name require. can't be empty";
        } else if (!symbols.test(input.name.trim())) {
          error.name = "Name only can be letters";
        } else if (!accents.test(input.name)) {
          error.name = "Name must not have any Accents or Spaces";
        }
        if (decimals.test(input.hp)) {
          error.name = "HP may not have a decimal number";
        }
        if (decimals.test(input.attack)) {
          error.name = "Attack may not have decimal numbers";
        }
        if (decimals.test(input.defense)) {
          error.name = "Defense may not have decimal numbers";
        }
        if (decimals.test(input.height)) {
          error.name = "Height may not have decimal numbers";
        }
        if (decimals.test(input.weight)) {
          error.name = "Weight may not have decimal numbers";
        }
        return error;
      }


      const handleChange = (e) => {
        const { name, value } = e.target;
    
        setInput({
          ...input,
          [name]: value,
        });
    
        setError(
          formValidate({
            ...input,
            [name]: value,
          })
        );
      };
    
      const handleType1 = (e) => {
        const { value } = e.target;
        setInput({
          ...input,
          type1: value,
        });
      };
    
      const handleType2 = (e) => {
        const { value } = e.target;
        setInput({
          ...input,
          type2: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if (!error.name) {
          dispatch(createPokemon(input));
          setInput({});
          alert("check your new Pokémon");
          history.push("/home");}
      };
    
      return (
        <div className={style.body}>
          <div className={style.title}><h1>CREATE YOUR OWN POKEMON</h1></div>
          <label hidden={!error.name ? true : false} >
            {error.name}
          </label>
          <div className={style.form}>
          <form  onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              onChange={(e) => handleChange(e)}
              value={input.name}
              placeholder="Name"
            />
            <br></br>
            <label htmlFor="hp">HP</label>
            <input
              type="number"
              name="hp"
              min="0"
              max="99"
              onChange={(e) => handleChange(e)}
              value={input.hp}
            />
            <br></br>
            <label htmlFor="attack">Attack</label>
            <input
              type="number"
              name="attack"
              min="0"
              max="99"
              onChange={(e) => handleChange(e)}
              value={input.attack}
            />
            <br></br>
            <label htmlFor="defense">Defense</label>
            <input
              type="number"
              name="defense"
              min="0"
              max="99"
              onChange={(e) => handleChange(e)}
              value={input.defense}
            />
            <br></br>
            <label htmlFor="height">Height</label>
            <input
              type="number"
              name="height"
              min="0"
              max="99"
              onChange={(e) => handleChange(e)}
              value={input.height}
            />
            <br></br>
            <label htmlFor="weight">Weight</label>
            <input
              type="number"
              name="weight"
              min="0"
              max="99"
              onChange={(e) => handleChange(e)}
              value={input.weight}
            />
            <br></br>
            <label htmlFor="speed">Speed</label>
            <input
              type="number"
              name="speed"
              min="0"
              max="99"
              onChange={(e) => handleChange(e)}
              value={input.speed}
            />
            <br></br>
            <label>Select your first type for your Pokemon</label>
            <select onChange={(e) => handleType1(e)}>
              <option hidden>Type 1</option>
              {types &&
                types.map((type) => {
                  return (
                    <option key={type.id} value={type.name}>
                      {type.name.charAt(0).toUpperCase() + type.name.substring(1)}
                    </option>
                  );
                })}
            </select>
            <br></br>
            <label>Select your second type for your Pokemon</label>
            <select onChange={(e) => handleType2(e)}>
              <option hidden>Type2</option>
              {types &&
                types
                  .filter((inp) => inp.name !== input.type1)
                  .map((t) => {
                    return (
                      <option key={t.id} value={t.name}>
                        {t.name.charAt(0).toUpperCase() + t.name.substring(1)}
                      </option>
                    );
                  })}
            </select>
            <br></br>
            <label htmlFor='image'>Image</label>
            <input type="text" 
            name="image" 
            placeholder="Paste your URL!" 
            value={input.image}
            onChange={(e) => handleChange(e)} />
            <button
              type="submit"
              disabled={!input.name ? true : false}
              // hidden={!input.name ? true : false}
            >
              <span>Create</span>
            </button>
            <br></br>
          </form>
          </div>
          <div className={style.button}>
            <Link to={"/home"}>
              <button>Go back home</button>
            </Link>
          </div>
        </div>
      );
    };
    
    export default CreateForm;


