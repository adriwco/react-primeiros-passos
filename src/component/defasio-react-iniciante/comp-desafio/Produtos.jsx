import React from 'react';
import Navabr from './Navabr';
import TituloD from './TituloD';
import Itens from './Itens';

const Produtos = () => {
  return (
    <>
      <header>
        <Navabr />
        <TituloD>Produtos</TituloD>
      </header>
      <main>
        <ul>
          <Itens />
        </ul>
      </main>
    </>
  );
};

export default Produtos;
