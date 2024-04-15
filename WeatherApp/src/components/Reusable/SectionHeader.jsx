import React from "react";
import { Container } from "react-bootstrap";

const SectionHeader = ({ title, mb }) => {
  return (
    <Container
    as="h5"
    style={{
      fontSize: '16px',
      color: 'rgba(255,255,255,.7)',
      fontWeight: '600',
      lineHeight: 1,
      textAlign: 'center',
    
      marginBottom: mb ? mb : '1rem',
    }}
  >
    {title}
  </Container>
  );
};

export default SectionHeader;
