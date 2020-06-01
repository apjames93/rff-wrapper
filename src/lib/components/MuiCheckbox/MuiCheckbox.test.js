import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { MuiCheckbox } from './MuiCheckbox';
import Form from '../Form/Form';

function setup() {
  const props = {
    name: 'cool',
  };
  const comp = shallow(<MuiCheckbox {...props} />);
  return { comp, props };
}

describe('<Input />', () => {
  it('renders Input', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(
      <Form onSubmit={() => true}>
        <MuiCheckbox {...props} />
      </Form>,
    );
    expect(tree).toMatchSnapshot();
  });
});
