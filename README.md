# mui-rff
[![Maintainability](https://api.codeclimate.com/v1/badges/14b45935ebd014e5a75d/maintainability)](https://codeclimate.com/github/apjames93/rff-wrapper/maintainability)

[![Test Coverage](https://api.codeclimate.com/v1/badges/14b45935ebd014e5a75d/test_coverage)](https://codeclimate.com/github/apjames93/rff-wrapper/test_coverage)

> wrapper for material ui react input components with react-final-form

> [React ](https://reactjs.org/): A JavaScript library for building user interfaces

> [Material-UI ](https://material-ui.com/): React components for faster and easier web development.

> [react-final-form ](https://final-form.org/react): A JavaScript library for building user interfaces

> Documtation could use some work [docs](http://rff-wrapper-style-guide.com.s3-website-us-west-2.amazonaws.com/)


#### Usage:
 - `npm i rff-wrapper`
```js
import React from 'react';
import {
  Form,
  MuiInput,
  MuiCheckbox,
  MuiSubmit,
} from 'rff-wrapper';

const FormRender = () => {
  const onSubmit = async (values) => {
    console.log('onSubmit values', values);
  };

  return (
      <Form
        onSubmit={onSubmit}
        render={(p) => {
          return (
            <form onSubmit={p.handleSubmit}>
              <MuiInput name="name" label="name" />
              <MuiCheckbox name="isCool" label="is cool" />
              <MuiSubmit />
            </form>
          );
        }}
      />
  );
};