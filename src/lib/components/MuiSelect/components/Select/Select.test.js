/* eslint-disable no-console */
import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { Select } from './Select';
import Form from '../../../Form/Form';

const FormTest = props => (
  <Form onSubmit={() => true}>
    <Select {...props} />
  </Form>
);

function setup() {
  const props = {
    field: {
      input: {
        value: { cool: 'thing' },
      },
    },
    options: [{
      cool: 'thing',
    }, {
      cool: 'stuff',
    }],
  };
  const comp = mount(<FormTest {...props} />);
  return { comp, props };
}

describe('<Select />', () => {
  it('renders Select', () => {
    const { comp } = setup('cool');
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup('cool');
    const tree = renderer.create(<FormTest {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
