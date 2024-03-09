import { Link } from "react-router-dom";
import "./logo.scss";

function Logo() {
  return (
    <Link to="/" className="logo">
      <span>NuTri</span>
      <span>On</span>
    </Link>
  );
}

export default Logo;
