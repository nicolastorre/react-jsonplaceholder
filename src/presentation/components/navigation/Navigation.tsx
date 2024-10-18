import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <Link to={"/"}>Home</Link>
      <Link to={"/todos"}>Todos</Link>
    </nav>
  );
}

export default Navigation;
