import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { HTMLCheckbox } from './HTMLCheckbox';
import Form from '../Form/Form';

function setup() {
  const props = {
    name: 'cool',
    label: 'apples',
  };
  const comp = shallow(<HTMLCheckbox {...props} />);
  return { comp, props };
}

describe('<HTMLCheckbox />', () => {
  it('renders Input', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(
      <Form onSubmit={() => true}>
        <HTMLCheckbox {...props} />
      </Form>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('should call handle change and set the checked event to onChange', () => {
    const { comp } = setup();
    const field = {
      input: {
        name: 'name',
        value: 'value',
        onChange: jest.fn(),
      },
    };
    const mockEvent = {
      target: {
        checked: true,
      },
    };
    const rffField = comp.find('RFFField').first();
    rffField.prop('passProps')(field).onChange(mockEvent);
    expect(field.input.onChange).toHaveBeenCalled();
  });
});
