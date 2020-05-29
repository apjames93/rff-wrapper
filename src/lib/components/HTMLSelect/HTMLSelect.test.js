import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { HTMLSelect } from './HTMLSelect';
import Form from '../Form/Form';

function setup() {
  const props = {
    name: 'cool',
    options: [{ num: 'six' }, { num: 'nine' }],
    displayKey: 'num',
  };
  const comp = shallow(<HTMLSelect {...props} />);
  return { comp, props };
}

describe('<Select />', () => {
  it('renders Select', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(
      <Form onSubmit={() => true}>
        <HTMLSelect {...props} />
      </Form>,
    );
    expect(tree).toMatchSnapshot();
  });
});
