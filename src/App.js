import './App.css';

import { Routes, Route, NavLink } from "react-router-dom";
import './index.css';
import { Pokemons, Pokemon, Favorite, Types } from './containers/index'
import MainContext from "./contexts/MainContext";
import {useContext} from "react";

function App() {
    const { filter } = useContext(MainContext);

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
                              Accueil
                          </NavLink>
                          <NavLink
                              to="/pokemons"
                              className={({ isActive }) => (isActive ? "active" : "")}
                          >
                              Pokedex
                          </NavLink>
                          <NavLink
                              to="/favorite"
                              className={({ isActive }) => (isActive ? "active" : "")}
                          >
                              Favorite
                          </NavLink>
                          <NavLink
                              to="/types"
                              className={({ isActive }) => (isActive ? "active" : "")}
                          >
                              Types
                          </NavLink>
                      </li>
                  </ul>
              </nav>
          </header>
          <Routes >
              <Route path="/pokemons" element={<Pokemons/>} />
              <Route path="/pokemon/:name" element={<Pokemon/>} />
              <Route path="/favorite" element={<Favorite/>} />
              <Route path="/types" element={<Types/>} />
          </Routes>
      </div>
  );
}

export default App;
