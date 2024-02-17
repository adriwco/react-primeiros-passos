import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProdutoUseEffect from './ProdutoUseEffect';

const ExemploUseEffect = () => {
  const [contar, setContar] = useState(0);
  const [dados, setDados] = useState(null);
  const [ativo, setAtivo] = useState(false);

  useEffect(() => {
    console.log('1º rederização');
  }, []);

  useEffect(() => {
    document.title = `Total = ${contar}`;
  }, [contar]);

  useEffect(() => {
    axios
      .get('https://ranekapi.origamid.dev/json/api/produto/notebook')
      .then((responde) => {
        setDados(responde.data);
      })
      .catch((error) => {
        console.log(`Obter dados > erro > ${error}`);
      });
  }, []);

  useEffect(() => {
    // fora de do useEffect e sem return vai adicionar o evento nop windows toda vez que redenrizar
    // Elements > Event Listeners > ancestors = on
    /*
    O retorno da função dentro do useEffect é usado para realizar a limpeza de efeitos secundários. Quando você fornece um array vazio como segundo argumento para o useEffect, ele será executado apenas uma vez após a montagem do componente e, em seguida, a função de retorno será usada para limpar quaisquer efeitos que precisem ser desfeitos quando o componente for desmontado.

    No caso do meu código, o return está removendo o event listener scroll que foi adicionado quando o componente foi montado. Isso significa que o evento de rolagem será observado enquanto o componente estiver montado e o listener será removido assim que o componente for desmontado, garantindo que não haja vazamentos de memória ou comportamento inesperado.

    Se eu remover o return, o event listener continuará ativo mesmo após o componente ser desmontado, o que pode causar problemas de performance e de memória, pois o listener ainda estaria em execução, mesmo sem o componente para utilizá-lo.

    function handleScroll(event) {
      console.log(event);
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    */
  }, []);

  return (
    <>
      <button type="button" onClick={() => setContar(contar + 1)}>
        {contar}
      </button>

      <div>
        {dados && (
          <div>
            <h4>{dados.nome}</h4>
            <p>R$ {dados.preco * contar}</p>
          </div>
        )}
      </div>

      <button type="button" onClick={() => setAtivo(!ativo)}>
        Ativar
      </button>
      {ativo && <ProdutoUseEffect />}
    </>
  );
};

export default ExemploUseEffect;
