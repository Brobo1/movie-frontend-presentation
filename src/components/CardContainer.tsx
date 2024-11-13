import { Card } from "./Card.tsx";
import { useEffect, useState } from "react";
import { fetchMovies } from "../api/movies.tsx";
import "./CardContainer.css";
import { fetchFavouritesOfUser } from "../api/favourites.tsx";
type Movie = {
  id: number;
  imgUrl: string;
  title: string;
};

type Favourite = {
  id: number;
  userId: number;
  movieId: number;
};

type Favourites = Favourite[];

type Movies = Movie[];

export function CardContainer() {
  const [movies, setMovies] = useState<Movies>([]);
  const [favourites, setFavourites] = useState<Favourites>([]);

  useEffect(() => {
    async function fetch() {
      const data = await fetchMovies();
      const fav = await fetchFavouritesOfUser(1);
      setMovies(data);
      setFavourites(fav);
    }
    fetch().catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div id="card-container">
        {movies.map((movie) => (
          <Card
            style={{
              backgroundColor: `${favourites.some((fav) => fav.movieId === movie.id) ? "#373737" : ""}`,
            }}
            img={movie.imgUrl}
            title={movie.title}
            key={movie.id}
          ></Card>
        ))}
      </div>
    </>
  );
}
