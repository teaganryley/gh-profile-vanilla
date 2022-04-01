import React from 'react';
import styled from 'styled-components';
import Button from '../../components/button';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Main = () => (
  <Container>
    <h1>Main</h1>
    <Button variant="primary">Buscar</Button>
  </Container>
);

export default Main;
