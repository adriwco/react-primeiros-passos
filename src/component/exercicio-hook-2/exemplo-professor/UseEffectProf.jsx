import React, { useEffect, useState } from 'react';
import ProdutoProf from './ProdutoProf';

const UseEffectProf = () => {
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    const produtoLocal = window.localStorage.getItem('produto');
    if (produtoLocal !== null) setProduto(produtoLocal);
  }, []);

  useEffect(() => {
    if (produto !== null) window.localStorage.setItem('produto', produto);
  }, [produto]);

  function handleClick({ target }) {
    setProduto(target.innerText);
  }

  return (
    <div>
      <h4>Preferência: {produto}</h4>
      <button
        type="button"
        style={{ marginRight: '1rem' }}
        onClick={handleClick}
      >
        notebook
      </button>
      <button type="button" onClick={handleClick}>
        smartphone
      </button>
      <ProdutoProf produto={produto} />
    </div>
  );
};

export default UseEffectProf;
