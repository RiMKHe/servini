import React from 'react';

const CallButton = ({ phoneNumber }) => {
  return (
    <a href={`tel:${+21655907988}`} >
      <button className='text-primary-blue  rounded-full  bg-white min-w-[130px]" onClick={() => window.location.href = `tel:${phoneNumber}`}'> 
         Call us !  
      </button>
    </a>
  );
};

export default CallButton;