import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ProdutoProf = ({ produto }) => {
  const [dados, setDados] = useState(null);
  useEffect(() => {
    if (produto !== null)
      axios
        .get(`https://ranekapi.origamid.dev/json/api/produto/${produto}`)
        .then((responde) => {
          setDados(responde.data);
        })
        .catch((error) => {
          console.log(`Obter dados > erro > ${error}`);
        });
  }, [produto]);

  if (dados === null) return null;
  return (
    <div>
      <h4>{dados.nome}</h4>
      <p>R$ {dados.preco}</p>
    </div>
  );
};

export default ProdutoProf;
