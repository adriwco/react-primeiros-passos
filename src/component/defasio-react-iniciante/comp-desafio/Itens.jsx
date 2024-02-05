import React from 'react';
import Produtos from '../dadosD';
const Itens = () => {
  return (
    <>
      {Produtos.map((produto, id) => (
        <li key={id}>
          <h3>{produto.nome}</h3>
          <ul>
            {produto.propriedades.map((props, id) => (
              <li key={id}>{props}</li>
            ))}
          </ul>
        </li>
      ))}
    </>
  );
};

export default Itens;
