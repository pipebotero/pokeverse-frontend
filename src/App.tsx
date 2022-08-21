import React from "react";
import { Routes, Route, Link, BrowserRouter as Router } from "react-router-dom";
// import logo from "./logo.svg";
// import "./App.css";
import PokedexPage from "./pages/PokedexPage/PokedexPage";
import PokemonDetailPage from "./pages/PokemonDetailPage/PokemonDetailPage";
import BattlePage from "./pages/BattlePage/BattlePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
    return (
        <div className="App">
            {/* <Router> */}
                {/* <header className="App-header">
                    <h1>Holi</h1>
                    <nav>
                        <Link to="/pokedex">Pokedex</Link>
                        <Link to="/battle">Batalla</Link>
                    </nav>
                </header> */}
                <PokedexPage />
                {/* <Routes>
                    <Route path="pokedex" element={<PokedexPage />} />
                    <Route path="pokedex/:pokemonId" element={<PokemonDetailPage />} />
                    <Route path="battle" element={<BattlePage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes> */}
            {/* </Router> */}
            
        </div>
    );
}

export default App;
