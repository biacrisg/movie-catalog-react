import "./style.css";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMovies() {
      const response = await api.get("movie/now_playing", {
        params: {
          api_key: "fb6017ccd31260cb1b9aebcba9385506",
          language: "pt-BR",
          page: 1,
        },
      });

      setMovies(response.data.results.slice(0, 20));
      setLoading(false);
    }

    loadMovies();
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <h2>Carregando filmes...</h2>
      </div>
    );
  }

  return (
    <div className="home">
      <div className="list-movies">
        {movies.map((movie) => {
          return (
            <div className="list">
              <article key={movie.id}>
                <strong> {movie.title} </strong>
                <img
                  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                  alt="description"
                />
                <Link to={`/movie/${movie.id}`}> Acessar </Link>
              </article>
            </div>
          );
        })}
      </div>
      ;
    </div>
  );
}

export default Home;
