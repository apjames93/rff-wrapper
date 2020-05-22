import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import MuiRadio from './MuiRadio';
import Form from '../Form/Form';

function setup(checkedIcon = '', icon = '') {
  const props = {
    checkedIcon,
    icon,
    name: 'radio name',
  };
  const comp = shallow(<MuiRadio {...props} />);
  return { comp, props };
}

describe('<MuiRadio />', () => {
  it('renders Radio', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(
      <Form onSubmit={() => true}>
        <MemoryRouter>
          <MuiRadio {...props} />
        </MemoryRouter>
      </Form>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('should render a checkedIcon if provided', () => {
    const { props } = setup({ iconName: 'menu' });
    expect(props.checkedIcon).toEqual({ iconName: 'menu' });
  });

  it('should render an Icon if provided', () => {
    const { props } = setup({ iconName: 'menu' }, { iconName: 'menu' });
    expect(props.checkedIcon).toEqual({ iconName: 'menu' });
    expect(props.icon).toEqual({ iconName: 'menu' });
  });

  it('should render a checkedIcon if provided', () => {
    const { props } = setup('', { iconName: 'menu' });
    expect(props.icon).toEqual({ iconName: 'menu' });
  });
});
