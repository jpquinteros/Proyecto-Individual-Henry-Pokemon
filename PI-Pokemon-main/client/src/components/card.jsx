import React from "react";

export default function Card({ name, image, type, id }) {
  return (
    <div>
      <ul>
        <li>{name}</li>
        <li>{id}</li>
        <li>
          {type.map((e) => {
            return <li>{e.name}</li>;
          })}
        </li>
        <img src={image} alt="img not found" width="200px" height="250px" />
      </ul>
    </div>
  );
}