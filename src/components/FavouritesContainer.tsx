import { Card } from "./Card.tsx";
import { useEffect, useState } from "react";
import "./CardContainer.css";
import { fetchFavouritesOfUser } from "../api/favourites.tsx";
import { fetchMovieById } from "../api/movies.tsx";

type Movie = {
  imgUrl: string;
  title: string;
};

type Movies = Movie[];

export function FavouritesContainer() {
  const [movies, setMovies] = useState<Movies>([]);

  useEffect(() => {
    async function fetch() {
      const fav = await fetchFavouritesOfUser(1);
      const movieList = [];
      for (const item of fav) {
        movieList.push(fetchMovieById(item.movieId));
      }
      const data = await Promise.all(movieList);
      setMovies(data);
    }

    fetch().catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div id="card-container">
        {movies.map((movie, index) => (
          <Card img={movie.imgUrl} title={movie.title} key={index}></Card>
        ))}
      </div>
    </>
  );
}
