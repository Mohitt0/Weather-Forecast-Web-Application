import React from "react";

const CityDateDetails = (props) => {
  const boxStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    height: '100%',
    fontWeight: '600',
    fontSize: '16px', // default size for md breakpoint
    color: 'white',
    textTransform: 'uppercase',
    lineHeight: 1,
    marginBottom: '8px',
  };
  return (
     <div style={boxStyle}>
      <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>{props.city}</h3>
      <h4 style={{ fontSize: '14px', color: 'rgba(255,255,255, .7)', lineHeight: 1 }}>{`Today ${props.date}`}</h4>
    </div>
  );
};

export default CityDateDetails;
