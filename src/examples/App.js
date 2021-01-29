import React from 'react';

import HTMLForm from './components/HTMLForm/HTMLForm';
import MuiForm from './components/MuiForm/MuiForm';
import FormRender from './components/FormRender/FormRender';
import TelephoneInputForm from './components/TelephoneInputForm/TelephoneInputForm';
import FileInputForm from './components/FileInputForm/FileInputForm';
import FieldArrayForm from './components/FieldArrayForm/FieldArrayForm';
import FieldArrayRender from './components/FieldArrayRender/FieldArrayRender';
import InputTest from '../lib/components/InputTest/InputTest';

const App = () => (
  <>
    <MuiForm />
    <FormRender />
    <HTMLForm />
    <FileInputForm />
    <TelephoneInputForm />
    <FieldArrayForm />
    <FieldArrayRender />
    <InputTest />
  </>
);

export default App;
