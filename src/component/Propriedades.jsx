import React from 'react';

const Titulo = (props) => {
  return (
    <h2>
      {props.texto} + {props.children}
    </h2>
  );
};
const Titulo2 = (props) => {
  return <h2 style={{ color: props.cor }}>{props.texto}</h2>;
};
const Titulo3 = ({ cor, texto }) => {
  return <h2 style={{ color: cor }}>{texto}</h2>;
};

const Propriedades = () => {
  return (
    <section>
      <Titulo texto="teste de props 1">children</Titulo>
      <Titulo2 texto="teste de props 2 > multi" cor="red" />
      <Titulo3 texto="teste de props 3 > desestruturação " cor="blue" />
    </section>
  );
};

export default Propriedades;
