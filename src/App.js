import React, { useState } from 'react';
import { Form } from '@unform/web';
import './App.css';

import Input from './components/Form/Input';

const initialData = {
  name: 'mask',
}

function App() {

  function handleSubmit(data){
    console.log(data.name);
  }

  return (
    <div className="App">
      <Form initialData={initialData} onSubmit={handleSubmit}>
        <Input type="text" name="name" />
        <Input type="email" name="email" />
        <Input type="password" name="password" />

        <button type="submit">Enviar</button>
      </Form>
    </div>
  );
}

export default App;
