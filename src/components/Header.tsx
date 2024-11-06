import "./Header.css";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <>
      <div className="header">
        <nav>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/Favourites"}>Username</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
