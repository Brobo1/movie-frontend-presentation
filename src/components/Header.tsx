import "./Header.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchUserById } from "../api/user.tsx";

type User = {
  username: string;
  password: string;
  email: string;
};

export function Header() {
  const [user, setUser] = useState<User>();
  useEffect(() => {
    const fetch = async function () {
      setUser(await fetchUserById(1));
    };
    fetch().catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="header">
        <nav>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/Favourites"}>{user ? user.username : "Loading"}</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
