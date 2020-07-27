import React from 'react';
import PropTypes from 'prop-types';
import ReactTelephoneInput from 'react-telephone-input';
import flagsImagePath from '../../../images/flags.png';

const TelephoneInput = ({ defaultCountry, initialValue }) => {
  const handleInputChange = (telNumber, selectedCountry) => {
    console.log(`input changed. Number: ${telNumber}. Country: ${selectedCountry}`);
  };

  const handleInputBlur = (telNumber, selectedCountry) => {
    console.log(`Focus off TelephoneInput. Telephone Number: ${telNumber}. Selected Country: ${selectedCountry}.`);
  };

  return (
    <ReactTelephoneInput
      defaultCountry={defaultCountry}
      flagsImagePath={flagsImagePath}
      onChange={handleInputChange}
      onBlur={handleInputBlur}
      initialValue={initialValue}
    />
  );
};

export default TelephoneInput;

TelephoneInput.propTypes = {
  defaultCountry: PropTypes.string,
  initialValue: PropTypes.string,
};

TelephoneInput.defaultProps = {
  defaultCountry: 'us',
  initialValue: null,
};
