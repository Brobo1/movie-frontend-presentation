import "./Header.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchUserById } from "../api/user.tsx";

type User = {
  id: number;
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
        <div className={"user"}>{user ? user.username : "loading"}</div>
        <nav>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/Favourites"}>Favourites</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
