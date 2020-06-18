/* eslint-disable no-console */
import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';
import renderer from 'react-test-renderer';
import { MuiInput, customPropName } from './MuiInput';
import Form from '../Form/Form';

function setup(name = undefined) {
  const props = {
    name,
  };
  const comp = mount(
    <Form onSubmit={() => true}>
      <MuiInput {...props} />
    </Form>,
  );
  return { comp, props };
}

function expectMissingProp(prop, component) {
  console.log(prop);
  sinon.assert.calledWithMatch(console.error,
    new RegExp(`The prop \`${prop}\` is marked as required in \`${component}\`, but its value is \`undefined\`.`));
}

describe('<MuiInput />', () => {
  beforeEach(() => {
    sinon.stub(console, 'error');
  });

  afterEach(() => {
    console.error.restore();
  });
  it('renders MuiInput', () => {
    const { comp } = setup('cool');
    expect(comp).toBeDefined();
  });

  it('calls onChange in text input', () => {
    const { comp } = setup('cool');
    let input = comp.find('input').first();
    input.simulate('change', { target: { value: 'poop' } });
    input = comp.find('input').first();
    expect(input.props().value).toEqual('poop');
  });

  it('calls onChange in number input', () => {
    const { props } = setup('cool');
    const comp = mount(
      <Form onSubmit={() => true}>
        <MuiInput type="number" {...props} />
      </Form>,
    );
    let input = comp.find('input').first();
    input.simulate('change', { target: { value: '69' } });
    input = comp.find('input').first();
    expect(input.props().value).toEqual(69);
  });

  it('should return an error if no fields prop and no names prop is passed down', () => {
    const { comp } = setup();
    const errorProp = customPropName({ fields: undefined }, 'apples', 'MuiInput');
    expect(errorProp.toString()).toEqual(
      'Error: MuiInput: apples requires to have name value if fields are not passed down. Please wrap this in RFFField Array or add a name prop.',
    );
  });

  test('snapshot', () => {
    const { props } = setup('cool');
    const tree = renderer.create((
      <Form onSubmit={() => true}>
        <MuiInput {...props} />
      </Form>
    ));
    expect(tree).toMatchSnapshot();
  });
});
