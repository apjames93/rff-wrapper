import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
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
        <MemoryRouter>
          <HTMLCheckbox {...props} />
        </MemoryRouter>
      </Form>,
    );
    expect(tree).toMatchSnapshot();
  });
});
