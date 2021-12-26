import './App.css';

import { Routes, Route, NavLink } from "react-router-dom";
import './index.css';
import { Pokemons, Pokemon, Favorite, Types, PokemonPerType, ContactPage, Home, Consigne } from './containers'
import MainContext from "./contexts/MainContext";
import {useContext} from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function App() {
    const { filter } = useContext(MainContext);

  return (
      <>
          <header className={""}>
              <nav className="bg-gray-800">
                  <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                      <div className="relative flex items-center justify-between h-16">
                          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                              <div className="hidden sm:block sm:ml-6">
                                  <div className="flex space-x-4">
                                      <NavLink
                                          to="/"
                                          className={({ isActive }) => (isActive ? "bg-gray-900 text-slate-50 " :
                                              'text-gray-300 hover:bg-gray-700 hover:text-slate-50') +
                                              'px-3 py-2 rounded-md text-sm font-medium'}
                                      >
                                          Accueil
                                      </NavLink>
                                      <NavLink
                                          to="/pokemons"
                                          className={({ isActive }) => (isActive ? "bg-gray-900 text-slate-50 " :
                                              'text-gray-300 hover:bg-gray-700 hover:text-slate-50') +
                                              'px-3 py-2 rounded-md text-sm font-medium'}
                                      >
                                          Pokedex
                                      </NavLink>
                                      <NavLink
                                          to="/favorite"
                                          className={({ isActive }) => (isActive ? "bg-gray-900 text-slate-50 " :
                                              'text-gray-300 hover:bg-gray-700 hover:text-slate-50') +
                                              'px-3 py-2 rounded-md text-sm font-medium'}
                                      >
                                          Favorite
                                      </NavLink>
                                      <NavLink
                                          to="/types"
                                          className={({ isActive }) => (isActive ? "bg-gray-900 text-slate-50 " :
                                              'text-gray-300 hover:bg-gray-700 hover:text-slate-50') +
                                              'px-3 py-2 rounded-md text-sm font-medium'}
                                      >
                                          Types
                                      </NavLink>
                                      <NavLink
                                          to="/contact"
                                          className={({ isActive }) => (isActive ? "bg-gray-900 text-slate-50 " :
                                              'text-gray-300 hover:bg-gray-700 hover:text-slate-50') +
                                              'px-3 py-2 rounded-md text-sm font-medium'}
                                      >
                                          Contact
                                      </NavLink>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </nav>
          </header>
          <Routes >
              <Route path="/" element={<Home/>} />
              <Route path="/pokemons" element={<Pokemons/>} />
              <Route path="/pokemon/:name" element={<Pokemon/>} />
              <Route path="/pokemons/type/:type_name" element={<PokemonPerType/>} />
              <Route path="/favorite" element={<Favorite/>} />
              <Route path="/types" element={<Types/>} />
              <Route path="/contact" element={<ContactPage/>} />
              <Route path="/consign" element={<Consigne/>} />
          </Routes>
      </>
  );
}

export default App;
