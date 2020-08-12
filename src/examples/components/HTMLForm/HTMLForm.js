import React from 'react';
import Card from '@material-ui/core/Card';
import {
  Form,
  HTMLSelect,
  HTMLCheckbox,
  HTMLInput,
  HTMLRadio,
  HTMLSubmit,
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

const HTMLForm = () => {
  const onSubmitHTMLForm = async (values) => {
    console.log('onSubmitHTMLForm values', values);
  };

  return (
    <Card>
      <Form
        onSubmit={onSubmitHTMLForm}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <HTMLSelect
            name="car"
            options={cars}
            displayKey="make"
            label="pick a car"
            initialValue={cars[0]}
          />
          <HTMLCheckbox name="hasInsurance" label="Has Insurance" />
          <HTMLInput
            name="horsePower"
            label="horse power"
            type="number"
            validate={(value) => {
              if (!value) return 'required';
              return undefined;
            }}
          />
          <HTMLRadio
            name="class"
            value="A"
            label="class A"
          />
          <HTMLRadio
            name="class"
            value="B"
            label="class B"
          />
          <HTMLRadio
            name="class"
            value="C"
            label="class C"
          />
        </div>
        <HTMLSubmit />
      </Form>
    </Card>
  );
};

export default HTMLForm;
