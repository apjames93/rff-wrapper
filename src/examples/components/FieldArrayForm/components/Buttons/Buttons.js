import React from 'react';
import PropTypes from 'prop-types';

const Buttons = ({
  form,
}) => (
  <div>
    <button
      type="button"
      onClick={() => form.mutators.push('people', undefined)}
    >
      Add Person
    </button>
    <button type="button" onClick={() => form.mutators.pop('people')}>
      Remove Person
    </button>
  </div>
);

export default Buttons;

Buttons.propTypes = {
  // rff wrapper passes from prop to each root child element
  form: PropTypes.shape({
    mutators: PropTypes.shape({
      push: PropTypes.func,
      pop: PropTypes.func,
    }),
  }),
};

Buttons.defaultProps = {
  form: {},
};
