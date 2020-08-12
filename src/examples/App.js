import React from 'react';

import HTMLForm from './components/HTMLForm/HTMLForm';
import MuiForm from './components/MuiForm/MuiForm';
import TelephoneInputForm from './components/TelephoneInputForm/TelephoneInputForm';
import FileInputForm from './components/FileInputForm/FileInputForm';
import FieldArrayForm from './components/FieldArrayForm/FieldArrayForm';

const App = () => (
  <>
    <MuiForm />
    <HTMLForm />
    <FileInputForm />
    <TelephoneInputForm />
    <FieldArrayForm />
  </>
);

export default App;
