import React from 'react';
import Button from './Button';
import Input from './Input';

const Form = () => {
  return (
    <div>
      <h2>Exemplo rest e spread</h2>
      <Input id="email" label="Email" required />
      <Input id="password" type="password" label="Password" />
      <Button />
    </div>
  );
};

export default Form;
