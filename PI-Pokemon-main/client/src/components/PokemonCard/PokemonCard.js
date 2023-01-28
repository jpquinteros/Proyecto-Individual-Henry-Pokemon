import { NavLink } from "react-router-dom";

export function PokemonCard({ name, image, type, id}) {
  return (
    <div key = {id}>
      <NavLink to = {`/home/${id}`}>
        <h2>{id}</h2>
        <h3 key = {name}>{name}</h3>
          {type && type.map((e) => {
            return (
            <h4 key = {e.name}>{e.name}</h4>
            );
          })}
      
        <img src={image} alt={name} width="200px" height="250px" />
      </NavLink>
    </div>
  );
}

