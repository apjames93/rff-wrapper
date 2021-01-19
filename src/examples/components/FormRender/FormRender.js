import React from 'react';
import Card from '@material-ui/core/Card';
import {
  Form,
  MuiInput,
  MuiCheckbox,
  MuiSubmit,
} from '../../../lib/index';

const FormRender = () => {
  const onSubmitFormRender = async (values) => {
    console.log('onSubmitFormRender values', values);
  };

  return (
    <Card>
      <Form
        onSubmit={onSubmitFormRender}
        render={(p) => {
          console.log(p);
          return (
            <form onSubmit={p.handleSubmit}>
              <MuiInput name="name" label="name" />
              <MuiCheckbox name="isCool" label="is cool" />
              <MuiSubmit />
            </form>
          );
        }}
      />
    </Card>
  );
};

export default FormRender;
