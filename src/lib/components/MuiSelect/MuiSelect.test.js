import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { MuiSelect, passPropsCallBack } from './MuiSelect';
import Form from '../Form/Form';

const field = (name, error = false, touched = true) => ({
  input: {
    name,
    value: 69,
    onChange: jest.fn(),
  },
  meta: {
    error,
    touched,
  },
});

describe('passPropsCallBack', () => {
  it('name and lable are the same error false', () => {
    const f = field('cool');
    const callback = passPropsCallBack(f);
    expect(callback.name).toEqual(callback.label);
    expect(callback.error).toBe(false);
  });

  it('name and lable are not the same error true', () => {
    const f = field('cool', true, true);
    const callback = passPropsCallBack(f, 'not cool');
    expect(callback.name).toEqual('cool');
    expect(callback.label).toEqual('not cool');
    expect(callback.error).toBe(true);
  });
});

function setup() {
  const props = {
    name: 'cool',
    options: [{ num: 'six' }, { num: 'nine' }],
    displayKey: 'num',
  };
  const comp = shallow(<MuiSelect {...props} />);
  return { comp, props };
}

describe('<Select />', () => {
  it('renders Select', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create((
      <Form onSubmit={() => true}>
        <MuiSelect {...props} />
      </Form>
    ));
    expect(tree).toMatchSnapshot();
  });
});
