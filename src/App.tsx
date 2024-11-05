import "./App.css";
import { Card } from "./components/Card.tsx";
import { useEffect, useState } from "react";
import { fetchMovies } from "./api/movies.tsx";

type Movie = {
  imgUrl: string;
  title: string;
};

type Movies = Movie[];

function App() {
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
      {movies.map((movie) => (
        <div>
          <Card img={movie.imgUrl} title={movie.title}></Card>
        </div>
      ))}
    </>
  );
}

export default App;
