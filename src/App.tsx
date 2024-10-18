import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./presentation/routes/AppRoutes";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
