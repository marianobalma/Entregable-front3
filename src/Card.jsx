

import React from 'react';

function Card({ data }) {
  return (
    <div className="card">
      <h2>Card</h2>
      <p>Nombre completo: {data.input1}</p>
      <p>Pelicula Favorita: {data.input2}</p>
    </div>
  );
}

export default Card;
