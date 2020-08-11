import React from 'react';
import Card from '@material-ui/core/Card';
import {
  Form,
  MuiInput,
  MuiSelect,
  MuiCheckbox,
  MuiRadio,
  MuiSubmit,
} from '../../../lib/index';

const cars = [{
  make: 'Honda',
  modle: 'rsx',
  trim: 'type s',
  year: 2002,
}, {
  make: 'Subaru',
  modle: 'impreza',
  trim: 'sti',
  year: 2007,
}, {
  make: 'Nissan',
  modle: '240SX',
  trim: 'LE',
  year: 1998,
}, {
  make: 'Toyota',
  modle: 'Supra',
  trim: 'turbo',
  year: 1998,
}];

const MuiForm = () => {
  const onSubmitMuiForm = async (values) => {
    console.log('onSubmitMuiForm values', values);
  };

  return (
    <Card>
      <Form
        onSubmit={onSubmitMuiForm}
      >
        <MuiInput name="name" label="name" />
        <MuiCheckbox name="hasInsurance" label="Has Insurance" />
        <MuiSelect
          name="car"
          label="pick a car"
          options={cars}
          displayKey="make"
          initialValue={cars[2]}
        />

        <MuiInput name="horsePower" label="horse power" type="number" />

        <MuiRadio
          name="class"
          value="A"
          label="class A"
        />
        <MuiRadio
          name="class"
          value="B"
          label="class B"
        />
        <MuiRadio
          name="class"
          value="C"
          label="class C"
        />
        <MuiSubmit />
      </Form>
    </Card>
  );
};

export default MuiForm;
