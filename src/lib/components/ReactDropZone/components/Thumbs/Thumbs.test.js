import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Thumbs from './Thumbs';

function setup(type = '') {
  const props = {
    files: [{
      preview: 'preview',
      name: 'name',
      type,
    }],
  };
  const comp = mount(<Thumbs {...props} />);
  return { comp, props };
}

describe('<Thumbs />', () => {
  it('renders Thumbs', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  it('renders Thumbs image', () => {
    const { comp } = setup();
    const image = comp.find('[data-testid="image"]').length;
    expect(image).toEqual(1);
  });

  it('renders Thumbs json', () => {
    const { comp } = setup('application/json');
    const json = comp.find('[data-testid="json"]').length;
    expect(json).toEqual(3); // mui is passing data-testid down
  });

  it('renders Thumbs embed', () => {
    const { comp } = setup('application/pdf');
    const embed = comp.find('[data-testid="embed"]').length;
    expect(embed).toEqual(1);
  });


  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(<Thumbs {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
