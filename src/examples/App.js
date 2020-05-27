import React from 'react';
import ReactFinalForm from '../lib/components/Form/Form';
import MuiInput from '../lib/components/MuiInput/MuiInput';
import Select from '../lib/components/MuiSelect/MuiSelect';
import MuiCheckBox from '../lib/components/MuiCheckBox/MuiCheckBox';
import MuiRadio from '../lib/components/MuiRadio/MuiRadio';
import HTMLInput from '../lib/components/HTMLInput/HTMLInput';
import HTMLRadio from '../lib/components/HTMLRadio/HTMLRadio';

import Submit from '../lib/components/Submit/Submit';
import {
  Form,
  MuiInput,
  MuiSelect,
  MuiCheckBox,
  MuiRadio,
  MuiSubmit,
} from '../lib/index.mjs';

const onSubmit = async (values) => {
  await setTimeout(() => {
    console.log('woooooo', values);
  }, 20);
  return true;
};

const App = () => (
  <Form
    onSubmit={onSubmit}
  >
    <div style={{ textAlign: 'center' }}>
      <MuiInput
        name="thing"
        label="thing"
      />
    </div>
    <MuiInput
      name="thing"
      label="thing"
    />
    <MuiSubmit />
  </Form>
);

export default App;
