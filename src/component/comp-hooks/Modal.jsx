import React, { useState } from 'react';

const Modal = ({ modal, setModal }) => {
  const [contar, setContar] = useState(1);
  const [item, setItem] = useState(['Item 1']);

  const handleClick = () => {
    setContar(contar + 1);
    setItem([...item, 'Item ' + (contar + 1)]);
  };

  const removeItem = () => {
    setContar((contar) => contar - 1);
    const newItem = [...item];
    newItem.pop();
    setItem(newItem);
  };

  if (modal === true)
    return (
      <div>
        Modal. <button onClick={() => setModal(false)}>Fechar</button>
        <div>
          {item.map((item, id) => (
            <li key={id}>{item}</li>
          ))}
          <button onClick={handleClick}>Add Item (Qtd: {contar})</button>
          <button
            onClick={removeItem}
            style={{ marginLeft: '20px', marginBottom: '20px' }}
          >
            Remover
          </button>
        </div>
      </div>
    );
  return null;
};

export default Modal;
