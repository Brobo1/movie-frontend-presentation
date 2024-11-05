export async function fetchMovies() {
  const data = await fetch("https://localhost:44303/movie");
  return await data.json();
}
