import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProdutoAxios from './produtoAxios';
import UseEffectProf from './exemplo-professor/UseEffectProf';

const UseEffect_Axios = () => {
  // Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
  // https://ranekapi.origamid.dev/json/api/produto/notebook
  // https://ranekapi.origamid.dev/json/api/produto/smartphone
  // Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
  // Defina o produto clicado como uma preferência do usuário no localStorage
  // Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo

  const [pref, setPref] = useState(localStorage.getItem('pref') || null);
  const [data, setData] = useState(null);

  const url = 'https://ranekapi.origamid.dev/json/api/produto/';

  const hadleClick = (event) => {
    const selectedPref = event.target.innerText;
    setPref(selectedPref);
    localStorage.setItem('pref', selectedPref);
  };

  useEffect(() => {
    axios
      .get(`${url}${pref != null ? pref : ''}`)
      .then((responde) => {
        setData(responde.data);
      })
      .catch((error) => {
        console.log(`Obter dados > erro > ${error}`);
      });
  }, [pref]);

  return (
    <div>
      <h4>Preferência: {pref}</h4>
      <button
        onClick={hadleClick}
        type="button"
        style={{ marginRight: '1rem' }}
      >
        notebook
      </button>
      <button onClick={hadleClick} type="button">
        smartphone
      </button>

      {data !== null && data.nome && data.preco && <ProdutoAxios data={data} />}

      <h4>Exemplo do professor (useEffect)</h4>
      <UseEffectProf />
    </div>
  );
};

export default UseEffect_Axios;
