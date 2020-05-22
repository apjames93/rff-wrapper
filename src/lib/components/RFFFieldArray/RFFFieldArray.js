import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';
import { FieldArray } from 'react-final-form-arrays';

/**
 * RFFFieldArray
*/

export const RFFFieldArray = ({
  children,
  fieldArrayName,
}) => (
  <FieldArray
    name={fieldArrayName}
  >
    {({ fields }) => (
      <>
        {fields.map((name, index) => (
          <div key={index}>
            {Array.isArray(children) && children.map((child, i) => cloneElement(
              child,
              {
                fields,
                key: i,
                name: `${name}[${child.props.name}]`,
                index,
              },
            ))}

            {!Array.isArray(children) && cloneElement(
              children,
              {
                fields,
                name: `${name}[${children.props.name}]`,
              },
            )}

          </div>
        ))}
      </>
    )}
  </FieldArray>
);

export default RFFFieldArray;

RFFFieldArray.propTypes = {
  children: PropTypes.string.isRequired,
  fieldArrayName: PropTypes.string.isRequired,
};

RFFFieldArray.defaultProps = {};
