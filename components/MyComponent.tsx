import React from 'react';
import CallButton from './CallButton';

const MyComponent = () => {
  const phoneNumber = "+21655907988";

  return (
    <div>
      <p>Numéro de téléphone : {phoneNumber}</p>
      <CallButton phoneNumber={phoneNumber} />
    </div>
  );
};

export default MyComponent;