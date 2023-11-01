import React, { useState } from 'react';
import Card from "./Card";

function App() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [error, setError] = useState('');
  const [formData, setFormData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();


    if (input1.length < 3 || input1.trim() === '') {

      setError(
        'Por favor chequea que la información sea correcta');
      return;
    }

    if (input2.length < 6) {
      setError('Por favor chequea que la información sea correcta');
      return;
    }

    setFormData({ input1, input2 });

    setError('');
  };

  return (
    <div className="App">
      <h1>Formulario acerca de peliculas</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Ingrese su nombre:</label>
          <input
            type="text"
            value={input1}
            onChange={(e) => setInput1(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label>Pelicula Favorita:</label>
          <input
            type="text"
            value={input2}
            onChange={(e) => setInput2(e.target.value)}
          />
        </div>
        <br />
        <button type="submit">Enviar</button>
      </form>
      
      {error && <p>{error}</p>}
      {formData && (
        <div className="card">
          {formData && <Card data={formData} />}
        </div>
      )}
    </div>
  );
}

export default App;

