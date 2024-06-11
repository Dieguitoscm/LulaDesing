import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MostrarProducto from "./MostrarProducto";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { Footer } from "./components/footer";
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<h1>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</h1>} />
      <Route path='/Footer' element={<Footer></Footer>} />
</>)
);
function App() {
  return (
    // <>
    
    //   <MostrarProducto />
    // </>
    <RouterProvider router={router} />
  );
}

export default App;
