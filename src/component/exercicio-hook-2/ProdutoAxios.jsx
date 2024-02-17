import React from 'react';

const ProdutoAxios = ({ data }) => {
  return (
    <div>
      <h4>{data.nome}</h4>
      <p>R$ {data.preco}</p>
    </div>
  );
};

export default ProdutoAxios;
