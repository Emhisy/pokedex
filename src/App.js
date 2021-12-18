import './App.css';

import { Routes, Route, NavLink } from "react-router-dom";

import './index.css';
import { Pokemons, Pokemon } from './containers/index'

function App() {
  return (
      <div className={""}>
          <header>
              <nav>
                  <ul>
                      <li>
                          <NavLink
                              to="/"
                              className={({ isActive }) => (isActive ? "active" : "")}
                          >
                              Pokedex
                          </NavLink>
                      </li>
                  </ul>
              </nav>
          </header>
          <Routes>
              <Route path="/" element={<Pokemons/>} />
              <Route path="pokemon/:name" element={<Pokemon/>} />
          </Routes>
      </div>
  );
}

export default App;
