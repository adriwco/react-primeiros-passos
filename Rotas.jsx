import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Produtos from './src/component/defasio-react-iniciante/comp-desafio/Produtos';
import App from './src/App';
import Rooks from './src/component/Rooks';

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/hooks" element={<Rooks />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;
