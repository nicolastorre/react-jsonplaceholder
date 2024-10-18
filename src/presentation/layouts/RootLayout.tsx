import { Outlet } from "react-router-dom";
import Navigation from "../components/navigation/Navigation";

function RootLayout() {
  return (
    <div>
      <div id="nav">
        <Navigation />
      </div>
      <div id="main">
        <Outlet />
      </div>
    </div>
  );
}

export default RootLayout;
