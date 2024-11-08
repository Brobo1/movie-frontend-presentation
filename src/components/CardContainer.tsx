import { Card } from "./Card.tsx";
import { useEffect, useState } from "react";
import { fetchMovies } from "../api/movies.tsx";
import "./CardContainer.css";
type Movie = {
  id: number;
  imgUrl: string;
  title: string;
};

type Movies = Movie[];

export function CardContainer() {
  const [movies, setMovies] = useState<Movies>([]);

  useEffect(() => {
    async function fetch() {
      const data = await fetchMovies();
      setMovies(data);
    }
    fetch().catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div id="card-container">
        {movies.map((movie) => (
          <Card
            style={{ backgroundColor: "red" }}
            img={movie.imgUrl}
            title={movie.title}
            key={movie.id}
          ></Card>
        ))}
      </div>
    </>
  );
}
