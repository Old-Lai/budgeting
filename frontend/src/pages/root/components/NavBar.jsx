import { Link } from "react-router-dom";
import './navbar.sass';

export default function NavBar() {
  return (
    <nav>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/tools">Tools</Link>
        <Link to="/profile">Account</Link>
      </ul>
    </nav>
  )
}