import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { HTMLRadio } from './HTMLRadio';
import Form from '../Form/Form';

function setup() {
  const props = {
    name: 'cool',
    value: 'htmlRadio1',
    label: 'apples',
  };
  const comp = mount(
    <Form onSubmit={() => true}>
      <HTMLRadio {...props} />
    </Form>,
  );
  return { comp, props };
}

describe('<HTMLRadio />', () => {
  it('renders HTMLRadio', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  it('simulate change and checkes that onchange toggles checked value', () => {
    const { props } = setup();

    const comp = mount(
      <Form onSubmit={() => true}>
        <HTMLRadio {...props} />
        <HTMLRadio {...props} value="woooo" />
      </Form>,
    );
    let radioInputProps = comp.find('[data-testid="HTMLRadio"]').first().props();
    expect(radioInputProps.checked).toBe(false);
    comp.find('[data-testid="HTMLRadio"]').first().simulate('change');
    radioInputProps = comp.find('[data-testid="HTMLRadio"]').first().props();
    expect(radioInputProps.checked).toBe(true);
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(
      <Form onSubmit={() => true}>
        <HTMLRadio {...props} />
      </Form>,
    );
    expect(tree).toMatchSnapshot();
  });
});
