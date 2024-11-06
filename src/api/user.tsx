export async function fetchUserById(userId: number) {
  const data = await fetch(`https://localhost:44303/user/${userId}`);
  return data.json();
}
