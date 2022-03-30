import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Main = () => (
  <Container>
    <h1>Main</h1>
  </Container>
);

export default Main;
