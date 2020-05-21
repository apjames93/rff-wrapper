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
            {children && children.length && children.map((child, i) => {
              return cloneElement(
                child,
                {
                  fields,
                  key: i,
                  name: `${name}[${child.props.name}]`,
                  index,
                },
              );
            })}
          </div>
        ))}
      </>
    )}
  </FieldArray>
);

export default RFFFieldArray;

RFFFieldArray.propTypes = {};

RFFFieldArray.defaultProps = {};
