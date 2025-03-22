import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Pokemon from "./comp/Pokemon";
import PokemonSearch from "./comp/PokemonSearch";
import { ThemeContextProvider } from "./context/ThemeContextProvider";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Pokemon List</Link>
          </li>
          <li>
            <Link to="/search">Search Pokemon</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Pokemon />} />
        <Route path="/search" element={<PokemonSearch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
