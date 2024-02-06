import React, { useState } from 'react';
import Navabr from './defasio-react-iniciante/comp-desafio/Navabr';
import ButtonModal from './comp-hooks/ButtonModal';
import Modal from './comp-hooks/Modal';
import UseState_Fetch from './exercicio-hook-1/useState_Fetch';

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

      <h2>Exercício useState</h2>
      <UseState_Fetch />
    </div>
  );
};

export default Rooks;
