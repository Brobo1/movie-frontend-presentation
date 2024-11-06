export async function fetchMovies() {
  const data = await fetch("https://localhost:44303/movie");
  return await data.json();
}

export async function fetchMovieById(id: number) {
  const data = await fetch(`https://localhost:44303/movie/${id}`);
  return await data.json();
}
