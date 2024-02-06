import React from 'react';
import Jsx1e2 from './component/jsx';
import Arrays from './component/arrays';
import Atalhos from './component/Atalhos';
import Propriedades from './component/Propriedades';
import Form from './component/Form/Form';
import IndexDesafio1 from './component/defasio-react-iniciante/IndexDesafio1';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <div>
        <IndexDesafio1 />
      </div>
      <div>
        <Jsx1e2 />
      </div>
      <div>
        <Arrays />
      </div>
      <div>
        <Atalhos />
      </div>
      <div>
        <Propriedades />
      </div>
      <div>
        <Form />
      </div>
    </div>
  );
};

export default App;
