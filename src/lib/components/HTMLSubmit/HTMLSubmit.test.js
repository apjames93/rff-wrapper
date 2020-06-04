import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { HTMLSubmit } from './HTMLSubmit';
import Form from '../Form/Form';

function setup() {
  const props = {
    buttonText: 'submit',
  };
  const comp = shallow(<HTMLSubmit {...props} />);
  return { comp, props };
}

describe('<HTMLSubmit />', () => {
  it('renders HTMLSubmit', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(
      <Form onSubmit={() => true}>
        <HTMLSubmit {...props} />
      </Form>,
    );
    expect(tree).toMatchSnapshot();
  });
});
