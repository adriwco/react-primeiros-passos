import React from 'react';

const ProdutoE = ({ productData }) => {
  return (
    <div>
      <h3>Produto: {productData.nome}</h3>
      <p>Preço: R${productData.preco}</p>
      <p>Descrição: {productData.descricao}</p>
      <img
        style={{ maxWidth: '200px' }}
        src={productData.fotos[0].src}
        alt={productData.fotos[0].titulo}
      />
    </div>
  );
};

export default ProdutoE;
