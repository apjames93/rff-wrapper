import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { HTMLInput } from './HTMLInput';
import Form from '../Form/Form';

function setup() {
  const props = {
    name: 'cool',
  };
  const comp = mount(
    <Form onSubmit={() => true}>
      <HTMLInput {...props} />
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
    // console.log(comp.debug())
    expect(input.props().value).toEqual('poop');
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(
      <Form onSubmit={() => true}>
        <HTMLInput {...props} />
      </Form>,
    );
    expect(tree).toMatchSnapshot();
  });
});
