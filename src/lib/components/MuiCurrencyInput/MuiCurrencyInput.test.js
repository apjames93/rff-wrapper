/* eslint-disable no-console */
import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { MuiCurrencyInput, customPropName } from './MuiCurrencyInput';
import Form from '../Form/Form';

const FormTest = props => (
  <Form onSubmit={() => true}>
    <MuiCurrencyInput {...props} />
  </Form>
);

function setup(name = undefined) {
  const props = {
    name: 'apples',
    label: 'amount',
    passProps: jest.fn(),
    initialValue: 10.12,
    outputFormat: 'number',
  };
  const comp = mount(<FormTest {...props} />);
  return { comp, props };
}

describe('<MuiCurrencyInput />', () => {
  it('renders MuiCurrencyInput', () => {
    const { comp } = setup('cool');
    expect(comp).toBeDefined();
  });

  it('should return an error if no fields prop and no names prop is passed down', () => {
    const errorProp = customPropName({ fields: undefined }, 'apples', 'MuiCurrencyInput');
    expect(errorProp.toString()).toEqual(
      'Error: MuiCurrencyInput: apples requires to have name value if fields are not passed down. Please wrap this in RFFField Array or add a name prop.',
    );
  });
});
