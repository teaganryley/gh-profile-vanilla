import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col } from 'react-grid-system';
import Icon from 'components/icon';
import Button from 'components/button';
import Input from 'components/input';
import { search } from 'assets/icons';

const StyledContainer = styled(Container)`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Label = styled.label`
  color: ${({ theme }) => theme.colors.secondary};
  font-family: inherit;
  font-size: 40px;
  font-style: italic;
  line-height: 50px;
  width: 500px;
  text-align: center;
`;

const Main = () => {
  const [value, setValue] = useState('');
  const navigate = useNavigate();

  const handleChange = e => setValue(e.target.value);
  const handleSubmit = e => navigate(`/profile/${e.target.value}`);

  return (
    <StyledContainer>
      <form onSubmit={handleSubmit}>
        <Row align="center" justify="center" nogutter>
          <Label>Search Devs</Label>
        </Row>
        <Row align="center" justify="center" nogutter>
          <Col>
            <Input
              id="search-input"
              type="text"
              placeholder="Type the username here..."
              value={value}
              onChange={handleChange}
            />
          </Col>
          <Col>
            <Button variant="primary">
              <Icon src={search} color="accent" />
              Buscar
            </Button>
          </Col>
        </Row>
      </form>
    </StyledContainer>
  );
};

export default Main;
