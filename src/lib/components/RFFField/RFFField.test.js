import React from 'react';
import { mount } from 'enzyme';
import { RFFField, passPropsCallback } from './RFFField';
import Form from '../Form/Form';

function setup(validate = undefined) {
  const props = {
    validate,
    name: 'name',
  };
  const comp = mount(
    <Form onSubmit={() => true}>
      <RFFField {...props}>
        <span>wooo</span>
      </RFFField>
    </Form>,
  );
  return { comp, props };
}

describe('<RFFField />', () => {
  it('renders RFFField', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  it('has error', () => {
    const { comp } = setup(() => 'bad');
    expect(comp.html().includes('bad')).toBe(true);
  });

  it('passPropsCallback', () => {
    const field = {
      input: {
        name: 'coolName',
        value: 'value',
        onChange: jest.fn(),
      },
    };

    const value = passPropsCallback(field);
    expect(value.name).toEqual('coolName');
    expect(value.value).toEqual('value');
  });
});
