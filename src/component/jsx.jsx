const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
  ],
  ativa: true,
};

const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' },
  ],
  ativa: false,
};

const calc = (dados) => {
  return dados.compras.reduce((total, valor) => {
    return (
      total + parseFloat(valor.preco.replace('R$', '').trim().replace(',', '.'))
    );
  }, 0);
};

const Jsx1e2 = () => {
  const dados = luana;
  return (
    <>
      <h1>JSX</h1>
      <h2>Nome: {dados.cliente}</h2>
      <p>Idade: {dados.idade}</p>
      <p>
        Situação:{' '}
        <span style={{ color: dados.ativa ? 'green' : 'red' }}>
          {dados.ativa ? 'Ativa' : 'Inativa'}
        </span>
      </p>
      <p>
        total gasto:{' '}
        {new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(calc(dados))}
      </p>
      {calc(dados) > 10000 && <p>Situação OFF</p>}
    </>
  );
};

export default Jsx1e2;
