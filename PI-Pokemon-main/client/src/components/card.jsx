import React from "react";

export default function Card({ name, image, type, id }) {
  return (
    <div>
    <h3>{name}</h3>
    <h4>{id}</h4>
    <h5>{type.name}</h5>
    <img src={image} alt='img not found' width='200px' height='250px' />
    </div>
  )
}