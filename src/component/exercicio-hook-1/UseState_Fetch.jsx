import axios from 'axios';
import React, { useState } from 'react';
import ProdutoE from './comp-ex-1/ProdutoE';
// Os links abaixo puxam dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado

const UseState_Fetch = () => {
  const url = 'https://ranekapi.origamid.dev/json/api/produto/';

  const [productData, setProductData] = useState(null);
  const [loading, setLoading] = useState(null);

  async function getAllDate(produto) {
    setLoading(true);
    try {
      const response = await axios.get(`${url}${produto}`);
      setProductData(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  function handleClick(event) {
    getAllDate(event.target.innerText);
  }

  return (
    <>
      <button onClick={handleClick} style={{ marginRight: '20px' }}>
        notebook
      </button>
      <button onClick={handleClick} style={{ marginRight: '20px' }}>
        smartphone
      </button>
      <button onClick={handleClick}>tablet</button>

      {loading && <p>Carregando...</p>}
      {!loading && productData && <ProdutoE productData={productData} />}
    </>
  );
};

export default UseState_Fetch;
