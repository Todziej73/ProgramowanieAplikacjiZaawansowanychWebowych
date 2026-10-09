import { useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const waluty = [
  "Złoty",
  "Euro",
  "Dolar",
  "Funt",
  "Frank",
];

function Pozycja({ nazwa }) {
  return <li>{nazwa}</li>;
}

export default function App() {
  // 4. Refy do pól niekontrolowanych
  const imieNazwiskoRef = useRef();
  const numerRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const imieNazwisko = imieNazwiskoRef.current.value;
    const numer = parseInt(numerRef.current.value, 10);

    console.log("Imię i nazwisko:", imieNazwisko);

    const wybranaWaluta = waluty[numer - 1];

    if (wybranaWaluta) {
      console.log("Wybrana waluta:", wybranaWaluta);
    } else {
      console.log("Nieprawidłowy numer waluty");
    }
  };

  return (
    <div className='p-2'>
      <h2>Liczba walut: {waluty.length}</h2>

      {/* 3. Ponumerowana lista z użyciem .map() */}
      <ol>
        {waluty.map((pozycja, index) => (
          <Pozycja key={index} nazwa={pozycja} />
        ))}
      </ol>

      {/* 4. Formularz */}
      <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="imie">Imię i nazwisko:</label><br />
          <input 
            type="text" 
            id="imie" 
            ref={imieNazwiskoRef} 
            required 
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="numer">Numer waluty:</label><br />
          <input 
            type="number" 
            id="numer" 
            ref={numerRef} 
            required 
          />
        </div>

        <button type="submit" className='btn btn-primary'>Zatwierdź wybór</button>
      </form>
    </div>
  );
}