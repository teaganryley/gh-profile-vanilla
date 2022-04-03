import React from 'react';
import styled from 'styled-components';
import Button from '../../components/button';
import Icon from '../../components/icon';
import Input from '../../components/input';
import search from '../../assets/search.png';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Main = () => (
  <Container>
    <h1>Main</h1>
    <form>
      <Input type="text" value="Type the username here..." />
      <Button variant="primary">
        <Icon src={search} />
        Buscar
      </Button>
    </form>
  </Container>
);

export default Main;
