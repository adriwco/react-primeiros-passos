// Organize os produtos como mostrado no vídeo
// Mostre apenas produtos que forem mais caros que R$ 1500
const produtos = [
  {
    id: 1,
    nome: 'Smartphone',
    preco: 'R$ 2000',
    cores: ['#29d8d5', '#252a34', '#fc3766'],
  },
  {
    id: 2,
    nome: 'Notebook',
    preco: 'R$ 3000',
    cores: ['#ffd045', '#d4394b', '#f37c59'],
  },
  {
    id: 3,
    nome: 'Tablet',
    preco: 'R$ 1500',
    cores: ['#365069', '#47c1c8', '#f95786'],
  },
];

const Arrays = () => {
  return (
    <>
      <h1>Arrays</h1>
      {produtos
        .filter(
          (produto) => parseFloat(produto.preco.replace('R$ ', '')) > 1500,
        )
        .map((produto) => (
          <div key={produto.id}>
            <h2>{produto.nome}</h2>
            <p>Preço: R${produto.preco}</p>
            <ul>
              {produto.cores.map((cor, index) => (
                <li key={index} style={{ background: cor, color: '#fff' }}>
                  {cor}
                </li>
              ))}
            </ul>
          </div>
        ))}
    </>
  );
};
export default Arrays;
