import { NavLink } from "react-router-dom";
import style from './PokemonCard.module.css'

export function PokemonCard({ name, image, type, id}) {
  return (
    <div className={style.columnas}>
    <div className={`${style.pokeCard}`} key = {id}>
      <NavLink to = {`/home/${id}`}>
        <h3 className={style.name} key = {name}>{name}</h3>
        <h3 className ={style.id}>{id}</h3>
          {type && type.map((e) => {
            return (
            <h4 className={style.type} key = {e.name}>{e.name}</h4>
            );
          })}
      
        <img className={style.img} src={image} alt={name} width="100px" height="150px" />
      </NavLink>
    </div>
    </div>
  );
}

