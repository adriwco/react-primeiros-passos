import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Produtos from './src/component/defasio-react-iniciante/comp-desafio/Produtos';
import App from './src/App';

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/produtos" element={<Produtos />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;
