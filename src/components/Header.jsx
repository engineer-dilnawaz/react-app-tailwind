import { Link, NavLink } from "react-router-dom";
import viteLogo from "/vite.svg";

export default function Header() {
  return (
    <header className="flex justify-between px-4 py-4 shadow-md md:px-8">
      <Link to="/">
        <img src={viteLogo} alt="app logo" />
      </Link>
      <ul className="flex gap-4">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-blue-400 underline" : ""
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-blue-400 underline" : ""
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-blue-400 underline" : ""
            }
          >
            Contact
          </NavLink>
        </li>
        <li>Sign In</li>
      </ul>
    </header>
  );
}
