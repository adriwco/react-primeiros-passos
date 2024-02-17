import React, { useState } from 'react';
import Navabr from './defasio-react-iniciante/comp-desafio/Navabr';
import ButtonModal from './comp-hooks/ButtonModal';
import Modal from './comp-hooks/Modal';
import UseState_Fetch from './exercicio-hook-1/useState_Fetch';
import ExemploUseReducer from './comp-hooks/ExemploUseReducer';
import ExemploUseEffect from './comp-hooks/ExemploUseEffect';
import UseEffect_Axios from './exercicio-hook-2/UseEffect_Axios';

const Rooks = () => {
  const [ativo, setAtivo] = useState(false);
  const [dados, setDados] = useState({ nome: 'Adriano', idade: '23' });
  const [modal, setModal] = useState(false);

  function handleClick() {
    setAtivo(!ativo);
    setDados({ ...dados, faculdade: true });
  }

  return (
    <div>
      <header>
        <Navabr />
      </header>
      <h1>React Hooks</h1>

      <h2>useState()</h2>
      <p>{dados.nome}</p>
      <p>{dados.idade}</p>
      <p>{dados.faculdade ? 'Ativo' : 'Falso'}</p>
      <button onClick={handleClick}>{ativo ? 'Ativo' : 'Falso'}</button>

      <div>{modal ? 'modal aberta' : 'modal fechada'}</div>
      <Modal setModal={setModal} modal={modal} />
      <ButtonModal setModal={setModal} />

      <h3>Exercício useState</h3>
      <UseState_Fetch />

      <h3>Exemplo useReducer</h3>
      <ExemploUseReducer />

      <h2>useEffect</h2>
      <ExemploUseEffect />

      <h3>Exercício useEffect</h3>
      <UseEffect_Axios />
    </div>
  );
};

export default Rooks;
