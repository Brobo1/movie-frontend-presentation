export async function fetchFavouritesOfUser(userId: number) {
  const data = await fetch(`https://localhost:44303/movie/${userId}`);
  return data.json();
}
