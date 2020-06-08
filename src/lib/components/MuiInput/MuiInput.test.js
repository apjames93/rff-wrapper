import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { MuiInput } from './MuiInput';
import Form from '../Form/Form';

function setup() {
  const props = {
    name: 'cool',
  };
  const comp = mount(
    <Form onSubmit={() => true}>
      <MuiInput {...props} />
    </Form>,
  );
  return { comp, props };
}

describe('<Input />', () => {
  it('renders Input', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  it('calls onChange in text input', () => {
    const { comp } = setup();
    let input = comp.find('input').first();
    input.simulate('change', { target: { value: 'poop' } });
    input = comp.find('input').first();
    expect(input.props().value).toEqual('poop');
  });

  it('calls onChange in number input', () => {
    const { props } = setup();
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

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create((
      <Form onSubmit={() => true}>
        <MuiInput {...props} />
      </Form>
    ));
    expect(tree).toMatchSnapshot();
  });
});
