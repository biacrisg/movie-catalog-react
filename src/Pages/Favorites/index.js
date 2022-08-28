import "./style.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Favorites() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const myList = localStorage.getItem("@saveListMovie");
    setMovies(JSON.parse(myList) || []);
  }, []);

  function removeFavorite(id) {
    let filterMovies = movies.filter((item) => {
      return item.id !== id;
    });

    setMovies(filterMovies);
    localStorage.setItem("@saveListMovie", JSON.stringify(filterMovies));
    toast.success("Filme removido");
  }

  return (
    <div className="meus-filmes">
      <h1>Meus filmes</h1>

      {movies.length === 0 && <span>Não há favoritos!</span>}
      <ul>
        {movies.map((item) => {
          return (
            <li key={item.id}>
              <span>{item.title}</span>
              <div className="list">
                <Link to={`/movie/${item.id}`}> Detalhes </Link>
                <button onClick={() => removeFavorite(item.id)}>Remover</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Favorites;
