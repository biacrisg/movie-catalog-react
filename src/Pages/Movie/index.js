import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "./../../services/api";
import "./style.css";
import { toast } from "react-toastify";

function Movie() {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    async function loadMovie() {
      const response = await api.get(`movie/${id}`, {
        params: {
          api_key: "fb6017ccd31260cb1b9aebcba9385506",
          language: "pt-BR",
          page: 1,
        },
      });

      setMovie(response.data);
      setLoading(false);
    }
    loadMovie();
  }, []);

  function saveFavorite() {
    const myList = localStorage.getItem("@saveListMovie");
    let movies = JSON.parse(myList) || [];
    const hasMovies = movies.some((movies) => movies.id === movie.id);

    if (hasMovies) {
      toast.error("O filme já está em sua lista!");
      return;
    }
    movies.push(movie);
    localStorage.setItem("@saveListMovie", JSON.stringify(movies));
    toast.success("Salvo com sucesso");
  }

  if (loading) {
    return (
      <div className="movie-info">
        <h1> Carregando...</h1>
      </div>
    );
  }

  return (
    <div className="all">
      <div className="movie-unique">
        <strong> {movie.title} </strong>
        <div className="the-image">
          <img
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt="description"
          />
        </div>
        <div className="overview">
          <h4> {movie?.overview} </h4>
        </div>

        <div className="genders">
          <h5> Avaliação: {movie?.vote_average} </h5>
        </div>

        <div className="area-buttons">
          <button onClick={saveFavorite}>Salvar em favoritos</button>
          <button>
            <a
              target="blank"
              rel="external"
              href={`https://youtube.com/results?search_query=${movie.title} Trailer`}
            >
              Trailer
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Movie;
