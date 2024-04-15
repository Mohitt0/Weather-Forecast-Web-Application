import React from 'react';
import { getUTCDatetime } from '../../utilities/DateTimeUtils';

const UTCDatetime = () => {
  const utcFullDate = getUTCDatetime();
  const utcTimeValue = (
    <h3
      className=' font-normal text-[14px] text-blue-300 leading-4 pr-[2px]'
    >
      {utcFullDate} GMT
    </h3>
  );
  return utcTimeValue;
};

export default UTCDatetime;