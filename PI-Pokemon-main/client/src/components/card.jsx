import React from "react";

export default function Card({ name, image, type, id }) {
  return (
    <div>
        <h3>{name}</h3>
        <h4>{id}</h4>
         {type?.map((a) => {
            return (<p>{a.name}</p>);
          })}
        <img src={image} alt={name} width="200px" height="250px" />
    </div>
  );
}