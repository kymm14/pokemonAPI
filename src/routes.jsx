import React from "react";
import { Route, Routes } from "react-router";
import { Navigate } from "react-router-dom";

// pages
import PokemonDetail from "./pages/PokemonDetail";
import PokemonPage from "./pages/PokemonPage";
import Page404 from "./pages/Page404";

export default function Router() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<PokemonPage />} />
        <Route path='/detail' element={<PokemonDetail />} />
        <Route path='/404' element={<Page404 />} />
        <Route path='*' element={<Navigate to='/404' />} />
      </Routes>
    </div>
  );
}
