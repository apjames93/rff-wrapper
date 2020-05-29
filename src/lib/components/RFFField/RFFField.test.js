import React from 'react';
import { shallow } from 'enzyme';
import { RFFField, passPropsCallback } from './RFFField';

function setup() {
  const props = {};
  const comp = shallow(<RFFField {...props} />);
  return { comp, props };
}

describe('<RFFField />', () => {
  it('renders RFFField', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
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
